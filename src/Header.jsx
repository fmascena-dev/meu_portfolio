import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { FaHome, FaLaptopCode, FaCode, FaUserTie } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';

export default function Header() {
  const [selected, setSelected] = useState('home'); // Menu selecionado
  const [scrolled, setScrolled] = useState(false); // Estado do scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Atualiza o item do menu com base na seção visível
      const sections = ['home', 'tecnologias', 'projetos', 'contato', 'sobre'];
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
    const targetId = event.currentTarget.getAttribute('href').slice(1); // Remove o "#"
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
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
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
          href="#tecnologias"
          className={`${styles.navItem} ${
            selected === 'tecnologias' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('tecnologias', event)}
        >
          <FaCode className={styles.icon} />
          <span>Tecnologias</span>
        </a>
        <a
          href="#projetos"
          className={`${styles.navItem} ${
            selected === 'projetos' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('projetos', event)}
        >
          <FaLaptopCode className={styles.icon} />
          <span>Projetos</span>
        </a>
        <a
          href="#contato"
          className={`${styles.navItem} ${
            selected === 'contato' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('contato', event)}
        >
          <MdContactMail className={styles.icon} />
          <span>Contato</span>
        </a>
        <a
          href="#sobre"
          className={`${styles.navItem} ${
            selected === 'sobre' ? styles.selected : ''
          }`}
          onClick={(event) => handleMenuClick('sobre', event)}
        >
          <FaUserTie className={styles.icon} />
          <span>Sobre Mim</span>
        </a>
      </nav>
    </header>
  );
}
