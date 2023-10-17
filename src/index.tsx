import Element from './components/Element';
import ThemeContext from './hooks/ThemeContext';
import React from 'react';

export * from './types';

export const ElementComponent = (props) => (
  <ThemeContext.Provider value={'light'}>
    <Element {...props} />
  </ThemeContext.Provider>
);
