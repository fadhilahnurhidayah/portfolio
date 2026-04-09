import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, GraduationCap, Users, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        type: 'Work',
        title: 'Fullstack Web Developer Cohort',
        company: 'Coding Camp 2026 - Dicoding x DBS Foundation',
        period: 'Feb 2026 - Sekarang',
        desc: 'Peserta program beasiswa intensif pengembangan Front-End dan Back-End Web menggunakan ReactJS dan PostgreSQL.'
    },
    {
        type: 'Internship',
        title: 'Fullstack Developer Intern',
        company: 'PT PLN (Persero) UP2D Pekanbaru',
        period: 'Jan - Mar 2026',
        desc: 'Mengembangkan aplikasi MOVI (Monitoring Evidensi) untuk otomasi pelaporan dan monitoring data internal.'
    },
    {
        type: 'Organization',
        title: 'Partnership & Collaboration Officer',
        company: 'Ruang Asa',
        period: 'Mar 2026 - Sekarang',
        desc: 'Membangun dan mengelola kemitraan strategis dengan pihak eksternal untuk program bantuan sosial.'
    },
    {
        type: 'Volunteering',
        title: 'Relawan Dokumentasi',
        company: 'Rumah Zakat x Hidup Mulia Mati Mulia Korps',
        period: 'Mar 2026',
        desc: 'Bertanggung jawab atas manajemen aset visual dan dokumentasi kegiatan publikasi panti asuhan.'
    },
    {
        type: 'Organization',
        title: 'Bendahara',
        company: 'Labsquad AIoT',
        period: 'Sep 2025 - Sekarang',
        desc: 'Mengelola administrasi keuangan organisasi dan menyusun laporan anggaran kegiatan tahunan.'
    },
    {
        type: 'Education',
        title: 'S1 Teknik Informatika',
        company: 'UIN Suska Riau',
        period: '2023 - Sekarang',
        desc: 'Mahasiswa semester 6 dengan konsentrasi pada rekayasa perangkat lunak dan sistem informasi.'
    },
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
                    duration: 0.8,
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
        switch (type.toLowerCase()) {
            case 'work': case 'internship': return Briefcase;
            case 'education': return GraduationCap;
            default: return Users;
        }
    };

    return (
        <section
            id="experience"
            ref={sectionRef}
            className={`w-full flex justify-center section-padding ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
        >
            <div className="w-full max-w-4xl flex flex-col items-center text-center">
                {/* Section Title */}
                <div className="flex flex-col items-center mb-24">
                    <span className={`exp-title inline-block text-sm font-black tracking-[0.2em] uppercase mb-4 ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'
                        }`}>
                        History
                    </span>
                    <h2 className={`exp-title text-4xl sm:text-5xl md:text-6xl font-black ${theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                        Pengalaman
                    </h2>
                </div>

                {/* Vertical Center Stack */}
                <div className="w-full space-y-12 flex flex-col items-center">
                    {experiences.map((exp, idx) => {
                        const Icon = getIcon(exp.type);
                        return (
                            <motion.div
                                key={idx}
                                className={`group relative w-full flex flex-col items-center text-center p-10 md:p-14 rounded-4xl border transition-all duration-500 ${theme === 'light'
                                    ? 'bg-white border-gray-100 shadow-2xl shadow-gray-200/40 hover:border-[#7d1f2f]/20'
                                    : 'bg-gray-900 border-gray-800'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.05 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                {/* Center Icon */}
                                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-linear-to-br from-[#7d1f2f] to-[#d4a574] shadow-xl transform group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon size={32} className="text-white" />
                                </div>

                                {/* Content */}
                                <div className="space-y-4 max-w-2xl flex flex-col items-center">
                                    <div className="flex flex-wrap items-center justify-center gap-4 mb-2">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${theme === 'light' ? 'bg-gray-100 text-[#7d1f2f]' : 'bg-gray-800 text-[#d4a574]'}`}>
                                            {exp.type}
                                        </span>
                                        <div className={`flex items-center gap-2 text-xs font-bold ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`}>
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <h3 className={`text-2xl sm:text-3xl font-black ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                        {exp.title}
                                    </h3>
                                    
                                    <p className={`text-lg font-bold ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'}`}>
                                        {exp.company}
                                    </p>

                                    <p className={`text-base leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                        {exp.desc}
                                    </p>
                                </div>
                                
                                {/* Aesthetic Node Connector */}
                                {idx !== experiences.length - 1 && (
                                    <div className="absolute -bottom-12 left-1/2 w-[2px] h-12 bg-linear-to-b from-[#7d1f2f]/20 to-transparent transform -translate-x-1/2 hidden md:block" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experience;
