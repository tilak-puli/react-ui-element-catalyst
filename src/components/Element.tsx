import React from 'react';
import {ElementProps} from '../types';

const Element = ({color, text}: ElementProps) => {
  return <div style={{color}}>text is: {text}</div>;
};

export default Element;
