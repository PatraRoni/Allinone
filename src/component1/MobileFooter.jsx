// MobileFooter.jsx
import React from "react";

/**
 * MobileFooter
 * Props:
 *  - items: array of { key, title, icon } (optional; default provided)
 *  - active: key of active item (string)
 *  - onChange: fn(key) called when item clicked
 *
 * Usage: <MobileFooter active="home" onChange={(k)=>setActive(k)} />
 */
export default function MobileFooter({
  items = DEFAULT_ITEMS,
  active = "home",
  onChange = () => {},
}) {
  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-sm md:hidden"
    >
      <ul className="max-w-lg mx-auto flex justify-between items-center px-2 py-1">
        {items.map((it) => {
          const isActive = it.key === active;
          return (
            <li key={it.key} className="flex-1">
              <button
                onClick={() => onChange(it.key)}
                className={`w-full flex flex-col items-center justify-center gap-1 py-2 px-1 ${
                  isActive ? "text-rose-600" : "text-gray-500"
                }`}
                aria-current={isActive ? "page" : undefined}
                aria-label={it.title}
              >
                <span className="relative inline-flex items-center justify-center">
                  {/* optional small badge (for 'home' example) */}
                  {it.badge && (
                    <span className="absolute -top-2 -right-3 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-semibold rounded-md bg-rose-500 text-white">
                      {it.badge}
                    </span>
                  )}

                  {/* icon (inline SVG placeholder) */}
                  <span className={`inline-block ${isActive ? "text-rose-600" : ""}`}>
                    {it.icon}
                  </span>
                </span>

                <span className="text-[11px] leading-4 font-medium mt-0.5">
                  {it.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* ---------------------------
   default items & placeholder SVGs
   Replace icons with your imported svgs or <img /> as needed
   --------------------------- */
const DEFAULT_ITEMS = [
  {
    key: "home",
    title: "Home",
    badge: "24/7",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11.5L12 4l9 7.5" />
        <path d="M5 22V12h14v10" />
      </svg>
    ),
  },
  {
    key: "doctors",
    title: "Doctors",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="3" />
        <path d="M5.5 21a6.5 6.5 0 0113 0" />
      </svg>
    ),
  },
  {
    key: "pharmacy",
    title: "Pharmacy",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    key: "lab",
    title: "Lab Tests",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3v6" />
        <path d="M18 3v6" />
        <path d="M6 9h12" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    key: "insurance",
    title: "Insurance",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l7 4v6a7 7 0 01-14 0V6l7-4z" />
      </svg>
    ),
  },
  {
    key: "my",
    title: "My Health",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-6-4.35-6-8.5A6 6 0 0112 6a6 6 0 016 6.5C18 16.65 12 21 12 21z" />
      </svg>
    ),
  },
];
