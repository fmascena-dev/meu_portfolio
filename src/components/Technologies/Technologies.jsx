import './TechnologiesStyle.scss';
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaVuejs,
} from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const renderIcon = (IconComponent, color) => {
  return <IconComponent size={40} color={color} />;
};

const tech = [
  {
    name: 'HTML',
    logo: () => renderIcon(FaHtml5, '#E34F26'),
  },
  {
    name: 'CSS',
    logo: () => renderIcon(FaCss3Alt, '#1572B6'),
  },
  {
    name: 'SCSS',
    logo: () => renderIcon(FaSass, '#CC6699'),
  },
  {
    name: 'STYLED-COMPONENTS',
    logo: () => renderIcon(SiStyledcomponents, '#DB7093'),
  },
  {
    name: 'JAVASCRIPT',
    logo: () => renderIcon(FaJsSquare, '#F7DF1E'),
  },
  {
    name: 'REACT',
    logo: () => renderIcon(FaReact, '#61DAFB'),
  },
  {
    name: 'VUE',
    logo: () => renderIcon(FaVuejs, '#42B883'),
  },
  {
    name: 'Next.js (Estudando)',
    logo: () => renderIcon(TbBrandNextjs, '#d3d3d3'),
  },
];

export default function Technologies() {
  return (
    <section id="technologies">
      <h1
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        Tecnologias
      </h1>
      <div className="tech-card">
        {tech.map((item, index) => (
          <div key={index} className="card" data-aos="zoom-in-up">
            <div className="content">
              <div className="img-card" data-aos="flip-down">
                {item.logo()}
              </div>
              <div className="description-card">
                <p className="title" data-aos="fade-up-left">
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
