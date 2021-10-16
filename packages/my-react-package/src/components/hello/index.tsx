import React, { useEffect, useState } from 'react';

const Hello: React.FC<HelloProps> = ({ name }) => {
  const [count, setCount] = useState(3);
  const [intervalId, setIntervalId] = useState<number>();

  useEffect(() => {
    const id = window.setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      setIntervalId(undefined);
      clearInterval(intervalId);
    }
  }, [count]);

  const message = count === 0 ? `Hello ${name}, from TypeScript.` : count;

  return <p>{message}</p>;
};

export default Hello;

export interface HelloProps {
  name: string;
}
