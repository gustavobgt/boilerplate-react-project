import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RouterConfig } from "../../../navigation/RouterConfig";

const Router: React.FC = () => {
  return (
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
  );
};

export default Router;
