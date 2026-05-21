import React from "react";
import "../css/Preloader.css";
import logo from "./logo-tab.png";

export default function Preloader() {
  return (
    <div className="tredixo-preloader">
      <div className="preloader-card">
        <div className="preloader-logo-ring">
          <img src={logo} alt="Revno RCM" />
        </div>
      </div>
    </div>
  );
}