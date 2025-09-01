"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface NavbarProps {
  onSelect: (section: string) => void;
}

export default function Navbar({ onSelect }: NavbarProps) {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setScreenSize("mobile");
      else if (window.innerWidth < 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 h-[70px] bg-black text-white shadow-sm border-b border-white z-[100]">
      <div className="relative flex items-center justify-between h-full px-4 sm:px-6 md:px-10">
        {/* Logo */}
        <div
          className={`flex items-center space-x-3 ${
            screenSize === "mobile"
              ? "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
              : ""
          }`}
        >
          <Image
            src="/assets/linux.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-10 sm:w-12 md:w-14"
          />
          {screenSize !== "mobile" && (
            <span className="text-sm md:text-base font-medium">
              Lab Sistem Operasi B
            </span>
          )}
        </div>

        {/* Menu kanan (desktop/tablet) */}
        {screenSize !== "mobile" && (
          <div className="flex items-center space-x-6 z-50">
            <button
              onClick={() => onSelect("Apa Itu Sistem Operasi")}
              className="relative hover:text-gray-100 transition group"
            >
              Course
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gray-100 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </button>

            <button
              onClick={() => onSelect("VirtualBox")}
              className="relative hover:text-gray-100 transition group"
            >
              Tools
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gray-100 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
