import React from 'react';

interface TheMentorLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onWhiteCard?: boolean;
}

/**
 * THE MENTOR Original Logo
 * Uses the exact uploaded THE MENTOR logo asset containing:
 * - Original blue & orange M symbol
 * - Black "THE MENTOR" text underneath
 * - Displayed cleanly against a white background preserving aspect ratio
 */
export const TheMentorLogo: React.FC<TheMentorLogoProps> = ({
  className = '',
  size = 'md',
  onWhiteCard = false,
}) => {
  const heightClasses = {
    sm: 'h-10 max-w-[130px]',
    md: 'h-12 max-w-[160px] sm:h-14 sm:max-w-[180px]',
    lg: 'h-16 max-w-[210px] sm:h-20 sm:max-w-[240px]',
    xl: 'h-20 max-w-[260px] sm:h-24 sm:max-w-[300px]',
  };

  const imgContent = (
    <img
      src="/assets/the-mentor-logo.svg"
      alt="THE MENTOR Recruitment & Training"
      className={`${heightClasses[size]} w-auto object-contain shrink-0`}
      loading="eager"
      onError={(e) => {
        // Fallback to PNG if SVG fails
        const target = e.currentTarget;
        if (target.src.endsWith('.svg')) {
          target.src = '/assets/the-mentor-logo.png';
        }
      }}
    />
  );

  if (onWhiteCard) {
    return (
      <div className={`inline-flex items-center justify-center bg-white rounded-xl p-2 sm:p-2.5 shadow-sm border border-slate-200/80 ${className}`}>
        {imgContent}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      {imgContent}
    </div>
  );
};
