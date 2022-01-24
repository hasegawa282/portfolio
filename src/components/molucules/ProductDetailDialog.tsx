import * as React from 'react';
import styled from 'styled-components'
import PfDialog, { PfDialogProps } from 'components/atoms/PfDialog';
import PfA from 'components/atoms/PfA';

export interface ProductDetailDialogProps extends PfDialogProps {
    src?: string;
    text?: string;
    skill_text?: string;
    link?: string;
};

const ProductDetailDialog: React.FC<ProductDetailDialogProps> = (props) =>  {

  return (
    <PfDialog {...props} is_white={true} children={<StyledChildren>
        <Img src={props.src}/>
        <StyledText>{props.text}</StyledText>
        {props.link && <PfA href={props.link} text="リンク先" out_link={true}/>}
        <StyledText>使用スキル：{props.skill_text}</StyledText>
    </StyledChildren>}/>
  );
}

const StyledChildren = styled.div`
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 100%;
    margin-top: 10px;
`;

const StyledText = styled.div`
    margin-top: 30px;
`;


export default ProductDetailDialog;