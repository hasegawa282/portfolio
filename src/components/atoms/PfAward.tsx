import * as React from 'react';
import styled from 'styled-components';
import { BoldText } from 'components/atoms/ContentArea';

export interface PfAwardProps {
    text: string;
    date: string;
}

const PfAward: React.FC<PfAwardProps> = (props) => {
    return (
        <StyledAward>
            <BoldText style={{ marginRight: 30, width: 150 }}>{props.date}</BoldText>
            <BoldText>{props.text}</BoldText>
        </StyledAward>
    );
};

const StyledAward = styled.h4`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
`;

export default PfAward;
