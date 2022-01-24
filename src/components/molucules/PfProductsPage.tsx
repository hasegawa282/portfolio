import PfTitle from 'components/atoms/PfTitle';
import ProductCard from './ProductCard';
import ParentDiv from 'components/atoms/ParentDiv';

const products = [
    {
        title: 'ポートフォリオ',
        src: '/images/myPortfolio.png',
        skills: ["/images/typescript1.png", "/images/react.png", "/images/nextjs.png", "/images/Materil-UI.png"],
        text: 'Next.jsの勉強と自己紹介のためにポートフォリオサイトを作成しました。ただ、1ページ画面だとNext.jsの良さが発揮されないので、コンタクトページを加える予定です。',
        skill_text: 'TypeScript, React, Next.js, Material-UI',
    },
    {
        title: 'レシートOCRアプリ(作成途中)',
        src: '/images/Edit7.jpg',
        skills: ["/images/typescript1.png", "/images/react.png", "/images/aws1.png","/images/gcp.png", "/images/blueprintjs1.jpeg"],
        text: 'レシートの商品を購入者で分割したかったが、一般のOCRアプリにはこの機能がなく自作しました。まだ未完成ですが詳しい進捗をQiita記事にしています。',
        link: 'https://qiita.com/hasegawa282/items/a839a4930cdb1125d4d6',
        skill_text: 'TypeScript, React, BlueprintJs, Python, AWS, Google Vision API',
    },
]


const PfProductsPage: React.FC = () => {
    return (
        <ParentDiv>
            <PfTitle id="Products">Products</PfTitle>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {products.map((product, i) => (<ProductCard {...product} key={i}/>))}
            </div>
        </ParentDiv>
    );
};

export default PfProductsPage;
