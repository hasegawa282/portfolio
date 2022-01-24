import PfPageArea from 'components/atoms/PfPageArea';
import PfTitle from 'components/atoms/PfTitle';
import styled from 'styled-components'
import SkillCard from 'components/molucules/SkillCard';
import ProductCard from './ProductCard';

const products = [
    {
        title: 'ポートフォリオ',
        src: '',
        skills: ["/images/typescript1.png", "/images/react.png", "/images/nextjs.png", "/images/Materil-UI.png"],
        text: 'NextJSが気になっていたため、勉強を含めてポートフォリオページを作成しました。ただ、1ページ画面だとnextJSの良さが発揮されないので、コンタクトページを加えてみようか検討中です。'
    },
    {
        title: 'レシートOCRアプリ(途中)(プライベート用)',
        src: '',
        skills: ["/images/typescript1.png", "/images/react.png", "/images/aws1.png","/images/gcp.png", "/images/blueprintjs1.jpeg"],
        text: 'レシートの商品を購入者で分割したかったが、一般のOCRアプリにはこの機能がなく自作しました。加えて読み取った商品の購入者を、過去のDB情報から分析して自動補完できるようにしました。'
    },
]


const PfProductPage = () => {
    return (
        <ParentDiv>
            <PfTitle >Product</PfTitle>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {products.map((product) => (<ProductCard {...product}/>))}
            </div>
        </ParentDiv>
    );
};

const ParentDiv = styled(PfPageArea)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default PfProductPage;
