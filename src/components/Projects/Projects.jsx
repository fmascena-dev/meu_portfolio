import './ProjectsStyles.scss';
import { FaGithub } from 'react-icons/fa';
import { TbWorldShare } from 'react-icons/tb';
import Projetos from '../Data/DataProjects';

export default function Projects() {
  return (
    <main id="project">
      <h1>Projetos</h1>
      <section className="project-container">
        {Projetos.map((project) => (
          <div
            // data-aos="flip-up"
            // data-aos-delay={`${index * 50}`}
            key={project.id}
            className="project-card"
          >
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-description">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-body">{project.description}</p>
              <div className="btns-links">
                <a href={project.githubLink} target="_blank" className="button-link">
                  <FaGithub />
                  GITHUB
                </a>
                <a href={project.pageLink} target="_blank" className="button-link">
                  <TbWorldShare />
                  PAGE
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
