import { useTheme } from '../context/ThemeContext';
import { ArrowUp } from 'lucide-react';

function Footer() {
    const { theme } = useTheme();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`py-12 md:py-20 px-6 relative border-t ${theme === 'light' ? 'bg-white border-gray-100' : 'bg-black border-gray-900'
            }`}>
            {/* Elegant Divider */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-4xl h-px ${theme === 'light' ? 'bg-linear-to-r from-transparent via-gray-200 to-transparent' : 'bg-linear-to-r from-transparent via-gray-800 to-transparent'
                }`} />

            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <p className={`text-sm tracking-wide ${theme === 'light' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                    © {new Date().getFullYear()} <span className="font-semibold text-[#7d1f2f]">Fadhilah Nurhidayah</span>. All Rights Reserved.
                </p>

                <button
                    onClick={scrollToTop}
                    className={`group flex items-center gap-2 text-sm font-medium transition-colors ${theme === 'light' ? 'text-gray-500 hover:text-[#7d1f2f]' : 'text-gray-500 hover:text-[#d4a574]'
                        }`}
                >
                    Back to Top
                    <span className={`p-2 rounded-full transition-all group-hover:-translate-y-1 ${theme === 'light' ? 'bg-gray-100 group-hover:bg-[#7d1f2f] group-hover:text-white' : 'bg-gray-800 group-hover:bg-[#d4a574] group-hover:text-white'
                        }`}>
                        <ArrowUp size={16} />
                    </span>
                </button>
            </div>
        </footer>
    );
}

export default Footer;
