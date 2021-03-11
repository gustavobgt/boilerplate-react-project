import styled from 'styled-components';

export const Container = styled.nav`
  grid-area: SB;
  border-right: 2px solid #D9534F;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
`;