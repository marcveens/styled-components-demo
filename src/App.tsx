import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StyledComponents from './flavours/StyledComponents';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={StyledComponents} />
    </BrowserRouter>
  );
}

export default App;
