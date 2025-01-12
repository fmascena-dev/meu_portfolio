import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import {
  FaHome,
  FaLaptopCode,
  FaCode,
  FaUserTie,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';

export default function Header() {
  const [selected, setSelected] = useState('home'); // Menu selecionado
  const [scrolled, setScrolled] = useState(false); // Estado do scroll
  const [menuOpen, setMenuOpen] = useState(false); // Controle do menu hamburguer

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'technologies', 'project', 'contact', 'about'];
      let currentSection = '';

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = id;
            break;
          }
        }
      }

      setSelected(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollSmooth = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleMenuClick = (menu, event) => {
    setSelected(menu);
    handleScrollSmooth(event);
    setMenuOpen(false); // Fecha o menu após o clique
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav
        className={`${styles.nav} ${menuOpen ? styles.open : ''} ${
          scrolled ? styles.navScrolled : ''
        }`}
      >
        <a
          href="#home"
          className={`${styles.navItem} ${
            selected === 'home' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('home', event)}
        >
          <FaHome className={styles.icon} />
          <span>Início</span>
        </a>
        <a
          href="#technologies"
          className={`${styles.navItem} ${
            selected === 'technologies' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('technologies', event)}
        >
          <FaCode className={styles.icon} />
          <span>Tecnologias</span>
        </a>
        <a
          href="#project"
          className={`${styles.navItem} ${
            selected === 'project' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('project', event)}
        >
          <FaLaptopCode className={styles.icon} />
          <span>Projetos</span>
        </a>
        <a
          href="#contact"
          className={`${styles.navItem} ${
            selected === 'contact' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('contact', event)}
        >
          <MdContactMail className={styles.icon} />
          <span>Contato</span>
        </a>
        <a
          href="#about"
          className={`${styles.navItem} ${
            selected === 'about' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('about', event)}
        >
          <FaUserTie className={styles.icon} />
          <span>Sobre Mim</span>
        </a>
      </nav>
    </header>
  );
}
