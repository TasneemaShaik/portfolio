import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Research from './components/Research.jsx';
import Extracurricular from './components/Extracurricular.jsx';
import Volunteer from './components/Volunteer.jsx';
import Awards from './components/Awards.jsx';
import Education from './components/Education.jsx';
import Blogs from './components/Blogs.jsx';
import Contact from './components/Contact.jsx';
import { NAV_ITEMS } from './data.js';

// Map NAV_ITEMS to components
const sections = {
  Home,
  'Education': Education,
  'Research': Research,
  'Extracurriculars': Extracurricular,
  'Volunteer': Volunteer,
  'Awards & Certifications': Awards,
  'Blogs': Blogs,
  'Contact': Contact
};

export default function App() {
  const [active, setActive] = useState('Home');

  const ActiveComponent = useMemo(() => sections[active] ?? Home, [active]);

  return (
    <div className="min-h-screen">
      <header className="top-0 z-50">
        <div className="container flex items-center justify-between py-3">
          <a href="#" className="inline-flex items-center gap-2 font-extrabold text-white">
            <span className="w-2.5 h-2.5 rounded-full" style={{background: 'linear-gradient(135deg,#60a5fa,#22d3ee)', boxShadow: '0 0 18px #60a5fa'}}></span>
            Tasneema Shaik
          </a>
          <Navbar active={active} setActive={setActive} />
        </div>
      </header>

      <main className="container py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="container py-8 text-center text-gray-700">
        © {new Date().getFullYear()} Tasneema Shaik
      </footer>
    </div>
  );
}
