import React from 'react';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  highlighted?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowOnHover = true,
  highlighted = false,
  onClick,
  style,
}) => {
  const combinedClasses = [
    styles.card,
    glowOnHover ? styles.glowable : '',
    highlighted ? styles.highlighted : '',
    onClick ? styles.clickable : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={combinedClasses} onClick={onClick} style={style}>
      {children}
    </div>
  );
};
