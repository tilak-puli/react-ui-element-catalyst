import React from 'react';
import {ElementProps} from '../types';
import styled from 'styled-components';

const Element = ({color, text}: ElementProps) => {
  return <StyledContainer color={color}>text is: {text}</StyledContainer>;
};

const StyledContainer = styled.div`
  color: ${({color}) => color || 'red'};
`;

export default Element;
