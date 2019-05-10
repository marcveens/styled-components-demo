import styled, { css } from 'styled-components/';
import { colors } from '../../styles/colors';
import { ButtonProps } from './Button';

export const StyledButton = styled.span<ButtonProps>`
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
    background-color: ${colors.theme.t20};
    transition: .2s ease-in-out;
    text-align: center;

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
`;