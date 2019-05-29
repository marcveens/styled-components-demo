import { css } from "styled-components";

export const spacings = {
    S: '25px',
    M: '35px',
    L: '45px'
};

export type ExtendWithSpacingsProps = {
    mMb?: boolean;
}

export const extendWithSpacings = (props: ExtendWithSpacingsProps) => {
    return css`
        ${props && props.mMb && css`
            margin-bottom: ${spacings.M}
        `}
    `;
};