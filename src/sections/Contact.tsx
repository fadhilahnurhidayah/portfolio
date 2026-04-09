import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, MessageSquare } from 'lucide-react';

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
        const subject = encodeURIComponent(`Pesan dari ${formData.name}`);
        const body = encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`);
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
            className={`w-full flex justify-center section-padding ${theme === 'light' ? 'bg-gray-50' : 'bg-black'}`}
        >
            <div className="w-full max-w-6xl flex flex-col items-center">
                <div className="text-center mb-20 flex flex-col items-center">
                    <span className={`contact-title inline-block text-sm font-black tracking-widest uppercase mb-4 ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'
                        }`}>
                        Contact
                    </span>
                    <h2 className={`contact-title text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                        Kontak Terhubung
                    </h2>
                    <p className={`contact-title text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                        Silakan hubungi saya melalui formulir di bawah ini atau melalui saluran kontak resmi lainnya.
                    </p>
                </div>

                <div className="w-full grid lg:grid-cols-2 gap-16 items-start px-4">
                    {/* Left Side: Modern Info Panel */}
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((info, idx) => (
                                <motion.a
                                    key={info.label}
                                    href={info.link}
                                    target={info.link.startsWith('http') ? '_blank' : undefined}
                                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className={`p-8 rounded-4xl border transition-all duration-300 flex flex-col items-center text-center ${theme === 'light'
                                        ? 'bg-white border-gray-100 shadow-xl shadow-gray-200/20 hover:border-[#7d1f2f]/20'
                                        : 'bg-gray-900 border-gray-800'
                                        }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${theme === 'light' ? 'bg-[#7d1f2f]/5' : 'bg-[#7d1f2f]/20'}`}>
                                        <info.icon size={28} className="text-[#7d1f2f]" />
                                    </div>
                                    <h4 className={`text-sm font-black uppercase tracking-widest mb-2 ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'}`}>
                                        {info.label}
                                    </h4>
                                    <p className={`text-sm font-bold break-all ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                                        {info.value}
                                    </p>
                                </motion.a>
                            ))}
                            
                            {/* Social Card */}
                            <motion.div
                                className={`p-8 rounded-4xl border transition-all duration-300 flex flex-col items-center text-center ${theme === 'light'
                                    ? 'bg-white border-gray-100 shadow-xl shadow-gray-200/20'
                                    : 'bg-gray-900 border-gray-800'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <h4 className={`text-sm font-black uppercase tracking-widest mb-6 ${theme === 'light' ? 'text-[#7d1f2f]' : 'text-[#d4a574]'}`}>
                                    Social Networks
                                </h4>
                                <div className="flex gap-4">
                                    {socials.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${theme === 'light'
                                                ? 'bg-gray-100 text-gray-700 hover:bg-[#7d1f2f] hover:text-white'
                                                : 'bg-gray-800 text-white hover:bg-[#d4a574] hover:text-black'
                                                }`}
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Elegant Form */}
                    <motion.div
                        className={`p-10 md:p-14 rounded-[3rem] border ${theme === 'light'
                            ? 'bg-white border-gray-100 shadow-2xl shadow-gray-200/40'
                            : 'bg-gray-900 border-gray-800'
                            }`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme === 'light' ? 'bg-[#7d1f2f] text-white' : 'bg-[#d4a574] text-black'}`}>
                                <MessageSquare size={24} />
                            </div>
                            <h3 className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                Kirim Pesan
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className={`text-xs font-black uppercase tracking-widest ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`}>Nama Lengkap</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Nama Anda"
                                        required
                                        className={`w-full px-0 py-4 border-b bg-transparent transition-all focus:border-[#7d1f2f] dark:focus:border-[#d4a574] outline-none text-base font-medium ${theme === 'light' ? 'border-gray-200 text-gray-900' : 'border-gray-800 text-white'}`}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={`text-xs font-black uppercase tracking-widest ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`}>Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="email@example.com"
                                        required
                                        className={`w-full px-0 py-4 border-b bg-transparent transition-all focus:border-[#7d1f2f] dark:focus:border-[#d4a574] outline-none text-base font-medium ${theme === 'light' ? 'border-gray-200 text-gray-900' : 'border-gray-800 text-white'}`}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className={`text-xs font-black uppercase tracking-widest ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`}>Pesan</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tulis pesan Anda..."
                                    required
                                    rows={4}
                                    className={`w-full px-0 py-4 border-b bg-transparent transition-all focus:border-[#7d1f2f] dark:focus:border-[#d4a574] outline-none text-base font-medium resize-none ${theme === 'light' ? 'border-gray-200 text-gray-900' : 'border-gray-800 text-white'}`}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className={`w-full py-5 rounded-2xl text-lg font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all shadow-2xl ${theme === 'light'
                                    ? 'bg-[#7d1f2f] text-white hover:bg-[#5c1623] shadow-[#7d1f2f]/30'
                                    : 'bg-[#d4a574] text-black hover:bg-white shadow-[#d4a574]/20'
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Kirim <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
