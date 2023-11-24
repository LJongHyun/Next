import React from 'react';
import styled from 'styled-components';

const DisplayWrapper = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 20px;
`;

const Display = ({ expression }) => {
  return <DisplayWrapper>{expression}</DisplayWrapper>;
};

export default Display;