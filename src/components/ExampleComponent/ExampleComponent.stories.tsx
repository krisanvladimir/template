import React from 'react';
import { ExampleComponent } from './ExampleComponent';

export default {
  title: 'ExampleComponent',
  component: ExampleComponent,
};

export const Basic = () => <ExampleComponent />;

export const Second = () => <ExampleComponent text={'Hello world!!!'} />;
