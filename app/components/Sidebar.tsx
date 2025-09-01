"use client";

import { Menu, X } from "lucide-react";
import { menuConfig, MenuItem } from "./../menuConfig";
import { useState, useEffect } from "react";

export default function Sidebar({
  activeItem,
  onSelect,
  open,
  setOpen,
}: {
  activeItem: string;
  onSelect: (item: string) => void;
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  const [isMobile, setIsMobile] = useState(false);

  // deteksi ukuran layar (mobile/tablet/desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // panggil pertama kali
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getItemClass = (item: MenuItem, isActive: boolean) => {
    if (!item.file) {
      return "font-semibold text-gray-300 cursor-default select-none";
    }
    return `flex items-center rounded px-3 py-2 transition-all duration-200
      ${
        isActive ? "bg-gray-900 border-l-4 border-white" : "hover:bg-gray-800"
      }`;
  };

  const renderMenu = (items: MenuItem[], depth = 0) => (
    <ul className="mt-2 space-y-1">
      {items.map((item, index) => {
        const isActive = activeItem === item.label;
        const hasChildren = item.children && item.children.length > 0;
        const isSub = depth > 0;

        return (
          <li key={`${item.label}-${depth}-${index}`}>
            <div
              className={getItemClass(item, isActive)}
              onClick={() => {
                if (item.file && item.label) {
                  onSelect(item.label);
                  if (isMobile) setOpen(false); // auto-close di mobile
                }
              }}
            >
              {open ? (
                <span
                  style={{ paddingLeft: depth * 12 }}
                  className="flex items-center"
                >
                  {isSub && (
                    <span
                      className={`mr-2 text-xs ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    />
                  )}
                  {item.label}
                </span>
              ) : (
                <span className="mx-auto">
                  {isSub ? (
                    <span
                      className={`text-lg ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      •
                    </span>
                  ) : (
                    <span
                      className={`block w-2 h-2 rounded-full mx-auto ${
                        isActive ? "bg-white" : "bg-gray-500"
                      }`}
                    />
                  )}
                </span>
              )}
            </div>

            {item.children && open && renderMenu(item.children, depth + 1)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Tombol menu khusus mobile (fixed di kiri atas) */}
      {isMobile && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-20 left-4 z-50 bg-gray-800 p-2 rounded-lg shadow-lg hover:bg-gray-700 transition"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Overlay untuk mobile */}
      {isMobile && open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-[60px] left-0 bottom-0 bg-black text-gray-100 transition-all duration-300 z-50
          ${
            isMobile
              ? open
                ? "w-64 translate-x-0"
                : "-translate-x-full w-64"
              : open
              ? "w-64"
              : "w-16"
          } border-r border-white`}
      >
        {/* Header Sidebar */}
        <div className="flex items-center justify-end p-2 mt-3">
          <button
            onClick={() => setOpen(!open)}
            className="p-1 rounded-xl hover:bg-gray-700 transition-all duration-300"
          >
            {isMobile ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Isi menu */}
        <nav className="p-4 space-y-6 overflow-y-auto h-[calc(100%-40px)] text-sm">
          {menuConfig.map((section) => (
            <div key={section.label}>
              {open && <h2 className="font-bold">{section.label}</h2>}
              {section.children && renderMenu(section.children)}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
