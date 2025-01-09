import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderStyle.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaCode, FaHome, FaLaptopCode, FaUserTie } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navegação */}
      <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              <FaHome size={15} />
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technologies"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              <FaCode size={15} />
              TECHNOLOGIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              <FaLaptopCode size={15} />
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              <MdContactMail size={15} />
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              <FaUserTie size={15} />
              ABOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
