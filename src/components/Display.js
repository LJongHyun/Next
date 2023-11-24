import React from 'react';
import styled from 'styled-components';
import History from './History';

const DisplayWrapper = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 20px;
`;

const Display = ({ expression, result, history }) => {
  return (
    <>
      <DisplayWrapper>
        <div>Expression: {expression}</div>
        <div>Result: {result}</div>
      </DisplayWrapper>
      <History history={history} />
    </>
  );
};

export default Display;