import * as React from 'react';
import styled from 'styled-components'

export interface HoverTextProps{
    text?: string;
    can_click?: boolean;
};

const HoverText: React.FC<HoverTextProps> = (props) => {
    return (
        <StyledParent><StyledHoverText can_click={props.can_click}>{props.text}</StyledHoverText></StyledParent>
    );
};


const StyledParent = styled.h4`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
    z-index: 99;

`;

const StyledHoverText = styled.div<{
    can_click?: boolean;
}>`
    display: inline-flex;
    align-items: center;
    background-color: ${(p) => (p.can_click ? 'black' : 'white')};
    border: 1px solid black;
    border-radius: 4px;
    color: ${(p) => (p.can_click ? 'white' : 'black')};
    padding: 5px;
`;

export default HoverText;
