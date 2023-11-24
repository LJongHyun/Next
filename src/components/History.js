import React from 'react';
import styled from 'styled-components';

const HistoryWrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const History = ({ history }) => {
  return (
    <>
      {history && history.length > 0 && (
        <HistoryWrapper>
          <div>Calculation History:</div>
          {history.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </HistoryWrapper>
      )}
    </>
  );
};

export default History;