import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Technologies />
      <Projects />
    </>
  );
}
