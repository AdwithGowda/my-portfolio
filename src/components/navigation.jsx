import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ag from "../assets/ag.png";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#abouts" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const Logo = () => (
    <a href="#home" className="flex items-center gap-2 group">
      <img src={ag} alt="Logo" className="h-10 w-auto group-hover:scale-110 transition-transform duration-300" />
    </a>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 md:px-16 bg-transparent backdrop-blur-md z-[9999]">
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-1 text-white font-medium">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden text-white hover:text-gray-300 transition-colors z-[9999]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-black/80 backdrop-blur-md flex flex-col md:hidden transition-all duration-300 overflow-hidden z-[9998] ${
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 text-white font-medium hover:bg-white hover:text-black transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navigation;
