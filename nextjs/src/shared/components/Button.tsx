import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  disabled,
  ...rest
}) => {
  const buttonClass = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClass} disabled={disabled} {...rest}>
      {icon && iconPosition === 'left' && <span className={styles.iconLeft}>{icon}</span>}
      <span className={styles.content}>{children}</span>
      {icon && iconPosition === 'right' && <span className={styles.iconRight}>{icon}</span>}
    </button>
  );
};
