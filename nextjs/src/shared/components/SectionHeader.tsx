import React from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <div className={`${styles.header} ${align === 'center' ? styles.center : ''}`}>
      <div className={styles.prefixWrapper}>
        <span className={styles.number}>{number}</span>
        <div className={styles.line} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
