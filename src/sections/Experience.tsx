import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, GraduationCap, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        type: 'work',
        title: 'Bendahara - Labsquad AIoT',
        company: 'Komunitas Teknologi AIoT',
        period: 'Sep 2025 - Sekarang',
    },
    {
        type: 'work',
        title: 'Time Keeper & Customer Service',
        company: 'Riau Cup Minisoccer',
        period: 'Sep 2025',
    },
    {
        type: 'work',
        title: 'Divisi Acara & MC',
        company: 'Asomatif 2024',
        period: 'Okt 2024',
    },
    {
        type: 'volunteer',
        title: 'Relawan #BerbagiBahagia',
        company: 'CQF, NAYS & Volunteernesia',
        period: 'Mar 2025',
    },
    {
        type: 'education',
        title: 'S1 Teknik Informatika',
        company: 'UIN Suska Riau',
        period: '2023 - Sekarang',
    },
];

const skills = [
    { name: 'Public Speaking', level: 90 },
    { name: 'Partnership', level: 85 },
    { name: 'Project Mgmt', level: 85 },
    { name: 'Web Dev', level: 80 },
    { name: 'Time Mgmt', level: 90 },
];

function Experience() {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.exp-title',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: '.exp-title',
                        start: 'top 90%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const getIcon = (type: string) => {
        switch (type) {
            case 'work': return Briefcase;
            case 'education': return GraduationCap;
            case 'volunteer': return Users;
            default: return Briefcase;
        }
    };

    const getColor = (type: string) => {
        switch (type) {
            case 'work': return 'bg-[#7d1f2f]';
            case 'education': return 'bg-gray-700';
            case 'volunteer': return 'bg-green-600';
            default: return 'bg-[#7d1f2f]';
        }
    };

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="section-padding"
        >
            <div className="w-full flex flex-col items-center">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className={`exp-title inline-block text-sm font-medium tracking-widest uppercase mb-4 ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'
                        }`}>
                        Perjalanan Saya
                    </span>
                    <h2 className={`exp-title text-3xl sm:text-4xl md:text-5xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                        Pengalaman & Pendidikan
                    </h2>
                </div>

                <div className="w-full max-w-5xl grid md:grid-cols-2 gap-16 lg:gap-24">
                    {/* Timeline */}
                    <div>
                        <h3 className={`text-2xl font-bold mb-10 text-center md:text-left ${theme === 'light' ? 'text-gray-900' : 'text-white'
                            }`}>
                            Riwayat
                        </h3>
                        <div className="space-y-8">
                            {experiences.map((exp, idx) => {
                                const Icon = getIcon(exp.type);
                                return (
                                    <motion.div
                                        key={idx}
                                        className={`flex items-start gap-6 p-8 rounded-3xl hover-lift ${theme === 'light'
                                            ? 'bg-white shadow-xl shadow-gray-100/50'
                                            : 'bg-gray-800 border border-gray-700'
                                            }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${getColor(exp.type)} shadow-lg`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1 text-left pt-1">
                                            <h4 className={`font-bold text-lg mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                                                }`}>
                                                {exp.title}
                                            </h4>
                                            <p className={`text-base font-medium mb-1 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                                                }`}>
                                                {exp.company}
                                            </p>
                                            <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                                                }`}>
                                                {exp.period}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <div className="text-center md:text-left mb-10">
                            <h3 className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'
                                }`}>
                                Kemampuan Utama
                            </h3>
                        </div>

                        <div className={`w-full p-10 rounded-3xl ${theme === 'light'
                            ? 'bg-white shadow-xl shadow-gray-100/50'
                            : 'bg-gray-800 border border-gray-700'
                            }`}>
                            <div className="space-y-10">
                                {skills.map((skill, idx) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-3">
                                            <span className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                                                }`}>
                                                {skill.name}
                                            </span>
                                            <span className={`text-base font-medium ${theme === 'light' ? 'text-gray-500' : 'text-gray-500'
                                                }`}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className={`h-4 rounded-full overflow-hidden ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'
                                            }`}>
                                            <motion.div
                                                className="h-full rounded-full bg-linear-to-r from-[#7d1f2f] to-[#d4a574]"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, delay: idx * 0.1, ease: "circOut" }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
