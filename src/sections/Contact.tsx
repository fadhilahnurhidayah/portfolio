import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.contact-title',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: '.contact-title',
                        start: 'top 90%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Message from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:fadhilahnurhidayah48@gmail.com?subject=${subject}&body=${body}`;
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'fadhilahnurhidayah48@gmail.com', link: 'mailto:fadhilahnurhidayah48@gmail.com' },
        { icon: Phone, label: 'WhatsApp', value: '+62 812 7616 6526', link: 'https://wa.me/6281276166526' },
        { icon: MapPin, label: 'Lokasi', value: 'Pekanbaru, Riau', link: '#' },
    ];

    const socials = [
        { icon: Github, link: 'https://github.com/fadhilahnurhidayah' },
        { icon: Linkedin, link: 'https://linkedin.com/in/fadhilahnurhidayah' },
        { icon: Instagram, link: 'https://instagram.com/fdlaanyy' },
    ];

    return (
        <section
            id="contact"
            ref={sectionRef}
            className={`min-h-screen flex items-center section-padding ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900/50'
                }`}
        >
            <div className="w-full flex flex-col items-center">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className={`contact-title inline-block text-sm font-medium tracking-widest uppercase mb-4 ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'
                        }`}>
                        Get in Touch
                    </span>
                    <h2 className={`contact-title text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                        Mari Berkolaborasi
                    </h2>
                    <p className={`contact-title text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                        Tertarik untuk berkolaborasi? Hubungi saya!
                    </p>
                </div>

                <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side: Info & Socials */}
                    <div>
                        <div className="space-y-6 mb-10">
                            {contactInfo.map((info) => (
                                <a
                                    key={info.label}
                                    href={info.link}
                                    target={info.link.startsWith('http') ? '_blank' : undefined}
                                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className={`flex items-center gap-5 p-5 rounded-2xl transition-all hover-lift ${theme === 'light'
                                        ? 'bg-white shadow-xl shadow-gray-100/50 hover:shadow-2xl'
                                        : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
                                        }`}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${theme === 'light' ? 'bg-[#7d1f2f]/10' : 'bg-[#7d1f2f]/30'
                                        }`}>
                                        <info.icon className="w-7 h-7 text-[#7d1f2f]" />
                                    </div>
                                    <div className="text-left">
                                        <p className={`text-xs font-medium mb-0.5 ${theme === 'light' ? 'text-gray-500' : 'text-gray-500'
                                            }`}>
                                            {info.label}
                                        </p>
                                        <p className={`text-sm font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'
                                            }`}>
                                            {info.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <h3 className={`text-lg font-bold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                            }`}>
                            Temukan Saya di
                        </h3>
                        <div className="flex gap-4">
                            {socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all hover-lift ${theme === 'light'
                                        ? 'bg-white shadow-xl shadow-gray-100/50 text-gray-700 hover:bg-[#7d1f2f] hover:text-white'
                                        : 'bg-gray-800 border border-gray-700 text-gray-400 hover:bg-[#7d1f2f] hover:text-white hover:border-[#7d1f2f]'
                                        }`}
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className={`w-full p-8 rounded-2xl ${theme === 'light'
                        ? 'bg-white shadow-xl shadow-gray-100/50'
                        : 'bg-gray-800 border border-gray-700'
                        }`}>
                        <h3 className={`text-lg font-bold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                            }`}>
                            Kirim Pesan
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Nama lengkap"
                                    required
                                    className={`w-full px-5 py-3 rounded-xl border text-sm ${theme === 'light'
                                        ? 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#7d1f2f]'
                                        : 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-[#d4a574]'
                                        } focus:outline-none focus:ring-1 focus:ring-[#7d1f2f] transition-all`}
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="email@example.com"
                                    required
                                    className={`w-full px-5 py-3 rounded-xl border text-sm ${theme === 'light'
                                        ? 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#7d1f2f]'
                                        : 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-[#d4a574]'
                                        } focus:outline-none focus:ring-1 focus:ring-[#7d1f2f] transition-all`}
                                />
                            </div>

                            <div>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tulis pesan Anda..."
                                    required
                                    rows={4}
                                    className={`w-full px-5 py-3 rounded-xl border text-sm resize-none ${theme === 'light'
                                        ? 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#7d1f2f]'
                                        : 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-[#d4a574]'
                                        } focus:outline-none focus:ring-1 focus:ring-[#7d1f2f] transition-all`}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full py-3 bg-[#7d1f2f] text-white text-base font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#5c1623] shadow-lg shadow-[#7d1f2f]/20 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send className="w-4 h-4" />
                                Kirim Pesan
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
