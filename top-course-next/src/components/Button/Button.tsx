import cn from 'classNames';
import { createElement } from 'react';
import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';


export const Button = ({ children, appearance }: ButtonProps): JSX.Element => {
  return createElement('button', {
    className: cn(styles.button, styles[appearance])
  }, children);
}

