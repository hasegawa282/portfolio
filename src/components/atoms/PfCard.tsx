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
}>`
    min-width: 350px;
    width: 44%;
    height: 450px;
    overflow: ${(p) => p.disabled_scroll ? 'hide' : 'scroll'};
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 30px;
    background-color: ${(p) => p.is_white ? 'white' : 'undefined'};
    color: ${(p) => p.is_white ? 'black' : 'undefined'};
`;

export default PfCard;
