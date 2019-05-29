import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StyledComponents from './styled-components/StyledComponents';
import Emotion from './emotion/Emotion';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={StyledComponents} />
      <Route path="/emotion" exact component={Emotion} />
    </BrowserRouter>
  );
}

export default App;
