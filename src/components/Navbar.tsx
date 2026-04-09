import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Menu from './Menu';
import DLogo from './DLogo';

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
        { route: '#certificates', title: 'Certificates' },
        { route: '#contact', title: 'Contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'py-3 backdrop-blur-2xl' + (theme === 'light' ? ' bg-white/95 border-b border-gray-200/50 shadow-md' : ' bg-black/95 border-b border-gray-800/50')
                    : 'py-6 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-3 group">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <DLogo size="sm" />
                            </motion.div>
                            <span className={`font-bold text-xl tracking-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'
                                }`}>
                                Dila
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.route}
                                    className={`relative text-sm font-bold tracking-wide transition-all duration-300 py-2 group ${theme === 'light'
                                        ? 'text-gray-600 hover:text-[#7d1f2f]'
                                        : 'text-gray-300 hover:text-[#d4a574]'
                                        }`}
                                >
                                    {link.title}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full ${theme === 'light' ? 'bg-[#7d1f2f]' : 'bg-[#d4a574]'
                                        }`} />
                                </a>
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-8 pr-2">
                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMenuOpen(true)}
                                className={`lg:hidden text-sm font-bold px-5 py-2 rounded-full border-2 transition-all ${theme === 'light'
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
