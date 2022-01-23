import * as React from 'react';
import {Card, CardProps} from '@mui/material'
import styled from 'styled-components'

interface Props extends CardProps {is_white?: boolean};

const PfCard: React.FC<Props> = (props) => {
    return (
        <StyledCard {...props} />
    );
};

const StyledCard = styled(Card)<{
    is_white?: boolean;
}>`
    min-width: 350px;
    width: 40%;
    height: 400px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 30px;
    background-color: ${(p) => p.is_white ? 'white' : 'undefined'};
    color: ${(p) => p.is_white ? 'black' : 'undefined'};
`;

export default PfCard;
