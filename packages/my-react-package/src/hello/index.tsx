import React from 'react';

import cssClasses from './styles.module.css';
import scssClasses from './styles.module.scss';

export interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => (
  <div className={scssClasses.helloScss}>
    <p className={cssClasses.helloCss}>Hello, {name}</p>
  </div>
);

export default Hello;
