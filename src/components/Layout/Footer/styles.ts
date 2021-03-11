import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: FT;
  border-top: 2px solid #D9534F;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
`;