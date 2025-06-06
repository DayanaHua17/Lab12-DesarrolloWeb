'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Inicio", path: "/" },
  { name: "Productos", path: "/almacen/producto" },
  { name: "Reportes", path: "/reportes" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="bg-gradient-to-r from-black via-neutral-800 to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold tracking-wide animate-fade-in-down">
          🛠️ Gestión CRUD
        </h1>
        <ul className="flex space-x-8">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.path}
                className={`relative px-3 py-2 text-white font-medium transition-all duration-300 ease-in-out
                  ${pathname === link.path ? 'border-b-2 border-cyan-400' : ''}
                  hover:text-cyan-400 hover:scale-105`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {link.name}
                {hovered === idx && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400 animate-slide-in" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
