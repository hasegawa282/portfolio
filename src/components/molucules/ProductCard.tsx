import * as React from 'react';
import HoverText from 'components/atoms/HoverText';
import styled from 'styled-components';
import PfCard, { PfCardProps } from '../atoms/PfCard';
import ProductDetailDialog from './ProductDetailDialog';

interface ProductCardProps extends PfCardProps {
    title?: string;
    src?: string;
    type: string;
    skills?: string[];
    text?: string;
    skill_text?: string;
    link?: string;
    duration?: string;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const _props = { ...props };
    _props.style = {
        ..._props.style,
        height: 300,
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    };
    return (
        <>
            <StyledPfCard {..._props} is_white={true} onClick={() => setOpen(true)}>
                <h4>{props.title}</h4>
                {props.type === 'IMAGE' && <Img src={props.src} />}
                {props.type === 'VIDEO' && <Video src={props.src} muted={true} controls={false} autoPlay={true} />}
                <HoverText text='Please Click!' can_click={true} />
                <SkillArea>
                    {props.skills?.map((skill, i) => (
                        <MiniImg src={skill} key={i} />
                    ))}
                </SkillArea>
            </StyledPfCard>
            {open && (
                <ProductDetailDialog
                    {...props}
                    onClose={() => {
                        setOpen(false);
                    }}
                    open={open}
                />
            )}
        </>
    );
};

const StyledPfCard = styled(PfCard)`
    &:hover {
        opacity: 0.7;
    }
`;
const Img = styled.img`
    width: auto;
    height: 150px;
    max-width: 100%;
    margin-top: 10px;
`;

const Video = styled.video`
    width: auto;
    height: 150px;
    max-width: 100%;
    margin-top: 10px;
`;

const MiniImg = styled.img`
    width: auto;
    height: 30px;
    max-width: 100%;
    margin-top: 10px;
`;

const SkillArea = styled.div`
    display: flex;
`;

export default ProductCard;
