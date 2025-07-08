"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import img from "/public/MS.png";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setOpen(true)}
          className="text-2xl focus:outline-none"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Image src={img} alt="Logo" width={32} height={32} />
            <span className="font-semibold text-lg">Merge Society</span>
          </div>
          <button
            onClick={closeSidebar}
            className="text-xl"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="p-4 overflow-y-auto h-[calc(100%-64px)] space-y-4">
          {[
            "Latest",
            "AI",
            "Tech",
            "Apps",
            "Startup Stories",
            "Code Report",
            "Programming Roadmap",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Projects",
            "Quizzes",
          ].map((text) => (
            <Link
              key={text}
              href={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
              className="block font-medium text-base hover:text-orange-500"
              onClick={closeSidebar}
            >
              {text}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
