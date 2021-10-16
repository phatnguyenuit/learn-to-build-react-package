import React from 'react';

export interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => <span>Hello {name}!</span>;

export default Hello;
