import PfCard from 'components/atoms/PfCard';
import PfInformation from 'components/atoms/PfInformation';
import PfPageArea from 'components/atoms/PfPageArea';
import PfTitle from 'components/atoms/PfTitle';
import PfMiniTitle from 'components/atoms/PfMiniTitle';
import styled from 'styled-components'
import PfTextArea from 'components/atoms/PfTextArea';


const PfProfile = () => {
    return (
        <ParentDiv>
            <PfTitle >Profile</PfTitle>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                <PfCard is_white={true}>
                    <PfMiniTitle style={{marginBottom: 15}}>基本情報</PfMiniTitle>
                    <PfInformation field_name='Name' text_name='長谷川正樹(はせがわまさき)'/>
                    <PfInformation field_name='University' text_name='横浜国立大学 理工学部4年'/>
                    <PfInformation field_name='Birth Date' text_name='1999-10-17'/>
                    <PfInformation field_name='Hobbies' text_name='スキューバダイビング🤿　バスケ🏀　映画🎬'/>
                    <PfInformation field_name='Internship' text_name='Intelligence Design(https://i-d.ai/)'/>
                </PfCard>
                <PfCard >
                    <PfMiniTitle style={{marginBottom: 15}}>自己紹介</PfMiniTitle>
                    <PfTextArea>こんにちは。平成11年生まれの22歳長谷川正樹です。2022年の春に同大学院に進学する予定です。<br/>
                        エンジニアを志望しており、長期インターンシップや個人開発などに取り組みながら、日々精進しております。
                        将来は、営業力とプレゼン力を兼ね備えた本当の意味でのフルスタックエンジニアになりたいと考えています。
                        そして、世界中のユーザーに使っていただけるサービスを作るのが僕の夢です。
                    </PfTextArea>
                </PfCard>
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

export default PfProfile;
