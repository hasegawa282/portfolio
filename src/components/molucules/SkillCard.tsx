import HoverText from 'components/atoms/HoverText';
import * as React from 'react';
import styled from 'styled-components'
import PfCard, { PfCardProps } from '../atoms/PfCard';
import PfRating, { PfRatingProps } from '../atoms/PfRating';

interface SkillCardProps extends PfCardProps {
    title?: string;
    src?: string;
    date?: string;
    name?: string;
    ratingProps: PfRatingProps;
};

const SkillCard: React.FC<SkillCardProps> = (props) => {
    let _props = {...props}
    _props.style = {
        ..._props.style,
        width: 210,
        minWidth: 1,
        height: 210,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'10px',
        position: 'relative',
        overflow: 'hidden',
    }
    return (
        <StyledPfCard {..._props} is_white={true}>
            <div>経験年数：{props.date}</div>
            <PfRating {..._props.ratingProps}/>
            <HoverText text={_props.name}/>
            <Img src={_props.src}></Img>
        </StyledPfCard>
    );
};

const StyledPfCard = styled(PfCard)`
    &:hover {
        opacity: 0.7;
    }

`;
const Img = styled.img`
    width: auto;
    height: 120px;
    max-width: 100%;
    margin-top: 10px;
`;


export default SkillCard;
