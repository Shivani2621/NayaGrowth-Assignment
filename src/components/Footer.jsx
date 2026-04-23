// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-medium text-white">Sere Innovations</p>
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
          <span>Email: hello@sereinnovations.com</span>
          <span>Phone: +91 00000 00000</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;