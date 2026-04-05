import React from "react";

type IconProps = {
  size?: number;
  color?: string;
  className?: string;
};

export const StarIcon: React.FC<IconProps> = ({ size = 24, color = "#DAA520", className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color} className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const DiamondIcon: React.FC<IconProps> = ({ size = 24, color = "#CC0000", className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color} className={className}>
    <path d="M12 2L22 12L12 22L2 12Z" />
  </svg>
);

export const ArrowIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth={2} strokeLinecap="square" className={className}>
    <path d="M5 12H19M13 6L19 12L13 18" />
  </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth={2} strokeLinecap="square" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10,8 16,12 10,16" fill={color} stroke="none" />
  </svg>
);

export const BookIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth={2} strokeLinecap="square" className={className}>
    <path d="M4 19V5C4 3.9 4.9 3 6 3H18C19.1 3 20 3.9 20 5V19" />
    <path d="M4 19H20" />
    <path d="M12 3V15" />
  </svg>
);

export const PeopleIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth={2} strokeLinecap="square" className={className}>
    <circle cx="9" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <path d="M3 21V18C3 16.3 4.3 15 6 15H12C13.7 15 15 16.3 15 18V21" />
    <path d="M17 15C18.7 15 20 16.3 20 18V21" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth={2} strokeLinecap="square" className={className}>
    <path d="M12 3V15" />
    <path d="M8 11L12 15L16 11" />
    <path d="M4 19H20" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth={2} strokeLinecap="square" className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="M16 16L21 21" />
  </svg>
);

export const ChevronIcon: React.FC<IconProps & { direction?: "left" | "right" | "down" | "up" }> = ({
  size = 24, color = "currentColor", className, direction = "right",
}) => {
  const rotation = { left: 180, right: 0, down: 90, up: 270 }[direction];
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth={2} strokeLinecap="square" className={className} style={{ transform: `rotate(${rotation}deg)` }}>
      <path d="M9 6L15 12L9 18" />
    </svg>
  );
};
