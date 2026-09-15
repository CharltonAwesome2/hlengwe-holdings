import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar.jsx';
import Footer from '@components/Footer.jsx';
import Home from '@pages/Home.jsx';
import About from '@pages/About.jsx';
import Services from '@pages/Services.jsx';
import Team from '@pages/Team.jsx';
import Partners from '@pages/Partners.jsx';
import Gallery from '@pages/Gallery.jsx';
import Contact from '@pages/Contact.jsx';
import ScrollToTop from '@components/ScrollToTop.jsx';
import './App.css';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}