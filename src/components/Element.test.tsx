import {render, screen} from '@testing-library/react';
import Element from './Element';
import React from 'react';

describe('Element Component Test', () => {
  it('should display passed text in a div', () => {
    render(<Element color="red" text="Hello World" />);

    expect(screen.getByText('text is: Hello World')).toBeInTheDocument();
  });
});
