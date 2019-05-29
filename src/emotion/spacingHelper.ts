import { css } from '@emotion/core';
import { spacings } from '../styles/spacings';

export type ExtendWithSpacingsProps = {
    mMb?: boolean;
}

export const extendWithSpacings = (props: ExtendWithSpacingsProps) => {
    return css`
        ${props && props.mMb && css`
            margin-bottom: ${spacings.M};
        `}
    `;
};