import styled from 'styled-components';

/**
  * Layout
  * HD = Header
  * SB = Sidebar
  * RT = Router
  * FT = Footer
  */

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto 70px;

  grid-template-areas:
  'SB HD'
  'SB RT'
  'FT FT';

  height: 100vh;
`;