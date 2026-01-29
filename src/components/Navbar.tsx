import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Menu from './Menu';
import DarkLightSwitch from './DarkLightSwitch';
import profilImg from '../assets/images/profil.png';

function Navbar() {
    const { theme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { route: '#home', title: 'Home' },
        { route: '#about', title: 'About' },
        { route: '#projects', title: 'Projects' },
        { route: '#experience', title: 'Experience' },
        { route: '#contact', title: 'Contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'py-4 backdrop-blur-2xl' + (theme === 'light' ? ' bg-white/95 border-b border-gray-200/50 shadow-md' : ' bg-black/95 border-b border-gray-800/50')
                    : 'py-8 bg-transparent'
                    }`}
            >
                <div className="max-w-[1920px] mx-auto px-6 md:pl-12 md:pr-12">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-4 group">
                            <div className="relative w-12 h-12 overflow-hidden rounded-full ring-2 ring-gray-100 shadow-lg">
                                <img
                                    src={profilImg}
                                    alt="Profil"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <span className={`font-bold text-2xl tracking-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'
                                }`}>
                                Dila<span className="text-[#7d1f2f]">.</span>
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-12">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.route}
                                    className={`relative text-[1.05rem] font-bold tracking-wide transition-all duration-300 py-2 group ${theme === 'light'
                                        ? 'text-gray-600 hover:text-[#7d1f2f]'
                                        : 'text-gray-300 hover:text-[#d4a574]'
                                        }`}
                                >
                                    {link.title}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-[3px] rounded-full transition-all duration-300 group-hover:w-full ${theme === 'light' ? 'bg-[#7d1f2f]' : 'bg-[#d4a574]'
                                        }`} />
                                </a>
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-10">
                            <div className="scale-125 transition-transform hover:scale-135">
                                <DarkLightSwitch />
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMenuOpen(true)}
                                className={`lg:hidden text-base font-bold px-6 py-2.5 rounded-full border-2 transition-all ${theme === 'light'
                                    ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                                    : 'border-white text-white hover:bg-white hover:text-black'
                                    }`}
                            >
                                Menu
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Full Screen Menu */}
            <AnimatePresence>
                {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
