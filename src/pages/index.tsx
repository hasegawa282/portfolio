import type { NextPage } from 'next';
import PfHomeArea from 'components/atoms/PfHomeArea';
import PfProfilePage from 'components/molucules/PfProfilePage';
import PfCarrierPage from 'components/molucules/PfCarrierPage';
import PfSkillPage from 'components/molucules/PfSkillPage';
import PfProductPage from 'components/molucules/PfProductPage';

const Home: NextPage = () => {
    return (
        <div style={{width: '100%', display: 'block'}}>
            <PfHomeArea />
            <PfProfilePage />
            <PfCarrierPage />
            <PfSkillPage />
            <PfProductPage />
        </div>
        
    );
};



export default Home;
