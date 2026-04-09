import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { Code2, Users, Lightbulb, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.about-title',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: '.about-title',
                        start: 'top 90%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const skillCategories = [
        {
            category: 'Technical Development',
            icon: Code2,
            skills: ['Fullstack Web Development', 'Mobile App Development', 'Database Management', 'Cloud Infrastructure']
        },
        {
            category: 'Leadership & Strategy',
            icon: Users,
            skills: ['Partnership Strategy', 'Project Management', 'Financial Tracking', 'Event Organizing']
        },
        {
            category: 'Core Interpersonal',
            icon: Lightbulb,
            skills: ['Public Speaking', 'Analytical Research', 'Time Management', 'Collaboration']
        }
    ];

    const stats = [
        { value: '3.9+', label: 'GPA Score', detail: 'Teknik Informatika' },
        { value: '10+', label: 'Organisasi', detail: 'Peran Kepemimpinan' },
        { value: 'S1', label: 'Semester 6', detail: 'UIN Suska Riau' },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className={`w-full flex justify-center section-padding ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
        >
            <div className="w-full max-w-6xl flex flex-col items-center text-center gap-20">
                {/* Section Title */}
                <div className="flex flex-col items-center">
                    <span className={`about-title inline-block text-sm font-black tracking-[0.2em] uppercase mb-4 ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'
                        }`}>
                        Profile
                    </span>
                    <h2 className={`about-title text-4xl sm:text-5xl md:text-6xl font-black ${theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                        Tentang Saya
                    </h2>
                </div>

                {/* Symmetric Bio Card - Professional Language */}
                <div className={`w-full p-10 md:p-16 rounded-4xl flex flex-col items-center justify-center ${theme === 'light'
                    ? 'bg-gray-50/50 border border-gray-100 shadow-3xl shadow-gray-200/40'
                    : 'bg-gray-900/40 border border-gray-800 backdrop-blur-md'
                    }`}>
                    <div className="max-w-3xl space-y-8">
                        <p className={`text-2xl sm:text-3xl leading-tight font-black ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'
                            }`}>
                            Mahasiswi <span className="text-[#7d1f2f] dark:text-[#d4a574]">Teknik Informatika</span> dengan ketertarikan kuat dalam pengembangan web dan manajemen organisasi.
                        </p>
                        <p className={`text-lg sm:text-xl leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                            }`}>
                            Saya fokus pada pembangunan solusi digital yang efisien dan bermanfaat. Melalui pengalaman dalam berbagai organisasi, 
                            saya mengembangkan kemampuan kepemimpinan dan kolaborasi strategis untuk mendukung keberhasilan setiap proyek.
                        </p>
                    </div>
                </div>

                {/* Symmetric Stats Grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            className={`p-10 rounded-4xl border text-center transition-all duration-300 group ${theme === 'light'
                                ? 'bg-white border-gray-100 shadow-xl shadow-gray-100/30 hover:border-[#7d1f2f]/20'
                                : 'bg-gray-900 border-gray-800 hover:border-[#d4a574]/30'
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-5xl font-black bg-linear-to-r from-[#7d1f2f] to-[#d4a574] bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className={`text-lg font-black mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                {stat.label}
                            </div>
                            <div className={`text-xs font-bold uppercase tracking-widest ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`}>
                                {stat.detail}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Expertise Section */}
                <div className="w-full flex flex-col items-center">
                    <h3 className={`text-3xl font-black mb-14 text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                        Expertise
                    </h3>
                    
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4 justify-items-center">
                        {skillCategories.map((cat, idx) => (
                            <motion.div
                                key={cat.category}
                                className={`w-full p-10 rounded-4xl border transition-all duration-500 flex flex-col items-center text-center ${theme === 'light'
                                    ? 'bg-white border-gray-100 shadow-xl shadow-gray-100/20'
                                    : 'bg-gray-900/50 border-gray-800 backdrop-blur-sm'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 bg-linear-to-br from-[#7d1f2f]/5 to-[#7d1f2f]/10 dark:from-[#7d1f2f]/20 dark:to-transparent`}>
                                    <cat.icon size={32} className="text-[#7d1f2f]" />
                                </div>
                                <h4 className={`text-xl font-black mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                    {cat.category}
                                </h4>
                                <ul className="space-y-4 flex flex-col items-center">
                                    {cat.skills.map((skill) => (
                                        <li key={skill} className="flex items-center gap-3">
                                            <CheckCircle2 size={18} className="text-[#d4a574] shrink-0" />
                                            <span className={`text-base font-bold ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
