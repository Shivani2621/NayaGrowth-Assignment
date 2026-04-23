// src/components/Nav.jsx
import React from "react";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f6f1]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-950">
          Sere Innovations
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#problem" className="hover:text-slate-950">
            Problem
          </a>
          <a href="#solution" className="hover:text-slate-950">
            Solution
          </a>
          <a href="#features" className="hover:text-slate-950">
            Features
          </a>
          <a href="#contact" className="hover:text-slate-950">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800"
        >
          Request a demo
        </a>
      </div>
    </header>
  );
};

export default Nav;