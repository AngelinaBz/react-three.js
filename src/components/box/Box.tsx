import React from 'react';

interface BoxProps {
  length: number;
  width: number;
  height: number;
}

export const Box: React.FC<BoxProps> = () => {
  return <div>Box</div>;
};
