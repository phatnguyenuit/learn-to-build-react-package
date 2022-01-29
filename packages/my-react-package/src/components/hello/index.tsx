import React, { useEffect, useState } from 'react';

import cssClasses from './styles.module.css';
import scssClasses from './styles.module.scss';

const Hello: React.FC<HelloProps> = ({ name }) => {
  const [count, setCount] = useState(3);
  const [intervalId, setIntervalId] = useState<number>();

  useEffect(() => {
    const id = window.setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    setIntervalId(id);

    return () => {
      window.clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      setIntervalId(undefined);
      window.clearInterval(intervalId);
    }
  }, [count]);

  const message = count === 0 ? `Hello ${name}, from TypeScript.` : count;

  return (
    <div className={scssClasses.helloScss}>
      <p className={cssClasses.helloCss}>{message}</p>
    </div>
  );
};

export default Hello;

export interface HelloProps {
  name: string;
}
