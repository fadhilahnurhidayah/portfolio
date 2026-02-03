import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { Code2, Users, Lightbulb, Mic, Calculator, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.about-title',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: '.about-title',
                        start: 'top 90%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const skills = [
        { icon: Mic, title: 'Public Speaking' },
        { icon: Users, title: 'Partnership' },
        { icon: Code2, title: 'Web Dev' },
        { icon: Calculator, title: 'Budgeting' },
        { icon: Lightbulb, title: 'Research' },
        { icon: Clock, title: 'Time Management' },
    ];

    const stats = [
        { value: '3+', label: 'Projects' },
        { value: '5+', label: 'Events' },
        { value: 'S1', label: 'Sem 6' },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="section-padding"
        >
            <div className="w-full flex flex-col items-center gap-12">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <span className={`about-title inline-block text-sm font-medium tracking-widest uppercase mb-6 ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'
                        }`}>
                        Tentang Saya
                    </span>
                    <h2 className={`about-title text-3xl sm:text-5xl md:text-6xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                        Partnership & Grants Enthusiast
                    </h2>
                </div>

                {/* Bio */}
                <div
                    className={`w-full max-w-5xl p-8 sm:p-12 rounded-2xl text-center hover-lift ${theme === 'light'
                        ? 'bg-white shadow-xl shadow-gray-100/50'
                        : 'bg-gray-800/50 border border-gray-700 backdrop-blur-sm'
                        }`}
                    style={{ marginBottom: '2.5rem' }}
                >
                    <p className={`text-lg sm:text-xl leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                        }`}>
                        Halo! Saya <strong>Fadhilah Nurhidayah</strong>, mahasiswa Semester 6 Teknik Informatika di
                        UIN Sultan Syarif Kasim Riau.
                    </p>
                    <p className={`text-lg sm:text-xl leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                        }`}>
                        Berpengalaman sebagai pelaksana teknis hingga Time Keeper,
                        kini berfokus mengembangkan keahlian di bidang <strong>Partnership & Grants</strong>.
                    </p>
                </div>

                {/* Stats */}
                <div
                    className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-3 gap-8 mb-24"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            className={`p-8 rounded-2xl text-center hover-lift ${theme === 'light'
                                ? 'bg-white shadow-xl shadow-gray-100/50'
                                : 'bg-gray-800 border border-gray-700'
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-[#7d1f2f] to-[#d4a574] bg-clip-text text-transparent mb-3">
                                {stat.value}
                            </div>
                            <div className={`text-base font-medium ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                                }`}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skills */}
                <h3 className={`text-2xl font-bold mb-12 text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                    Kemampuan
                </h3>
                <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={skill.title}
                            className={`flex items-center gap-5 p-6 sm:p-8 rounded-2xl hover-lift ${theme === 'light'
                                ? 'bg-white shadow-xl shadow-gray-100/50'
                                : 'bg-gray-800 border border-gray-700'
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex flex-shrink-0 items-center justify-center ${theme === 'light' ? 'bg-[#7d1f2f]/10' : 'bg-[#7d1f2f]/30'
                                }`}>
                                <skill.icon className="w-8 h-8 text-[#7d1f2f]" />
                            </div>
                            <h4 className={`text-base font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'
                                }`}>
                                {skill.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
