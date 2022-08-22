import styled from 'styled-components';

export const ListItems = styled.li`
  list-style: none;
`;

export const StatList = styled.ul`
  padding: 0;
`;

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.blue};
`;

export const Percentage = styled.span`
  margin-left: 10px;
`;
