import { css } from 'styled-components';
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