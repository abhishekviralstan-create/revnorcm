import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Preloader from "./components/Preloader";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import RCM from "./pages/RCM.jsx";
import Billing from "./pages/Billing.jsx";
import HIPAA from "./pages/HIPAA.jsx";
import Coding from "./pages/Coding.jsx";
import Denial from "./pages/Denial.jsx";
import Credentialing from "./pages/Credentialing.jsx";
import Contact from "./pages/Contact.jsx";
import Blogs from "./pages/Blogs.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Eligibility from "./pages/Eligibility.jsx";
import ChargesEntry from "./pages/ChargesEntry.jsx";
import PaymentPosting from "./pages/PaymentPosting.jsx";
import Reporting from "./pages/reporting.jsx";
import Cstudy from "./pages/casestudy.jsx";
import Testimonials from "./pages/testimonials.jsx";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import ManageBlogs from "./pages/ManageBlogs.jsx";
import AccessPending from "./pages/AccessPending.jsx";
import EditBlog from "./pages/EditBlog.jsx";
import AdminResetPassword from "./pages/AdminResetPassword.jsx";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("blog_token");
  const user = JSON.parse(localStorage.getItem("blog_user"));

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.access) {
    return <Navigate to="/access-pending" replace />;
  }

  return children;
}

function AppContent() {
  const location = useLocation();
  const [showPreloader, setShowPreloader] = useState(true);

  const hideLayoutRoutes = [
    "/login",
    "/signup",
    "/dashboard",
    "/dashboard/create-blog",
    "/dashboard/manage-blogs",
  ];

  const isDashboardEditRoute = location.pathname.startsWith("/dashboard/edit-blog/");
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname) || isDashboardEditRoute;

  useEffect(() => {
    setShowPreloader(true);

    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {showPreloader && <Preloader />}

      <ScrollToTop />

      {!shouldHideLayout && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/rcm-services" element={<RCM />} />
          <Route path="/medical-billing" element={<Billing />} />
          <Route path="/hipaa-compliance" element={<HIPAA />} />
          <Route path="/medical-coding" element={<Coding />} />
          <Route path="/denial-management" element={<Denial />} />
          <Route path="/credentialing" element={<Credentialing />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/eligibility-and-benifits" element={<Eligibility />} />
          <Route path="/payment-posting" element={<PaymentPosting />} />
          <Route path="/charges-entry" element={<ChargesEntry />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/our-case-studies" element={<Cstudy />} />
          <Route path="/our-testimonials" element={<Testimonials />} />
          <Route path="/access-pending" element={<AccessPending />} />
          <Route path="/news-blogs" element={<Blogs />} />
          <Route path="/news-blogs/:slug" element={<BlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/reset-password" element={<AdminResetPassword />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/create-blog"
            element={
              <ProtectedRoute>
                <CreateBlog />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/manage-blogs"
            element={
              <ProtectedRoute>
                <ManageBlogs />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/dashboard/edit-blog/:id"
            element={
              <ProtectedRoute>
                <EditBlog />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {!shouldHideLayout && <Footer />}
      {/* {!shouldHideLayout && <WhatsAppButton />} */}
    </>
  );
}

export default function App() {
  return <AppContent />;
}