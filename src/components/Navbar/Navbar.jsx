import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Skills", "Projects", "Contact"];

  const handleClick = (item) => {
    setActive(item);
    setOpen(false);
  };

  return (
    <nav className="w-full flex items-center justify-between px-5 md:px-20 py-4 relative">
      <h1 className="text-xl font-bold text-yellow-400">
        Rifky.dev
      </h1>
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-white shadow-md px-10 py-3 rounded-full gap-10">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={`transition-all duration-200
              ${active === item
                ? "text-yellow-400 font-semibold scale-115"
                : "text-gray-500 hover:text-black"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        className="md:hidden text-3xl z-50"
        onClick={() => setOpen(!open)}
      >

      </button>

      <div
        className={`md:hidden absolute top-20 right-5 bg-white shadow-lg rounded-xl w-40 py-4 transition-all duration z-40
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
        `}
      >
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={`block w-full text-left px-5 py-2 transition-all
              ${active === item ? "text-yellow-400 font-semibold" : "text-gray-600"}
            `}
          >
            {item}
          </button>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;


