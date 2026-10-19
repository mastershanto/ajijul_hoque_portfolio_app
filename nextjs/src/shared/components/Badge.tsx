import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  label: string;
  variant?: 'cyan' | 'indigo' | 'emerald' | 'rose' | 'amber' | 'muted';
  icon?: React.ReactNode;
  pulseDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'cyan',
  icon,
  pulseDot = false,
  className = '',
}) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {pulseDot && <span className={styles.dot} />}
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </span>
  );
};
