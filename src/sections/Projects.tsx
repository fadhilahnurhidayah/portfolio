import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink, Globe, Mic } from 'lucide-react';

import berbagiImg from '../assets/images/berbagibahagia.png';
import iotImg from '../assets/images/iot.png';
import minisoccerImg from '../assets/images/minisoccer.png';
import rundownImg from '../assets/images/rundown.png';
import timekeeperImg from '../assets/images/timekeeper.png';
import webdevImg from '../assets/images/webdev.jpeg';
import asoImg from '../assets/images/aso.jpg';
import webquranImg from '../assets/images/webquran.png';
import simadesaImg from '../assets/images/simadesa.jpeg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: 'Pengembangan Sistem Web',
        category: 'Web',
        description: 'Merancang dan mengembangkan aplikasi web AlQuran, monitoring evidensi PLN UP2D serta sistem administrasi desa (Simadesa).',
        tech: ['React', 'IoT', 'Fullstack'],
        image: webdevImg,
        liveUrl: 'https://fe-movi.vercel.app',
    },
    {
        id: 8,
        title: 'Web Al-Quran',
        category: 'Web',
        description: 'Aplikasi Al-Quran berbasis web yang modern dan responsif dengan fitur pencarian dan mode baca yang nyaman.',
        tech: ['React', 'API', 'Vercel'],
        image: webquranImg,
        liveUrl: 'https://myquran-rust.vercel.app/',
    },
    {
        id: 9,
        title: 'Sistem Administrasi Desa (Simadesa)',
        category: 'Web',
        description: 'Platform digital untuk efisiensi administrasi dan pelayanan publik di tingkat pemerintahan desa secara terintegrasi.',
        tech: ['Design', 'System Analyst', 'Management'],
        image: simadesaImg,
        liveUrl: 'https://sungaimeranti.simadesa.id/',
    },
    {
        id: 2,
        title: 'MC & Aktivator Program – #BerbagiBahagia',
        category: 'Event',
        description: 'Sebagai Master of Ceremony (MC) yang memandu sesi edukasi dan permainan interaktif (games) untuk menciptakan suasana positif bagi adik-adik.',
        tech: ['Public Speaking', 'Social'],
        image: berbagiImg,
        liveUrl: '',
    },
    {
        id: 3,
        title: 'Panitia Riau Cup',
        category: 'Event',
        description: 'Mengelola manajemen waktu pertandingan (Time Keeper) dan memberikan layanan informasi kepada peserta untuk memastikan kelancaran turnamen berskala daerah.',
        tech: ['Time Management', 'Service'],
        image: minisoccerImg,
        liveUrl: '',
    },
    {
        id: 4,
        title: 'Diskusi Labsquad AIOT Pra-workshop & Partnership',
        category: 'Event',
        description: 'Diskusi perencanaan anggaran dan strategi kemitraan untuk memastikan ketersediaan narasumber serta dana operasional kegiatan.',
        tech: ['Partnership', 'Planning'],
        image: iotImg,
        liveUrl: '',
    },
    {
        id: 5,
        title: 'Monitoring Lapangan',
        category: 'Event',
        description: 'Bertanggung jawab menjaga ketepatan waktu seluruh rangkaian agenda selama 4 hari penuh, memastikan kegiatan berjalan selaras dengan rundown yang telah disusun.',
        tech: ['Time Keeper', 'Field Ops'],
        image: timekeeperImg,
        liveUrl: '',
    },
    {
        id: 6,
        title: 'Perancangan Rundown',
        category: 'Event',
        description: 'Mengoordinasikan penyusunan alur acara yang sistematis bersama tim divisi acara untuk menciptakan pengalaman kegiatan yang dinamis.',
        tech: ['Event Organizer', 'Creative'],
        image: rundownImg,
        position: 'bottom',
        liveUrl: '',
    },
    {
        id: 7,
        title: 'Divisi Acara (Time Keeper) – Bakti Sosial Kuok',
        category: 'Event',
        description: 'Mengkoordinasikan persiapan logistik dan distribusi bantuan sarana pendidikan untuk memastikan operasional kegiatan berjalan sesuai rencana',
        tech: ['Logistics', 'Coordination'],
        image: asoImg,
        liveUrl: '',
    },
];

function Projects() {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Web', 'Event'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.project-title',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: '.project-title',
                        start: 'top 90%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className={`section-padding ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900/50'
                }`}
        >
            <div className="w-full flex flex-col items-center">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className={`project-title inline-block text-sm font-medium tracking-widest uppercase mb-4 ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'
                        }`}>
                        Portfolio
                    </span>
                    <h2 className={`project-title text-3xl sm:text-4xl md:text-5xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                        Pengalaman & Organisasi
                    </h2>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-5 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-full text-base font-medium transition-all ${filter === cat
                                ? 'bg-[#7d1f2f] text-white shadow-xl shadow-[#7d1f2f]/30 transform scale-105'
                                : theme === 'light'
                                    ? 'bg-white text-gray-600 hover:bg-gray-100 shadow-lg hover:-translate-y-1'
                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.article
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                whileHover={{ y: -15, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }}
                                className={`rounded-3xl overflow-hidden shadow-2xl flex flex-col cursor-pointer ${theme === 'light'
                                    ? 'bg-white border border-gray-100 hover:border-[#7d1f2f]/20'
                                    : 'bg-gray-800 border border-gray-700 hover:border-[#d4a574]/30'
                                    }`}
                            >
                                {/* Image */}
                                <div className="relative h-48 sm:h-56 overflow-hidden group/img">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                                        style={{ objectPosition: (project as any).position || 'center' }}
                                    />

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                                            <ExternalLink size={20} className="text-white" />
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800 flex items-center gap-1.5 shadow-sm">
                                        {project.category === 'Event' ? <Mic size={12} /> : <Globe size={12} />}
                                        {project.category}
                                    </span>

                                    {/* Link */}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute top-4 right-4 p-2 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm group"
                                            title="Visit Site"
                                        >
                                            <ExternalLink size={16} className="text-gray-800 group-hover:text-[#7d1f2f] transition-colors" />
                                        </a>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-8 text-center flex-1 flex flex-col items-center">
                                    <h3 className={`text-xl font-bold mb-3 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                                        }`}>
                                        {project.title}
                                    </h3>

                                    <p className={`text-sm mb-6 leading-relaxed flex-1 max-w-xs mx-auto ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                                        }`}>
                                        {project.description}
                                    </p>

                                    {/* Tech */}
                                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className={`px-3 py-1 rounded-full text-xs font-medium border ${theme === 'light'
                                                    ? 'bg-gray-50 text-gray-600 border-gray-100'
                                                    : 'bg-gray-800/50 text-gray-300 border-gray-700'
                                                    }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default Projects;
