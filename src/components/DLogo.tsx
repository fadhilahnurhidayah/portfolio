import { useTheme } from '../context/ThemeContext';

function DLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
    const { theme } = useTheme();

    const sizeMap = {
        sm: { width: 32, height: 32, fontSize: 18, padding: 4 },
        md: { width: 48, height: 48, fontSize: 28, padding: 6 },
        lg: { width: 64, height: 64, fontSize: 38, padding: 8 },
    };

    const current = sizeMap[size];

    return (
        <div
            className="rounded-full flex items-center justify-center font-bold tracking-tight"
            style={{
                width: current.width,
                height: current.height,
                fontSize: current.fontSize,
                backgroundImage: `linear-gradient(135deg, #7d1f2f 0%, #d4a574 100%)`,
                color: 'white',
                boxShadow: `0 4px 15px rgba(125, 31, 47, 0.3)`,
            }}
        >
            D
        </div>
    );
}

export default DLogo;
