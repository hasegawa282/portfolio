import PfTitle from 'components/atoms/PfTitle';
import ProductCard from '../molucules/ProductCard';
import ParentDiv from 'components/atoms/ParentDiv';

const products = [
    {
        title: 'ポートフォリオ',
        src: '/images/myPortfolio.png',
        type: 'IMAGE',
        skills: ["/images/typescript1.png", "/images/react.png", "/images/nextjs.png", "/images/Materil-UI.png"],
        text: '【個人開発】Next.jsの勉強と自己紹介のためにポートフォリオサイトを作成しました。ただ、1ページ画面だとNext.jsの良さが発揮されないので、何かしらのページを追加しようと検討中です。',
        skill_text: 'TypeScript, React, Next.js, Material-UI',
        duration: '2022-1-24 ~ 2022-1-26',
    },
    {
        title: 'レシートOCRアプリ',
        src: '/images/Edit7.jpg',
        type: 'IMAGE',
        skills: ["/images/typescript1.png", "/images/react.png", "/images/aws1.png","/images/gcp.png", "/images/bootstrap.png"],
        text: '【個人開発】レシートの商品を購入者で分割したかったが、一般のOCRアプリにはこの機能がなく自作しました。詳しい進捗をQiita記事にしています。',
        link: 'https://qiita.com/hasegawa282/items/a839a4930cdb1125d4d6',
        skill_text: 'TypeScript, React, bootstrapJs, Python, AWS, Google Vision API',
        duration: '2021-10 ~ 2021-11',
    },
    {
        title: 'BlueMarlin HP(モバイル対応のみ)',
        src: '/images/bluemarlin.png',
        type: 'IMAGE',
        skills: ["/images/typescript1.png", "/images/react.png"],
        text: '【チーム開発】所属しているサークルのBlueMarlinを新入生に紹介するために作成しました。限られた期間での開発だったためモバイル端末のみ対応です。私はフロントエンドの一部を担当しました。',
        link: 'https://blue-marlin1996.com',
        skill_text: 'TypeScript, React',
        duration: '2020-3-27 ~ 2020-4-9',
    },
    {
        title: 'Mottainai(開発途中)',
        src: '/images/mottainai.png',
        type: 'IMAGE',
        skills: ["/images/flutter1.png", "/images/firebase.png"],
        text: '【チーム開発】Sollution Challenge 2022に向けた開発です。SDGsのフードロスをテーマとしています。私は技術管理者として、設計、開発などを担当しています。',
        link: 'https://sc-ynu-2022.web.app/',
        skill_text: 'Flutter, Firebase',
        duration: '2022-3 ~ 現在',
    },
    {
        title: 'YOU KInD OK(ゆきどけ)',
        src: '/images/yukidoke.png',
        type: 'IMAGE',
        skills: ["/images/typescript1.png", "/images/react.png", "/images/gopher.png"],
        text: '【チーム開発】BIPROGYが開催する、ハッカソン[BIPROGY DX HACK]で開発したプロダクトです。twilioを利用してビデオ通話アプリケーションの基盤を作成し、そこにリアルタイム音声認識を利用した「英語禁止ゲーム」を搭載しました。また、kintoneとHerokeから作成したAPIにより、簡単なアンケートを作成/実施/貯蔵できます。これらの機能を利用したアイスブレイクにより、オンラインミーティング特有の固い雰囲気を解きほぐします。チームメンバーに恵まれたこと、常に最悪のケースを想定しながら開発したことが功をなし、前代未聞の3冠「最優秀賞、オーディエンス賞、kintone賞」を受賞しました。',
        link: 'https://pr.biprogy.com/recruit/hackathon/index_hackason.html',
        skill_text: 'TS, React',
        duration: '2022-5-28 ~ 2022-5-29',
    },
    {
        title: '夏休み予定ガチャ',
        src: '/videos/summer-gacha.mov',
        type: 'VIDEO',
        skills: ["/images/typescript1.png", "/images/react.png", "/images/azure.png"],
        text: '【チーム開発】KDDIが開催する、ハッカソン[KDGHACKS 2022]で開発したプロダクトです。Azure Functionsを利用してサーバーレスAPIを作成し、Static Web AppsによりCI/CDを組み込みホスティングしました。「夏休みの予定が立てづらい」、「宿題の予定管理が難しい」そんな悩みを「夏休みガチャ」は解消します。自分の好きなイベントが来るまでリセマラしても良いかもしれませんね!チームメンバーに恵まれたおかげで、【優秀賞(3位)】を受賞できました。',
        link: 'https://techplay.jp/event/859098',
        skill_text: 'TS, React, Azure',
        duration: '2022-7-9 ~ 2022-7-10',
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
