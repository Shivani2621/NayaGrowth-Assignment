import React, { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#problem", label: "Problem" },
    { href: "#solution", label: "Solution" },
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f6f1]/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight text-slate-950">
            Sere Innovations
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-black/5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-2xl leading-none">☰</span>
            )}
          </button>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800 md:inline-flex"
          >
            Request a demo
          </a>
        </div>

        {open && (
          <div id="mobile-menu" className="pb-4 md:hidden">
            <nav className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-4 text-sm text-slate-700 shadow-sm">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 hover:bg-black/5 hover:text-slate-950"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-green-700 px-4 py-2 font-medium text-white transition hover:bg-green-800"
                onClick={() => setOpen(false)}
              >
                Request a demo
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
