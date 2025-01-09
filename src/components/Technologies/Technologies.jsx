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
];

export default function Technologies() {
  return (
    <section id="technologies">
      <div className="card-container">
        {tech.map((item, index) => (
          <div key={index} className="card">
            <div className="img-card">
              {item.logo()} 
            </div>
            <div className="description-card">
              <p className="title">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
