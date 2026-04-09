import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink, Globe, Mic, ArrowRight } from 'lucide-react';

import webdevImg from '../assets/images/webdev.jpeg';
import webquranImg from '../assets/images/webquran.png';
import simadesaImg from '../assets/images/simadesa.jpeg';
import berbagiImg from '../assets/images/berbagibahagia.png';
import minisoccerImg from '../assets/images/minisoccer.png';
import iotImg from '../assets/images/iot.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: 'Monitoring Evidensi PLN',
        category: 'Web',
        description: 'Aplikasi MOVI untuk monitoring internal dan efisiensi pelaporan di PT PLN UP2D Pekanbaru.',
        tech: ['ReactJS', 'Express.js', 'PostgreSQL'],
        image: webdevImg,
        liveUrl: 'https://fe-movi.vercel.app',
    },
    {
        id: 2,
        title: 'Sistem Administrasi Desa',
        category: 'Web',
        description: 'Platform digital untuk digitalisasi pelayanan publik di tingkat pemerintahan desa.',
        tech: ['System Analyst', 'UI/UX', 'Management'],
        image: simadesaImg,
        liveUrl: 'https://sungaimeranti.simadesa.id/',
    },
    {
        id: 3,
        title: 'Web Al-Quran Modern',
        category: 'Web',
        description: 'Aplikasi pembaca Al-Quran digital dengan mode responsif dan fitur bookmark.',
        tech: ['React', 'API Integration', 'Vercel'],
        image: webquranImg,
        liveUrl: 'https://myquran-rust.vercel.app/',
    },
    {
        id: 4,
        title: '#BerbagiBahagia Program',
        category: 'Event',
        description: 'Master of Ceremony dan aktivasi program edukasi di Panti Asuhan.',
        tech: ['Public Speaking', 'Event Organizing'],
        image: berbagiImg,
        liveUrl: '',
    },
    {
        id: 5,
        title: 'Riau Cup Minisoccer',
        category: 'Event',
        description: 'Manajemen operasional dan koordinasi waktu pada turnamen sepak bola daerah.',
        tech: ['Time Management', 'Operations'],
        image: minisoccerImg,
        liveUrl: '',
    },
    {
        id: 6,
        title: 'Labsquad AIoT Workshop',
        category: 'Event',
        description: 'Perencanaan anggaran dan koordinasi kemitraan untuk kegiatan workshop teknologi.',
        tech: ['Budgeting', 'Partnership'],
        image: iotImg,
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
            className={`w-full flex justify-center section-padding ${theme === 'light' ? 'bg-gray-50' : 'bg-[#0a0a0a]'}`}
        >
            <div className="w-full max-w-7xl flex flex-col items-center text-center">
                {/* Section Title */}
                <div className="flex flex-col items-center mb-16">
                    <span className={`project-title inline-block text-sm font-black tracking-widest uppercase mb-4 ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'
                        }`}>
                        Projects
                    </span>
                    <h2 className={`project-title text-4xl sm:text-5xl md:text-6xl font-extrabold ${theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>

                    </h2>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-20 bg-white dark:bg-gray-900 p-2 rounded-full border border-gray-100 dark:border-gray-800 shadow-xl">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-10 py-3 rounded-full text-base font-bold transition-all duration-300 ${filter === cat
                                ? 'bg-[#7d1f2f] text-white shadow-lg transform scale-105'
                                : theme === 'light'
                                    ? 'text-gray-500 hover:text-gray-900'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.article
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={`group flex flex-col rounded-4xl overflow-hidden transition-all duration-500 hover:shadow-3xl ${theme === 'light'
                                    ? 'bg-white border border-gray-100'
                                    : 'bg-gray-900/50 border border-gray-800'
                                    }`}
                            >
                                {/* Image Wrapper */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full text-xs font-black text-gray-900 uppercase tracking-widest flex items-center gap-2">
                                        {project.category === 'Event' ? <Mic size={14} /> : <Globe size={14} />}
                                        {project.category}
                                    </div>

                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute top-6 right-6 w-10 h-10 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#7d1f2f] hover:text-white transition-all transform scale-0 group-hover:scale-100"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-10 flex-1 flex flex-col items-center">
                                    <h3 className={`text-2xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-base leading-relaxed mb-8 flex-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="text-[10px] font-black uppercase tracking-widest text-[#7d1f2f] dark:text-[#d4a574]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.liveUrl ? (
                                        <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-sm font-bold text-[#7d1f2f] dark:text-[#d4a574] hover:gap-4 transition-all group/link">
                                            Lihat Proyek <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                        </a>
                                    ) : (
                                        <div className="text-sm font-bold text-gray-300 dark:text-gray-700">Internal Only</div>
                                    )}
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
