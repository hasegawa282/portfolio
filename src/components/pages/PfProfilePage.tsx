import PfCard from 'components/atoms/PfCard';
import PfInformation from 'components/atoms/PfInformation';
import PfTitle from 'components/atoms/PfTitle';
import PfMiniTitle from 'components/atoms/PfMiniTitle';
import PfTextArea from 'components/atoms/PfTextArea';
import ParentDiv from 'components/atoms/ParentDiv';


const PfProfilePage: React.FC = () => {
    return (
        <ParentDiv>
            <PfTitle id="Profile">Profile</PfTitle>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                <PfCard is_white={true}>
                    <PfMiniTitle style={{marginBottom: 15}}>基本情報</PfMiniTitle>
                    <PfInformation field_name='Name' text_name='長谷川正樹(はせがわまさき)'/>
                    <PfInformation field_name='University' text_name='横浜国立大学大学院 理工学府 情報システム教育分野 1年'/>
                    <PfInformation field_name='Birth Date' text_name='1999-10-17'/>
                    <PfInformation field_name='Certification' text_name='AWS SAA, AWS CLP, TOEIC870'/>
                    <PfInformation field_name='Internship' text_name='Intelligence Design(https://i-d.ai/)'/>
                    <PfInformation field_name='Email' text_name='hasegawa.masaki.abb@gmail.com'/>
                    <PfInformation field_name='Hobbies' text_name='スキューバダイビング🤿　バスケ🏀　映画🎬'/>
                    
                </PfCard>
                <PfCard >
                    <PfMiniTitle style={{marginBottom: 15}}>自己紹介</PfMiniTitle>
                    <PfTextArea>こんにちは。平成11年生まれの22歳長谷川正樹です。<br/>
                        ソフトウェアエンジニアを志望しており、長期インターンシップや個人開発などに取り組みながら、日々精進しております。
                        将来は、営業力とプレゼン力を兼ね備えた本当の意味でのフルスタックエンジニアになりたいと考えています。
                        そして、世界中のユーザーに使っていただけるサービスを開発し続けるのが僕の夢です。
                    </PfTextArea>
                </PfCard>
            </div>
        </ParentDiv>
    );
};

export default PfProfilePage;
