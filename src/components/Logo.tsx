import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, variant = 'dark' }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      {/* SRV Colorful Petals Fan Emblem */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Multi-color gradients matching attached brand mark */}
            <linearGradient id="petal-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9C27B0" />
              <stop offset="100%" stopColor="#673AB7" />
            </linearGradient>
            <linearGradient id="petal-magenta" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E91E63" />
              <stop offset="100%" stopColor="#C2185B" />
            </linearGradient>
            <linearGradient id="petal-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F44336" />
              <stop offset="100%" stopColor="#D32F2F" />
            </linearGradient>
            <linearGradient id="petal-orange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF9800" />
              <stop offset="100%" stopColor="#F57C00" />
            </linearGradient>
            <linearGradient id="petal-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFEB3B" />
              <stop offset="100%" stopColor="#FBC02D" />
            </linearGradient>
            <linearGradient id="petal-lime" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CDDC39" />
              <stop offset="100%" stopColor="#AFB42B" />
            </linearGradient>
            <linearGradient id="petal-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00BCD4" />
              <stop offset="100%" stopColor="#0097A7" />
            </linearGradient>
            <linearGradient id="petal-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2196F3" />
              <stop offset="100%" stopColor="#1976D2" />
            </linearGradient>
            <linearGradient id="petal-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3F51B5" />
              <stop offset="100%" stopColor="#303F9F" />
            </linearGradient>
          </defs>

          {/* Radial Flower Fan of Leaf Shapes */}
          <g transform="translate(80, 80)">
            {/* Leaf 1 - Top Left Purple */}
            <path
              d="M0 0 C -25 -40, -50 -40, -60 -15 C -70 10, -35 15, 0 0 Z"
              fill="url(#petal-purple)"
              opacity="0.9"
            />
            {/* Leaf 2 - Top Magenta */}
            <path
              d="M0 0 C -15 -50, -30 -65, 0 -70 C 25 -70, 20 -35, 0 0 Z"
              fill="url(#petal-magenta)"
              opacity="0.9"
            />
            {/* Leaf 3 - Top Right Red */}
            <path
              d="M0 0 C 10 -50, 35 -60, 50 -40 C 65 -20, 35 -10, 0 0 Z"
              fill="url(#petal-red)"
              opacity="0.9"
            />
            {/* Leaf 4 - Right Orange */}
            <path
              d="M0 0 C 25 -35, 55 -35, 65 -15 C 75 5, 45 15, 0 0 Z"
              fill="url(#petal-orange)"
              opacity="0.9"
            />
            {/* Leaf 5 - Right Yellow */}
            <path
              d="M0 0 C 35 -15, 65 -5, 65 15 C 65 35, 35 25, 0 0 Z"
              fill="url(#petal-yellow)"
              opacity="0.95"
            />
            {/* Leaf 6 - Bottom Right Lime */}
            <path
              d="M0 0 C 35 10, 55 35, 45 55 C 30 70, 10 40, 0 0 Z"
              fill="url(#petal-lime)"
              opacity="0.9"
            />
            {/* Leaf 7 - Bottom Cyan */}
            <path
              d="M0 0 C 15 35, -5 65, -25 65 C -45 60, -25 35, 0 0 Z"
              fill="url(#petal-cyan)"
              opacity="0.9"
            />
            {/* Leaf 8 - Bottom Left Sky Blue */}
            <path
              d="M0 0 C -10 35, -40 50, -55 35 C -65 15, -35 10, 0 0 Z"
              fill="url(#petal-blue)"
              opacity="0.9"
            />
            {/* Leaf 9 - Left Indigo */}
            <path
              d="M0 0 C -35 15, -65 10, -65 -10 C -60 -30, -35 -15, 0 0 Z"
              fill="url(#petal-indigo)"
              opacity="0.9"
            />

            {/* Inner White Arc Mask Cutout creating the signature crescent inner ring */}
            <circle cx="28" cy="-5" r="32" fill="#FFFFFF" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex items-center font-extrabold tracking-tight">
          <span className={`font-sans ${textSizes[size]} font-black uppercase tracking-tight flex items-center gap-1.5 ${variant === 'light' ? 'text-white' : 'text-[#0047BA]'}`}>
            SRV <span className={variant === 'light' ? 'text-sky-300' : 'text-[#0047BA]'}>TECHNOLOGY</span>
          </span>
        </div>
      )}
    </div>
  );
};

