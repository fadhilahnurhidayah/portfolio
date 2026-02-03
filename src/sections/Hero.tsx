import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useTheme } from '../context/ThemeContext';
import MainButton from '../components/MainButton';
import logoImg from '../assets/images/profil.png';

function Hero() {
    const { theme } = useTheme();
    const heroRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(logoRef.current,
                { scale: 0, rotation: -180, opacity: 0 },
                {
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'elastic.out(1, 0.5)',
                    delay: 0.3
                }
            );

            gsap.fromTo('.hero-line',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: 'power3.out',
                    delay: 0.5
                }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="min-h-dvh flex items-center justify-center section-padding"
        >
            <div className="w-full max-w-3xl mx-auto text-center">
                {/* Logo */}
                <motion.div className="mb-8 flex justify-center">
                    <img
                        ref={logoRef}
                        src={logoImg}
                        alt="Fadhilah Nurhidayah"
                        className="w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain rounded-full"
                        style={{
                            boxShadow: `0 0 40px rgba(125, 31, 47, 0.3)`
                        }}
                    />
                </motion.div>

                {/* Name */}
                <h1 className="hero-line text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3">
                    <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
                        Fadhilah
                    </span>
                </h1>

                <h1 className="hero-line text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-linear-to-r from-[#7d1f2f] to-[#d4a574] bg-clip-text text-transparent">
                    Nurhidayah
                </h1>

                {/* Title */}
                <h2 className={`hero-line text-lg sm:text-2xl font-medium mb-6 text-center ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                    Partnership & Grants
                </h2>

                {/* Description */}
                <p className={`hero-line text-sm sm:text-base leading-relaxed mb-10 max-w-2xl mx-auto text-center ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                    Mahasiswa Teknik Informatika UIN Suska Riau yang passionate tentang
                    kolaborasi strategis, event organizing, dan web development.
                </p>

                {/* Buttons */}
                <motion.div
                    className="hero-line flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <MainButton text="Lihat Portfolio" link="#projects" variant="primary" icon size="sm" />
                    <MainButton text="Hubungi Saya" link="#contact" variant="outline" size="sm" />
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="mt-24 flex justify-center"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'
                        }`}>
                        <motion.div
                            className={`w-1.5 h-2 rounded-full ${theme === 'light' ? 'bg-gray-400' : 'bg-gray-500'
                                }`}
                            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
