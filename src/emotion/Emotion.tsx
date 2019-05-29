import React from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Link } from 'react-router-dom';
import { Button } from './Button/Button.style';
import { Table } from './Table/Table.style';
import { Heading } from './Heading/Heading.style';
import { colors } from '../styles/colors';
import { Input } from './Forms/Input.style';
import { ThemeProvider } from 'emotion-theming';
import { theme as macawTheme } from '../styles/macawTheme';
import { theme } from './defaultTheme';

const Emotion: React.FC = () => {
    const [color, setColor] = React.useState(colors.theme.t20);
    const PageHeading = Heading.withComponent('h1');
    const SpanButton = Button.withComponent('span');

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />

                <PageHeading>emotion</PageHeading>
                <Table mMb>
                    <tbody>
                        <tr>
                            <td><Button >Default</Button></td>
                            <td><SpanButton>span button</SpanButton></td>
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
                                <ThemeProvider theme={macawTheme}>
                                    <Button><span role="img" aria-label="">🎉🥳🎊</span></Button>
                                </ThemeProvider>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Layout>
        </ThemeProvider>
    );
}

export default Emotion;
