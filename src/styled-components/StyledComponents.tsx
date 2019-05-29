import React from 'react';
import { Normalize } from 'styled-normalize';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Link } from 'react-router-dom';
import { Button } from './Button/Button.style';
import { Table } from './Table/Table.style';
import { Heading } from './Heading/Heading.style';
import { colors } from '../styles/colors';
import { Input } from './Forms/Input.style';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/macawTheme';

const StyledComponents: React.FC = () => {
    const [color, setColor] = React.useState(colors.theme.t20);

    return (
        <Layout>
            <Normalize />
            <GlobalStyle />

            <Heading as="h1">styled-components</Heading>
            <Table mMb>
                <tbody>
                    <tr>
                        <td><Button >Default</Button></td>
                        <td><Button as="span">span button</Button></td>
                        <td><Button disabled>Disabled</Button></td>
                        <td><Button onClick={() => alert(`I'm clicked`)}>Clickable</Button></td>
                        {/* 
                        // @ts-ignore TS issue in styled-components :( */}
                        <td><Button as={Link} to="/">React-router link</Button></td>
                    </tr>
                    <tr>
                        <td colSpan={5}>
                            {/* Button with dynamic background color */}
                            Magic color changer: <Input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                            <br />
                            <Button backgroundColor={color}><span role="img" aria-label="">🎨</span></Button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={5}>
                            {/* Themed button */}
                            <ThemeProvider theme={theme}>
                                <Button><span role="img" aria-label="">🎉🥳🎊</span></Button>
                            </ThemeProvider>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Layout>
    );
}

export default StyledComponents;
