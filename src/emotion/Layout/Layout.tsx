import React from 'react';
import { Layout as StyledLayout } from './Layout.style';
import { Link } from 'react-router-dom';

export const Layout: React.FC = (props) => {
    return (
        <StyledLayout>
            <Link to="/">styled-components</Link>&nbsp;/&nbsp;
            <Link to="/emotion">emotion</Link>
            <br />
            {props.children}
        </StyledLayout>
    );
};