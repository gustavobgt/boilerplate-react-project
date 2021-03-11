import styled from 'styled-components';

export const Container = styled.header`
  grid-area: HD;
  display: flex;
  align-items: center;
  padding: 0 20px;

  border-bottom: 2px solid #D9534F;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
`;