import React from 'react';
import { FC } from 'react';

export type ExampleComponentProps = {
  text?: string;
};

export const ExampleComponent: FC<ExampleComponentProps> = ({ text = 'Дефолт текст' }) => {
  return <div style={{ backgroundColor: 'green' }}>{text}</div>;
};
