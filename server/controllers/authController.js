import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const makeUserResponse = (user) => {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    access: user.access,
    dob: user.dob,
    authorRole: user.authorRole,
    experience: user.experience,
    hasProfileImage: !!user.profileImage?.data,
  };
};

export const signupUser = async (req, res) => {
  try {
    const { name, email, password, dob, authorRole, experience } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    const userExists = await User.findOne({ email: cleanEmail });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "This email is already registered. Please login instead.",
      });
    }

    const userData = {
      name,
      email: cleanEmail,
      password,
      dob,
      authorRole: authorRole || "Author",
      experience: experience || "",
      access: false,
    };

    if (req.file) {
      userData.profileImage = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const user = await User.create(userData);

    return res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: makeUserResponse(user),
      message: "Signup successful. Account approval is pending.",
    });
  } catch (error) {
    console.log("Signup Error:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "This email is already registered. Please login instead.",
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message || "Signup failed",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter email and password",
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    const user = await User.findOne({ email: cleanEmail });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    return res.status(200).json({
      success: true,
      token: generateToken(user._id),
      user: makeUserResponse(user),
    });
  } catch (error) {
    console.log("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Login failed",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const getAuthorImage = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("profileImage");

    if (!user || !user.profileImage || !user.profileImage.data) {
      return res.status(404).json({
        success: false,
        message: "Author image not found",
      });
    }

    res.set("Content-Type", user.profileImage.contentType);
    res.set("Cache-Control", "public, max-age=86400");

    return res.send(user.profileImage.data);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Image fetch failed",
    });
  }
};

export const resetUserPasswordByEmail = async (req, res) => {
  try {
    const { email, newPassword, adminSecret } = req.body;

    if (!email || !newPassword || !adminSecret) {
      return res.status(400).json({
        success: false,
        message: "Email, new password and admin secret are required",
      });
    }

    if (adminSecret !== process.env.ADMIN_SECRET) {
      return res.status(403).json({
        success: false,
        message: "Invalid admin secret",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "New password must be at least 6 characters",
      });
    }

    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found with this email",
      });
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
      user: makeUserResponse(user),
    });
  } catch (error) {
    console.log("Reset Password Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Password reset failed",
    });
  }
};