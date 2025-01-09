import { MdDownload } from 'react-icons/md';
import './HomeStyles.scss';
import { TbWorldShare } from 'react-icons/tb';
import Button from '../Button/Button';

export default function Home() {
  return (
    <main id="home">
      <section>
        <div className="home-description">
          <h2>Olá, eu sou</h2>
          <h1>&lt;FelipeMascena /&gt;</h1>
          <p>
            Sou <span>desenvolvedor web frontend</span> com sólida experiência
            em HTML, CSS, Sass, Styled-components, JavaScript, React e Vue.js.
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e
            Engenharia de Software. Estou sempre em busca de aprendizado, com
            foco em aprimorar minhas habilidades e conhecimentos. Atualmente,
            estudo TypeScript, NextJS e Tailwind, além de me aprofundar cada vez
            mais nas bases da linguagem de programação.
          </p>
          <div className="btn-home">
            <Button icon={MdDownload} text="Download CV" />
            <Button text="Page CV" icon={TbWorldShare} />
          </div>
        </div>
      </section>
      <figure className="home-image">
        <div className="img_border" />
        <img src="/foto-pessoal.jpg" alt="foto de perfil" />
      </figure>
    </main>
  );
}
