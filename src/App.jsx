import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Terminal from './components/Terminal.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terminal" element={<Terminal />} />
      </Routes>
    </>
  );
}
