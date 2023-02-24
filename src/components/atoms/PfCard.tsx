import * as React from 'react';
import { Card, CardProps } from '@mui/material';
import styled from 'styled-components';

export interface PfCardProps extends CardProps {
    isWhite?: boolean;
    disabled_scroll?: boolean;
}

const PfCard: React.FC<PfCardProps> = (props) => {
    return <StyledCard {...props} />;
};

const StyledCard = styled(({ isWhite: _isWhite, disabled_scroll: _disabled_scroll, ...props }: PfCardProps) => (
    <Card {...props} />
))`
    min-width: 350px;
    ${({ isWhite, disabled_scroll }) => `
        overflow: ${disabled_scroll ? 'hide' : 'scroll'};
        background-color: ${isWhite ? 'white' : 'undefined'};
        color: ${isWhite ? 'black' : 'undefined'};
    `}
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 15px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
`;

export default PfCard;
