import styled from "styled-components";

export const StatusColor = styled.span`
  background-color: ${p => p.isOnline ? p.theme.colors.green : p.theme.colors.red};
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  margin-left: 10px;
`;

export const Name = styled.p`
  margin-left: 5px;
`;