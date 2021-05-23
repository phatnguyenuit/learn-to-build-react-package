import { memo } from 'react';

export const HelloComponent: React.FC<HelloProps> = ({ name }) => (
  <div>Hey {name}, say hello from TypeScript</div>
);

const Hello = memo(HelloComponent);
Hello.displayName = 'Hello';

export default Hello;

export interface HelloProps {
  name: string;
}
