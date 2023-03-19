import { createElement } from 'react';
import styles from './Htag.module.css';
import type { HtagProps } from './Htag.props';

export const Htag = ({ tag, children }: HtagProps) => {
  return (createElement(tag, { className: styles[tag] }, children))
}
