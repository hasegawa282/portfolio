import HoverText from 'components/atoms/HoverText';
import * as React from 'react';
import styled from 'styled-components'
import PfCard, { PfCardProps } from '../atoms/PfCard';
import PfRating, { PfRatingProps } from '../atoms/PfRating';

interface ProductCardProps extends PfCardProps {
    title?: string;
    src?: string;
    skills?: string[];
    text?: string;
};

const ProductCard: React.FC<ProductCardProps> = (props) => {
    let _props = {...props}
    _props.style = {
        ..._props.style,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    }
    return (
        <StyledPfCard {..._props} is_white={true}>
            <h4>{props.title}</h4>
            <SkillArea>
                {props.skills?.map((skill) => <Img src={skill}/>)}
            </SkillArea>
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
    height: 30px;
    max-width: 100%;
    margin-top: 10px;
`;

const SkillArea = styled.div`
    display: flex;
`;


export default ProductCard;
