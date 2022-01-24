import type { NextPage } from 'next';
import PfProfilePage from 'components/molucules/PfProfilePage';
import PfCarrierPage from 'components/molucules/PfCarrierPage';
import PfSkillsPage from 'components/molucules/PfSkillsPage';
import PfProductsPage from 'components/molucules/PfProductsPage';
import PfHomePage from 'components/molucules/PfHomePage';

const Home: NextPage = () => {
    return (
        <div style={{width: '100%', display: 'block'}}>
            <PfHomePage/>
            <PfProfilePage />
            <PfCarrierPage />
            <PfSkillsPage />
            <PfProductsPage />
        </div>
        
    );
};



export default Home;
