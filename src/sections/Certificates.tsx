import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink, ShieldCheck, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
    {
        title: 'Fullstack Web Developer',
        issuer: 'Dicoding x DBS Foundation',
        date: '2026',
        category: 'Teknis',
        desc: 'Sertifikasi pengembangan aplikasi web modern dengan standar industri melalui program beasiswa.'
    },
    {
        title: 'Strategic Partnership Strategy',
        issuer: 'Ruang Asa Academy',
        date: '2026',
        category: 'Leadership',
        desc: 'Pelatihan manajemen kemitraan strategis dan kolaborasi organisasi.'
    },
    {
        title: 'Social Impact Strategy',
        issuer: 'Global Volunteer Network',
        date: '2025',
        category: 'Social',
        desc: 'Metodologi perancangan dan implementasi program pengabdian masyarakat.'
    },
    {
        title: 'Public Speaking Excellence',
        issuer: 'Asomatif MC Masters',
        date: '2024',
        category: 'Communication',
        desc: 'Sertifikasi keahlian komunikasi publik dan manajemen acara formal.'
    }
];

function Certificates() {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.cert-title',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: '.cert-title',
                        start: 'top 90%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="certificates"
            ref={sectionRef}
            className={`w-full flex justify-center section-padding ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
        >
            <div className="w-full max-w-6xl flex flex-col items-center text-center">
                {/* Section Title */}
                <div className="flex flex-col items-center mb-16">
                    <span className={`cert-title inline-block text-sm font-black tracking-widest uppercase mb-4 ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'
                        }`}>
                        Achievements
                    </span>
                    <h2 className={`cert-title text-4xl sm:text-5xl md:text-6xl font-extrabold ${theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                        Sertifikasi
                    </h2>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {certificates.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            className={`group relative p-10 rounded-4xl overflow-hidden transition-all duration-500 hover-lift ${theme === 'light'
                                ? 'bg-gray-50/50 border border-gray-100 shadow-xl shadow-gray-200/30'
                                : 'bg-gray-900/40 border border-gray-800'
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
                                <div className={`w-20 h-20 rounded-3xl shrink-0 flex items-center justify-center transition-transform group-hover:scale-110 ${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800 shadow-2xl'}`}>
                                    <Trophy size={32} className="text-[#d4a574]" />
                                </div>
                                
                                <div className="flex-1 flex flex-col items-center sm:items-start">
                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${theme === 'light' ? 'bg-[#7d1f2f] text-white' : 'bg-[#d4a574] text-black'}`}>
                                            {cert.category}
                                        </span>
                                        <span className="text-xs font-bold text-gray-400">{cert.date}</span>
                                    </div>
                                    
                                    <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                        {cert.title}
                                    </h3>
                                    
                                    <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                                        <ShieldCheck size={16} className="text-[#7d1f2f]" />
                                        <p className={`text-sm font-bold tracking-wide uppercase ${theme === 'light' ? 'text-gray-800' : 'text-gray-400'}`}>
                                            {cert.issuer}
                                        </p>
                                    </div>

                                    <p className={`text-sm leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-500'}`}>
                                        {cert.desc}
                                    </p>

                                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7d1f2f] hover:gap-4 transition-all">
                                        Lihat Sertifikat <ExternalLink size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certificates;
