import styled from '@emotion/styled';
import { extendWithSpacings, ExtendWithSpacingsProps } from '../spacingHelper';

type TableProps = ExtendWithSpacingsProps;

export const Table = styled.table<TableProps>`
    ${props => extendWithSpacings(props)}

    border-collapse: collapse;
    width: 100%;

    td {
        padding: 10px;
        background-color: #f6f6f6;
    }

    tr:nth-of-type(odd) {
        td {
            background-color: #e9e9e9
        }
    }
`;