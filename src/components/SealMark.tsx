import React from 'react';
import { BrandLogo, BrandLogoProps } from './BrandLogo';

export { BrandLogo };
export type { BrandLogoProps };

export interface SealMarkProps {
  size?: 'nav' | 'footer' | 'large' | 'sm';
  showText?: boolean;
  variant?: 'primary' | 'icon-only' | 'monochrome-light' | 'monochrome-dark';
  asLink?: boolean;
  to?: string;
  className?: string;
}

export const SealMark: React.FC<SealMarkProps> = ({
  size = 'nav',
  showText = false,
  variant,
  asLink = false,
  to = '/',
  className = '',
}) => {
  const mappedSize = size === 'large' ? 'lg' : size;
  const mappedVariant = variant || (showText ? 'primary' : 'icon-only');

  return (
    <BrandLogo
      size={mappedSize}
      variant={mappedVariant}
      asLink={asLink}
      to={to}
      className={className}
    />
  );
};
