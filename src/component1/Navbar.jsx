// NavBar.jsx
import React from "react";

export default function NavBar({
  userName = "Namaste Shyama Dey",
  location = "North 24 Parganas 700163",
  onSearch = () => {},
  cartCount = 0,
  notifCount = 0,
}) {
  const [q, setQ] = React.useState("");

  function submit(e) {
    e.preventDefault();
    onSearch(q);
  }

  return (
    <header className="bg-transparent px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        {/* Left: greeting + location */}
        <div className="flex-shrink-0 min-w-0">
          <div className="text-xs text-gray-600">Namaste</div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium text-gray-900 truncate">{userName}</div>
            <button
              type="button"
              aria-label="select location"
              className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-800"
            >
              <span className="hidden sm:inline-block truncate max-w-[180px]">{location}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Center: search (flex-grow) */}
        <div className="flex-1">
          <form onSubmit={submit} className="w-full flex items-center">
            <label htmlFor="nav-search" className="sr-only">Search</label>
            <div className="relative w-full max-w-[680px] mx-auto">
              <input
                id="nav-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search"
                className="w-full bg-gray-100 border border-transparent focus:border-gray-200 focus:ring-0 rounded-full pl-4 pr-10 py-3 text-sm placeholder-gray-400"
              />
              <button
                type="submit"
                aria-label="search"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white shadow text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m.85-3.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-3">
          {/* Location icon small */}
          <div className="hidden sm:flex items-center justify-center bg-white border border-gray-200 rounded-full h-10 w-10 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
            </svg>
          </div>

          {/* Notification bell with badge */}
          <IconButton ariaLabel="notifications" count={notifCount}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </IconButton>

          {/* Cart with badge */}
          <IconButton ariaLabel="cart" count={cartCount}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6h14l-2-6" />
            </svg>
          </IconButton>
        </div>
      </div>
    </header>
  );
}

/* small reusable IconButton component (inside same file or separate) */
function IconButton({ children, count = 0, ariaLabel = "button" }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="relative inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 shadow-sm"
    >
      {children}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-5 min-w-[18px] px-1.5 rounded-full bg-rose-500 text-white text-xs font-medium">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
