import type { Dispatch, SetStateAction } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

type MenuProps = {
    readonly menuOpen: boolean;
    readonly setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

function Menu({ setMenuOpen }: MenuProps) {
    const { theme } = useTheme();

    const navLinks = [
        { route: '#home', title: 'Home' },
        { route: '#about', title: 'About' },
        { route: '#projects', title: 'Projects' },
        { route: '#experience', title: 'Experience' },
        { route: '#certificates', title: 'Certificates' },
        { route: '#contact', title: 'Contact' },
    ];

    const primaryEasing: [number, number, number, number] = [0.83, 0, 0.17, 1];

    const handleLinkClick = (route: string) => {
        setMenuOpen(false);
        setTimeout(() => {
            const element = document.querySelector(route);
            element?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    };

    return (
        <motion.section
            initial={{
                clipPath: 'circle(0% at calc(100% - 40px) 40px)',
            }}
            animate={{
                clipPath: 'circle(150% at calc(100% - 40px) 40px)',
                transition: { duration: 0.8, ease: primaryEasing },
            }}
            exit={{
                clipPath: 'circle(0% at calc(100% - 40px) 40px)',
                transition: { duration: 0.6, ease: primaryEasing, delay: 0.3 },
            }}
            className={`fixed inset-0 z-100 ${theme === 'light' ? 'bg-white' : 'bg-black'
                }`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, ${theme === 'light' ? '#7d1f2f' : '#d4a574'} 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="relative h-full flex flex-col justify-center items-center">
                {/* Close Button */}
                <motion.button
                    onClick={() => setMenuOpen(false)}
                    className={`absolute top-8 right-8 p-3 rounded-full transition-colors ${theme === 'light'
                        ? 'text-gray-800 hover:bg-gray-100'
                        : 'text-gray-200 hover:bg-gray-800'
                        }`}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{
                        opacity: 1,
                        rotate: 0,
                        transition: { delay: 0.4, duration: 0.4 }
                    }}
                    exit={{ opacity: 0, rotate: 90 }}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <X size={32} strokeWidth={1.5} />
                </motion.button>

                {/* Navigation Links */}
                <nav className="flex flex-col items-center gap-4">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.title}
                            className="overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 0.2 + i * 0.1 }
                            }}
                            exit={{
                                opacity: 0,
                                transition: { delay: 0.1 - i * 0.02 }
                            }}
                        >
                            <motion.button
                                onClick={() => handleLinkClick(link.route)}
                                className={`relative group text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-wider ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'
                                    }`}
                                initial={{ y: '100%' }}
                                animate={{
                                    y: 0,
                                    transition: {
                                        delay: 0.3 + i * 0.1,
                                        duration: 0.8,
                                        ease: primaryEasing
                                    }
                                }}
                                exit={{
                                    y: '100%',
                                    transition: { duration: 0.4, ease: primaryEasing }
                                }}
                                whileHover={{ x: 20 }}
                            >
                                <span className="inline-flex items-center gap-4">
                                    <span
                                        className="text-lg font-normal opacity-40"
                                        style={{ fontFamily: 'serif' }}
                                    >
                                        0{i + 1}
                                    </span>
                                    {link.title}
                                </span>

                                {/* Hover underline */}
                                <motion.span
                                    className="absolute bottom-0 left-0 h-0.5 bg-(--color-primary)"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        </motion.div>
                    ))}
                </nav>
            </div>
        </motion.section>
    );
}

export default Menu;
