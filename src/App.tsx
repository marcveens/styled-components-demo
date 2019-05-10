import React from 'react';
import { Normalize } from 'styled-normalize';
import { Layout } from './ui/Layout/Layout';
import { GlobalStyle } from './styles/GlobalStyle';
import Button from './ui/Button/Button';

const App: React.FC = () => {
  return (
    <Layout>
      <Normalize />
      <GlobalStyle />

      <table>
        <tbody>
          <tr>
            <td><Button>Default</Button></td>
            <td><Button disabled>Disabled</Button></td>
            <td><Button onClick={() => alert(`I'm clicked`)}>Clickable</Button></td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

export default App;
