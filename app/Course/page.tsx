"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { menuConfig, MenuItem } from "../menuConfig";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs"; // terminal-like dark

export default function Page() {
  const [active, setActive] = useState("Apa Itu Sistem Operasi");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const findFileByLabel = (
    label: string,
    items = menuConfig
  ): string | null => {
    for (const item of items) {
      if (item.label === label) return item.file ?? null;
      if (item.children) {
        const childResult = findFileByLabel(label, item.children);
        if (childResult) return childResult;
      }
    }
    return null;
  };

  const flattenMenu = (items: MenuItem[]): MenuItem[] => {
    let result: MenuItem[] = [];
    for (const item of items) {
      if (item.file && item.label) result.push(item);
      if (item.children) result = result.concat(flattenMenu(item.children));
    }
    return result;
  };

  const flatMenu = flattenMenu(menuConfig);

  const getNextLabel = (): string | null => {
    const idx = flatMenu.findIndex((i) => i.label === active);
    if (idx >= 0 && idx < flatMenu.length - 1)
      return flatMenu[idx + 1].label ?? null;
    return null;
  };

  const getPrevLabel = (): string | null => {
    const idx = flatMenu.findIndex((i) => i.label === active);
    if (idx > 0) return flatMenu[idx - 1].label ?? null;
    return null;
  };

  const handleNext = () => {
    const nextLabel = getNextLabel();
    if (nextLabel) setActive(nextLabel);
  };

  const handlePrev = () => {
    const prevLabel = getPrevLabel();
    if (prevLabel) setActive(prevLabel);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
  };

  useEffect(() => {
    const fileName = findFileByLabel(active);
    if (fileName) {
      fetch(`/content/${fileName}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [active]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Navbar onSelect={setActive} />

      <div className="flex pt-[70px]">
        <Sidebar
          activeItem={active}
          onSelect={setActive}
          open={open}
          setOpen={setOpen}
        />

        <main
          className={`transition-all duration-300 flex-1 px-4 sm:px-6 md:px-8 py-6
            ${isMobile ? "ml-0" : open ? "ml-64" : "ml-16"} 
          `}
        >
          <div className="max-w-350 mx-auto mt-6">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4"
                    {...props}
                  />
                ),
                h4: ({ node, ...props }) => (
                  <h4
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 mt-8"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="mb-4 leading-relaxed text-justify sm:text-base md:text-sm lg:text-lg"
                    {...props}
                  />
                ),
                hr: ({ node, ...props }) => (
                  <hr className="my-6 border-gray-700" {...props} />
                ),
                img: ({ node, ...props }) => (
                  <img
                    className="inline-block max-h-30 sm:max-h-40 md:max-h-50 lg:max-h-60 mx-2 rounded"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc ml-6 mb-4 space-y-1" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal ml-6 mb-4 space-y-1" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-sm sm:text-base md:text-lg" {...props} />
                ),
                br: ({ ...props }) => (
                  <br {...props} className="block my-4" /> // `my-4` buat jarak atas bawah
                ),
                code({ node, inline, className, children, ...props }: any) {
                  const text = String(children).replace(/\n$/, "");
                  const isTerminal = className === "language-terminal";

                  if (inline) {
                    return (
                      <code
                        className="bg-gray-800 text-green-400 px-1 py-0.5 rounded text-sm"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }

                  return (
                    <div className="relative group mb-4">
                      <SyntaxHighlighter
                        language={
                          isTerminal
                            ? "bash"
                            : className?.replace("language-", "")
                        }
                        style={vs2015}
                        className="rounded-lg overflow-x-auto bg-black text-white"
                        customStyle={{
                          padding: "1rem",
                          fontSize: "0.9rem",
                          backgroundColor: "#0d1117",
                        }}
                      >
                        {text}
                      </SyntaxHighlighter>
                      <button
                        onClick={() => handleCopy(text)}
                        className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition"
                      >
                        {copiedText === text ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>

            <div className="mt-20 flex flex-col sm:flex-row justify-between gap-4">
              {getPrevLabel() && (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePrev();
                  }}
                  className="hover:text-blue-500 transition text-sm sm:text-base underline decoration-1 underline-offset-2"
                >
                  ← {getPrevLabel()}
                </a>
              )}
              {getNextLabel() && (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNext();
                  }}
                  className="hover:text-blue-500 transition text-sm sm:text-base sm:ml-auto underline decoration-1 underline-offset-2"
                >
                  {getNextLabel()} →
                </a>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
