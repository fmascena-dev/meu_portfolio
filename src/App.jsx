import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

const Technologies = () => <h2>Technologies</h2>;
const Projects = () => <h2>Projects</h2>;
const Contact = () => <h2>Contact</h2>;
const About = () => <h2>About</h2>;

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}
