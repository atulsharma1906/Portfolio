import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  return (

    <div className={`fixed top-0 left-0 w-full z-[9999] ${isDark ? "bg-[#020617] shadow-lg shadow-cyan-500/5 border-b border-cyan-500/10" : "bg-white/95 shadow-lg shadow-slate-300/30 border-b border-slate-200/60"}`}>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-12 py-5">

        {/* LOGO */}

        <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer">

          AS

        </h1>

        {/* DESKTOP MENU */}

        <nav className={`hidden md:flex gap-8 font-medium text-lg ${isDark ? "text-white" : "text-slate-950"}`}>
          <a href="#home" className={`hover:text-cyan-400 transition ${isDark ? "" : "hover:text-cyan-500"}`}>
            Home
          </a>
          <a href="#about" className={`hover:text-cyan-400 transition ${isDark ? "" : "hover:text-cyan-500"}`}>
            About
          </a>
          <a href="#skills" className={`hover:text-cyan-400 transition ${isDark ? "" : "hover:text-cyan-500"}`}>
            Skills
          </a>
          <a href="#experience" className={`hover:text-cyan-400 transition ${isDark ? "" : "hover:text-cyan-500"}`}>
            Experience
          </a>
          <a href="#projects" className={`hover:text-cyan-400 transition ${isDark ? "" : "hover:text-cyan-500"}`}>
            Projects
          </a>
          <a href="#contact" className={`hover:text-cyan-400 transition ${isDark ? "" : "hover:text-cyan-500"}`}>
            Contact
          </a>
        </nav>

        {/* ICON */}

        <div className="flex items-center gap-3">
          <button
            className={`hidden md:inline-flex w-11 h-11 rounded-full border items-center justify-center transition ${isDark ? "border-cyan-500 hover:bg-cyan-500/20" : "border-slate-300/80 hover:bg-slate-200"}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun className="text-cyan-400" /> : <FaMoon className="text-slate-700" />}
          </button>

          <button
            className={`inline-flex md:hidden w-11 h-11 rounded-full border items-center justify-center transition ${isDark ? "border-cyan-500 hover:bg-cyan-500/20" : "border-slate-300/80 hover:bg-slate-200"}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <FaTimes className={isDark ? "text-cyan-400" : "text-slate-700"} />
            ) : (
              <FaBars className={isDark ? "text-cyan-400" : "text-slate-700"} />
            )}
          </button>
        </div>

      </div>

      {menuOpen && (
        <div className={`md:hidden backdrop-blur-md ${isDark ? "bg-[#020617]/95 border-t border-cyan-500/10" : "bg-white/95 border-t border-slate-200/70"}`}>
          <ul className={`flex flex-col gap-4 px-6 py-6 font-medium text-lg ${isDark ? "text-white" : "text-slate-950"}`}>
            <li>
              <a href="#home" className="block hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="block hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="block hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="block hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

    </div>

  )
}

export default Navbar;