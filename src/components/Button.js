import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
  background-color: #61dafb;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;

  &:hover {
    background-color: #4fa3d1;
  }
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;