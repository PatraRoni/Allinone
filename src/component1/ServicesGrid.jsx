// ServicesGrid.jsx
import React from "react";

/**
 * ServicesGrid
 * - topFeatures: small rectangular cards (title, subtitle, small pill icon + ETA)
 * - icons: circular icon tiles with label; last item can show overflow (+N)
 *
 * Usage:
 *  <ServicesGrid topFeatures={TOP} icons={ICONS} />
 *
 * Replace placeholder SVGs with image imports if you prefer.
 */
export default function ServicesGrid({ topFeatures = TOP, icons = ICONS }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-6">
      {/* top feature row: scrollable on small screens */}
      <div className="mb-4">
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-1 md:grid md:grid-cols-4 md:gap-4">
          {topFeatures.map((f) => (
            <article
              key={f.id}
              className="flex-shrink-0 w-[220px] md:w-auto bg-white rounded-xl shadow-sm p-3 md:p-4 border border-gray-100"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800 leading-tight">{f.title}</h4>
                  {f.subtitle && (
                    <div className="text-xs text-gray-400 mt-1">{f.subtitle}</div>
                  )}
                </div>

                {/* small square icon */}
                <div className="flex-none self-start">
                  <div className="w-9 h-9 bg-gray-50 rounded-md flex items-center justify-center shadow-inner">
                    {f.icon}
                  </div>
                </div>
              </div>

              {/* bottom mini-row: badge / ETA */}
              <div className="mt-3 flex items-center gap-2 justify-between">
                <div className="text-xs text-emerald-700 font-semibold">{f.pill}</div>
                <div className="text-xs text-gray-400">{f.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* icons grid */}
      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-6 gap-3">
          {icons.map((it, idx) => {
            if (it.type === "overflow") {
              return (
                <div key={idx} className="flex flex-col items-center gap-2 p-2">
                  <div className="w-14 h-14 rounded-full bg-gray-100 grid place-items-center text-sm text-gray-700 font-medium">
                    {it.label}
                  </div>
                  <div className="text-xs text-gray-600 text-center">{it.title}</div>
                </div>
              );
            }

            return (
              <button
                key={it.key ?? idx}
                className="flex flex-col items-center gap-2 p-2 hover:bg-gray-50 rounded-md"
                type="button"
                onClick={it.onClick}
                aria-label={it.title}
              >
                <div className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                  {it.icon}
                </div>
                <div className="text-xs text-gray-700 text-center">{it.title}</div>
                {it.badge && (
                  <div className="text-[10px] text-emerald-600 font-semibold">{it.badge}</div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* hide scrollbar on WebKit */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

/* -------------------------
   Example placeholder data
   Replace icons with <img src={...} /> or imported svg components
   ------------------------- */
const TOP = [
  {
    id: 1,
    title: "Apollo Pharmacy",
    subtitle: "SINCE 1987",
    pill: "2-9 mins",
    meta: "•",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Lab Test At Home",
    subtitle: "60% OFF",
    pill: "•",
    meta: "",
    icon: (
      <svg className="h-5 w-5 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Doctor Booking",
    subtitle: "PRE BOOK",
    pill: "•",
    meta: "",
    icon: (
      <svg className="h-5 w-5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" d="M12 2l3 7h7l-5 4 2 7-7-4-7 4 2-7L2 9h7z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Health Insurance",
    subtitle: "0% GST",
    pill: "•",
    meta: "",
    icon: (
      <svg className="h-5 w-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" d="M12 2L2 7l10 5 10-5L12 2z" />
      </svg>
    ),
  },
];

const ICONS = [
  {
    key: "select",
    title: "Apollo SELECT",
    icon: (
      <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
      </svg>
    ),
    badge: "SAVE 25%",
    onClick: () => console.log("Apollo SELECT"),
  },
  {
    key: "records",
    title: "Health Records",
    icon: (
      <svg className="h-6 w-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    key: "offers",
    title: "Mega Offers",
    icon: (
      <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" d="M3 12h18" />
      </svg>
    ),
    badge: "TOP BRANDS",
  },
  {
    key: "assistant",
    title: "Health Assistant",
    icon: (
      <svg className="h-6 w-6 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" d="M12 12v9" />
      </svg>
    ),
    onClick: () => console.log("assistant"),
  },

  // more items
  { key: "circle", title: "Circle Benefits", icon: <DummyIcon /> },
  { key: "consult", title: "On-Time Consult", icon: <DummyIcon /> },
  { key: "visit", title: "Visit Hospital", icon: <DummyIcon /> },

  // overflow tile
  { type: "overflow", label: "+9", title: "View" },
];

/* simple placeholder icon component */
function DummyIcon() {
  return (
    <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="1.5" d="M12 2l3 7h7l-5 4 2 7-7-4-7 4 2-7L2 9h7z" />
    </svg>
  );
}
