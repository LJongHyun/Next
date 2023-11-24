import React from 'react';
import styled from 'styled-components';

const HistoryWrapper = styled.div`
  margin-top: 20px;
`;

const HistoryItem = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
`;

const History = ({ history }) => {
  return (
    <HistoryWrapper>
      <p>Calculation History:</p>
      {history.map((item, index) => (
        <HistoryItem key={index}>{item}</HistoryItem>
      ))}
    </HistoryWrapper>
  );
};

export default History;