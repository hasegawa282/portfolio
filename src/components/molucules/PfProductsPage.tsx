import PfTitle from 'components/atoms/PfTitle';
import ProductCard from './ProductCard';
import ParentDiv from 'components/atoms/ParentDiv';

const products = [
    {
        title: 'ポートフォリオ',
        src: '/images/myPortfolio.png',
        skills: ["/images/typescript1.png", "/images/react.png", "/images/nextjs.png", "/images/Materil-UI.png"],
        text: '【個人開発】Next.jsの勉強と自己紹介のためにポートフォリオサイトを作成しました。ただ、1ページ画面だとNext.jsの良さが発揮されないので、何かしらのページを追加しようと検討中です。',
        skill_text: 'TypeScript, React, Next.js, Material-UI',
        duration: '2022-1-24 ~ 2022-1-26',
    },
    {
        title: 'レシートOCRアプリ(開発途中)',
        src: '/images/Edit7.jpg',
        skills: ["/images/typescript1.png", "/images/react.png", "/images/aws1.png","/images/gcp.png", "/images/bootstrap.png"],
        text: '【個人開発】レシートの商品を購入者で分割したかったが、一般のOCRアプリにはこの機能がなく自作しました。まだ未完成ですが詳しい進捗をQiita記事にしています。',
        link: 'https://qiita.com/hasegawa282/items/a839a4930cdb1125d4d6',
        skill_text: 'TypeScript, React, bootstrapJs, Python, AWS, Google Vision API',
        duration: '2021-10 ~ now',
    },
    {
        title: 'BlueMarlin HP(モバイル対応のみ)',
        src: '/images/bluemarlin.png',
        skills: ["/images/typescript1.png", "/images/react.png"],
        text: '【チーム開発】所属しているサークルのBlueMarlinを新入生に紹介するために作成しました。限られた期間での開発だったためモバイル端末のみ対応です。私はフロントエンドの一部を担当しました。',
        link: 'https://blue-marlin1996.com',
        skill_text: 'TypeScript, React',
        duration: '2020-3-27 ~ 2020-4-9',
    },
]


const PfProductsPage: React.FC = () => {
    return (
        <ParentDiv>
            <PfTitle id="Products">Products</PfTitle>
            <div>開発したプロダクトを記載しています。インターン先での開発プロダクトの公表は控えさせたいただきます。</div>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {products.map((product, i) => (<ProductCard {...product} key={i}/>))}
            </div>
        </ParentDiv>
    );
};

export default PfProductsPage;
