import * as React from 'react';
import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    field_name: string;
    text_name: string;
};

const PfInformation: React.FC<Props> = (props) => {
    return (
        <Parent>
            <Text style={{width: '30%'}}>{props.field_name}</Text>
            <IntervalText>:</IntervalText>
            <Text style={{width: `calc(100% - 30%)`}}>{props.text_name}</Text>
        </Parent>
    );
};

const Parent = styled.div`
    display: flex;
    width: 100%;
    margin: 10px 0px;
`;

const IntervalText = styled.div`
    margin: auto 15px;
`;

const Text = styled.div`
    display: flex;
    align-items: center;
`;

export default PfInformation;
