import * as React from 'react';
import {Card, CardProps} from '@mui/material'
import styled from 'styled-components'

export interface PfCardProps extends CardProps {
    is_white?: boolean;
    disabled_scroll?: boolean;
};

const PfCard: React.FC<PfCardProps> = (props) => {
    return (
        <StyledCard {...props} />
    );
};

const StyledCard = styled(Card)<{
    is_white?: boolean;
    disabled_scroll?: boolean;
    mathces?: string;
}>`
    min-width: 350px;
    overflow: ${(p) => p.disabled_scroll ? 'hide' : 'scroll'};
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 15px;
    background-color: ${(p) => p.is_white ? 'white' : 'undefined'};
    color: ${(p) => p.is_white ? 'black' : 'undefined'};
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
`;

export default PfCard;
