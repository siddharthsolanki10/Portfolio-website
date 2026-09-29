import React from 'react';
import { Link } from 'react-router-dom';

export interface BrandLogoProps {
  variant?: 'primary' | 'icon-only' | 'monochrome-light' | 'monochrome-dark';
  size?: 'sm' | 'nav' | 'footer' | 'lg';
  asLink?: boolean;
  to?: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'primary',
  size = 'nav',
  asLink = true,
  to = '/',
  className = '',
}) => {
  // Seal dimensions based on size variant
  const sealDimensions = {
    sm: 24,
    footer: 30,
    nav: 36,
    lg: 48,
  };

  const sealSize = sealDimensions[size] || 36;
  const isIconOnly = variant === 'icon-only';

  // Theme color mappings
  const colorConfig = {
    primary: {
      bgGradStart: '#C7181F',
      bgGradMid: '#9E1217',
      bgGradEnd: '#6E0B0E',
      borderGradStart: '#FFA49E',
      borderGradEnd: '#800D11',
      monogramColor: '#F5EFE6',
      notchColor: '#6E0B0E',
      textFirst: '#ECE6DA',
      textLast: '#B3151B',
    },
    'monochrome-light': {
      bgGradStart: '#1F1D1B',
      bgGradMid: '#161413',
      bgGradEnd: '#0E0C0B',
      borderGradStart: 'rgba(236, 230, 218, 0.45)',
      borderGradEnd: 'rgba(236, 230, 218, 0.15)',
      monogramColor: '#ECE6DA',
      notchColor: '#0E0C0B',
      textFirst: '#ECE6DA',
      textLast: '#ECE6DA',
    },
    'monochrome-dark': {
      bgGradStart: '#F5EFE6',
      bgGradMid: '#ECE6DA',
      bgGradEnd: '#DCD4C4',
      borderGradStart: 'rgba(18, 17, 16, 0.4)',
      borderGradEnd: 'rgba(18, 17, 16, 0.15)',
      monogramColor: '#121110',
      notchColor: '#ECE6DA',
      textFirst: '#121110',
      textLast: '#121110',
    },
    'icon-only': {
      bgGradStart: '#C7181F',
      bgGradMid: '#9E1217',
      bgGradEnd: '#6E0B0E',
      borderGradStart: '#FFA49E',
      borderGradEnd: '#800D11',
      monogramColor: '#F5EFE6',
      notchColor: '#6E0B0E',
      textFirst: '#ECE6DA',
      textLast: '#B3151B',
    },
  }[variant];

  const idSuffix = `${variant}-${size}`;

  // Seal SVG Mark
  const sealMark = (
    <svg
      width={sealSize}
      height={sealSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="brand-seal-icon"
      aria-hidden="true"
      style={{
        width: `${sealSize}px`,
        height: `${sealSize}px`,
        flexShrink: 0,
      }}
    >
      <defs>
        <linearGradient id={`sealBg-${idSuffix}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorConfig.bgGradStart} />
          <stop offset="50%" stopColor={colorConfig.bgGradMid} />
          <stop offset="100%" stopColor={colorConfig.bgGradEnd} />
        </linearGradient>
        <linearGradient id={`sealBorder-${idSuffix}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorConfig.borderGradStart} stopOpacity="0.75" />
          <stop offset="100%" stopColor={colorConfig.borderGradEnd} stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Hanko Rounded Square Lacquer Seal */}
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        rx="22"
        fill={`url(#sealBg-${idSuffix})`}
        stroke={`url(#sealBorder-${idSuffix})`}
        strokeWidth="1.8"
      />

      {/* Subtle Inset Craft Line */}
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="17"
        fill="none"
        stroke={colorConfig.monogramColor}
        strokeOpacity="0.16"
        strokeWidth="1"
      />

      {/* Katana S Monogram - Upper Blade */}
      <path
        d="M 50 18
           L 66 31
           L 55 38
           C 52 35 48 32 43 33
           C 37 34 34 38 35 43
           C 36 49 41 53 48 57
           L 55 61
           C 65 66 71 72 69 81
           C 68 85 64 87 60 87
           L 59 79
           C 62 78 63 76 63 73
           C 62 68 57 64 51 61
           L 44 57
           C 33 51 29 44 30 35
           C 32 24 42 18 50 18 Z"
        fill={colorConfig.monogramColor}
      />

      {/* Katana S Monogram - Lower Blade */}
      <path
        d="M 50 82
           L 34 69
           L 45 62
           C 48 65 52 68 57 67
           C 63 66 66 62 65 57
           C 64 51 59 47 52 43
           L 45 39
           C 35 34 29 28 31 19
           C 32 15 36 13 40 13
           L 41 21
           C 38 22 37 24 37 27
           C 38 32 43 36 49 39
           L 56 43
           C 67 49 71 56 70 65
           C 68 76 58 82 50 82 Z"
        fill={colorConfig.monogramColor}
        opacity="0.95"
      />

      {/* Center Energy Notch */}
      <polygon
        points="46,48 54,44 54,52 46,56"
        fill={colorConfig.notchColor}
        opacity="0.75"
      />
    </svg>
  );

  // Logo Wordmark
  const wordmark = !isIconOnly && (
    <span className={`brand-wordmark brand-wordmark--${size}`}>
      <span className="brand-wordmark-first" style={{ color: colorConfig.textFirst }}>
        Siddharth
      </span>
      <span className="brand-wordmark-last" style={{ color: colorConfig.textLast }}>
        Solanki
      </span>
    </span>
  );

  const content = (
    <>
      <span className="brand-seal-wrapper">{sealMark}</span>
      {wordmark}
    </>
  );

  if (asLink) {
    return (
      <Link
        to={to}
        className={`brand-logo brand-logo--${size} brand-logo--${variant} ${className}`}
        aria-label="Siddharth Solanki — Home"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={`brand-logo brand-logo--${size} brand-logo--${variant} ${className}`}>
      {content}
    </div>
  );
};
