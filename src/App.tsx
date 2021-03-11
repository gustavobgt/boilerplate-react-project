import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from "react-redux";

import GlobalStyles from './styles/GlobalStyles'

import { RootState } from './store';

import Layout from './components/Layout'

const App: React.FC = () => {
  const theme: any = useSelector<RootState>(state => state.theme);

  return (
      <ThemeProvider theme={theme} >
        <GlobalStyles/>
        <Layout/>
      </ThemeProvider>
  );
};

export default App;
