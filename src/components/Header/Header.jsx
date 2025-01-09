import { NavLink } from 'react-router-dom';
import './HeaderStyle.scss';
import { FaCode, FaHome, FaLaptopCode, FaUserTie } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <FaHome size={15} />
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technologies"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <FaCode size={15} />
              TECHNOLOGIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <FaLaptopCode size={15} />
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <MdContactMail size={15} />
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <FaUserTie size={15} />
              ABOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
