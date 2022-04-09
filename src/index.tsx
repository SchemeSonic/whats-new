import React from 'react';
import styles from './style.module.css';

interface RnsProps {
  title: string;
}

const Rns = ({ title }: RnsProps): JSX.Element => {
  return <div className={styles.rns}>{title}</div>;
};

export default Rns;
