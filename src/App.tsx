import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import DarkLightSwitch from './components/DarkLightSwitch';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        
        {/* Floating Dark Mode Toggle */}
        <div className="fixed bottom-8 right-8 z-100">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-3 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 transition-all hover:scale-110">
            <DarkLightSwitch />
          </div>
        </div>

        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
