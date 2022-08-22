import styled from 'styled-components'

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;
  color: palevioletred;
`;

export const Avatar = styled.img`
  width: 100px;
`;

export const ListItems = styled.li`
  list-style: none;
`;

export const StatsList = styled.ul`
  padding: 0;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Quantity = styled.span`
  margin-left: 10px;
`;

export const Item = styled.span`
  color: ${p => p.theme.colors.black};
`;

export const DescriptionItem = styled.p`
  color: ${p => p.theme.colors.black};
`;

export const Description = styled.div`
  display: block;
`