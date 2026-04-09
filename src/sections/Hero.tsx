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
                { scale: 0.8, opacity: 0, y: 30 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power4.out',
                    delay: 0.3
                }
            );

            gsap.fromTo('.hero-line',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
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
            className="w-full min-h-dvh flex items-center justify-center section-padding relative overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7d1f2f]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4a574]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl flex flex-col items-center text-center">
                {/* Logo Wrapper */}
                <motion.div className="mb-10 relative">
                    <div className="absolute inset-0 bg-[#7d1f2f]/20 blur-3xl rounded-full scale-150 animate-pulse" />
                    <img
                        ref={logoRef}
                        src={logoImg}
                        alt="Fadhilah Nurhidayah"
                        className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain rounded-full border-4 border-white/10 shadow-2xl"
                    />
                </motion.div>

                {/* Name */}
                <h1 className="hero-line text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 flex flex-col sm:flex-row items-center justify-center gap-x-4">
                    <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
                        Fadhilah
                    </span>
                    <span className="bg-linear-to-r from-[#7d1f2f] to-[#d4a574] bg-clip-text text-transparent">
                        Nurhidayah
                    </span>
                </h1>

                {/* Professional Title */}
                <h2 className={`hero-line text-xl sm:text-2xl md:text-3xl font-bold mb-8 uppercase tracking-widest ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                    }`}>
                    Fullstack Web Developer
                </h2>

                {/* Description - Professional Language */}
                <p className={`hero-line text-base sm:text-lg leading-relaxed mb-12 max-w-2xl px-6 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                    Mahasiswi Teknik Informatika yang berfokus pada pengembangan aplikasi web 
                    dan solusi digital inovatif untuk memberikan dampak positif bagi masyarakat.
                </p>

                {/* Clean Balanced Buttons */}
                <motion.div
                    className="hero-line flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg px-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <div className="flex-1">
                        <MainButton text="Project Portfolio" link="#projects" variant="primary" size="lg" icon />
                    </div>
                    <div className="flex-1">
                        <MainButton text="Contact Me" link="#contact" variant="outline" size="lg" />
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="mt-20 opacity-40 hover:opacity-100 transition-opacity"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`}>Scroll</div>
                    <div className={`w-[2px] h-10 mx-auto bg-linear-to-b from-[#7d1f2f] to-transparent`} />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
