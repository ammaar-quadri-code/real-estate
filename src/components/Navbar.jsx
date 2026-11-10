import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-ammaar-1 transition-colors' : 'hover:text-ammaar-1 transition-colors';

  return (
    <nav className="flex flex-wrap justify-between items-center gap-4 w-full">
      <Link to="/" className="text-3xl text-white">
        Real<span className="font-bold">Estate</span>
      </Link>

      <div className="flex gap-6 text-lg text-white">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/services" className={navLinkClass}>Services</NavLink>
        <NavLink to="/properties" className={navLinkClass}>Properties</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
      </div>

      <div className="flex gap-4 text-white">
        <a href="#" className="hover:text-ammaar-1 transition-colors">Twitter</a>
        <a href="#" className="hover:text-ammaar-1 transition-colors">Pinterest</a>
        <a href="#" className="hover:text-ammaar-1 transition-colors">YouTube</a>
      </div>
    </nav>
  );
}