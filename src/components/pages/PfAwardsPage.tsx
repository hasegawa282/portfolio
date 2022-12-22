import ParentDiv from 'components/atoms/ParentDiv';
import PfAward, { PfAwardProps } from 'components/atoms/PfAward';
import PfTitle from 'components/atoms/PfTitle';

const awards: PfAwardProps[] = [
    {
        date: '2022-2-16',
        text: '2021年度 第11回 電気学会東京支部神奈川支所 研究会【優秀発表賞】',
    },
    {
        date: '2022-5-29',
        text: 'BIPROGY DX HACK 2022【最優秀賞】',
    },
    {
        date: '2022-5-29',
        text: 'BIPROGY DX HACK 2022【オーディエンス賞】',
    },
    {
        date: '2022-5-29',
        text: 'BIPROGY DX HACK 2022【kintone賞】',
    },
    {
        date: '2022-6-19',
        text: 'Sprinters 2022【最優秀賞】',
    },
    {
        date: '2022-7-8',
        text: 'KDGHACKS 2022 SUMMER【優秀賞】',
    },
    {
        date: '2022-8',
        text: 'BIPROGY SUMMER INTERNSHIP【最優秀賞】',
    },
    {
        date: '2022-9-11',
        text: 'DeNA Autumn Hackathon【優勝】',
    },
];

const PfAwardsPage: React.FC = () => {
    return (
        <ParentDiv id='Awards'>
            <PfTitle id='Awards'>Awards</PfTitle>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                {awards.map((award, i) => {
                    return <PfAward {...award} key={i} />;
                })}
            </div>
        </ParentDiv>
    );
};

export default PfAwardsPage;
