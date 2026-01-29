import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

function DarkLightSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full p-1 transition-colors duration-500 focus:outline-none"
            style={{
                background: theme === 'light'
                    ? 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)'
                    : 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <motion.div
                className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
                style={{
                    background: theme === 'light' ? '#fbbf24' : '#6366f1'
                }}
                animate={{
                    x: theme === 'light' ? 0 : 32,
                    rotate: theme === 'light' ? 0 : 360
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
                {theme === 'light' ? (
                    <Sun className="w-4 h-4 text-white" />
                ) : (
                    <Moon className="w-4 h-4 text-white" />
                )}
            </motion.div>

            {/* Stars decoration for dark mode */}
            {theme === 'dark' && (
                <>
                    <motion.span
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{ top: '4px', left: '8px' }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.span
                        className="absolute w-0.5 h-0.5 bg-white rounded-full"
                        style={{ top: '12px', left: '16px' }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.span
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{ bottom: '6px', left: '10px' }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                    />
                </>
            )}
        </motion.button>
    );
}

export default DarkLightSwitch;
