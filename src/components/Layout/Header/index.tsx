import React from 'react';
import { Container } from './styles'

import ThemeSwitcher from '../../ThemeSwitcher'

const Header: React.FC = () => {
  return (
    <Container>
      <ThemeSwitcher/>
    </Container>
  );
};

export default Header;
