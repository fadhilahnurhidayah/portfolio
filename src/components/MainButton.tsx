import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
    text: string;
    link?: string;
    email?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    icon?: boolean;
};

function MainButton({
    text,
    link,
    email,
    variant = 'primary',
    size = 'md',
    icon = false
}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { theme } = useTheme();

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const getVariantClasses = () => {
        if (variant === 'primary') {
            return 'bg-[var(--color-primary)] text-white border-transparent hover:bg-[var(--color-primary-dark)]';
        }
        if (variant === 'secondary') {
            return theme === 'light'
                ? 'bg-gray-900 text-white border-transparent hover:bg-gray-800'
                : 'bg-white text-gray-900 border-transparent hover:bg-gray-100';
        }
        return theme === 'light'
            ? 'bg-transparent text-gray-900 border-gray-300 hover:bg-gray-100'
            : 'bg-transparent text-white border-gray-600 hover:bg-gray-800';
    };

    const ButtonContent = () => (
        <motion.span
            className={`relative inline-flex items-center justify-center gap-2 font-medium rounded-full border-2 transition-all duration-300 ${sizeClasses[size]} ${getVariantClasses()}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <span className="relative overflow-hidden">
                <motion.span
                    className="inline-block"
                    animate={{ y: isHovered ? -24 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {text}
                </motion.span>
                <motion.span
                    className="absolute left-0 top-6"
                    animate={{ y: isHovered ? -24 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {text}
                </motion.span>
            </span>
            {icon && (
                <motion.span
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ArrowRight size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
                </motion.span>
            )}
        </motion.span>
    );

    if (email) {
        return (
            <a href={`mailto:${email}`}>
                <ButtonContent />
            </a>
        );
    }

    if (link) {
        const isExternal = link.startsWith('http');
        return (
            <a
                href={link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
            >
                <ButtonContent />
            </a>
        );
    }

    return <ButtonContent />;
}

export default MainButton;
