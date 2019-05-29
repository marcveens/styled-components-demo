import styled, { css } from 'styled-components/macro';
import { colors } from '../../styles/colors';

type ButtonProps = {
    backgroundColor?: string;
}

export const Button = styled.button<ButtonProps>`
    display: inline-flex;
    align-self: flex-start;
    align-items: center;
    height: 60px;
	padding: 0 50px;
	border: 0;
	border-radius: 60px;
	font-size: 18px;
	color: ${colors.white};
	cursor: pointer;
    background-color: ${props => props.theme.backgroundColor};
    transition: .2s ease-in-out;
    text-align: center;
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
    
	&:focus {
		outline: none;
    }

    ${props => props.disabled && css`
        opacity: .4;
        cursor: not-allowed;
    `}

    ${props => props.backgroundColor && css`
        background-color: ${props.backgroundColor};
    `}
`;

Button.defaultProps = {
    theme: {
        backgroundColor: colors.theme.t20
    }
}