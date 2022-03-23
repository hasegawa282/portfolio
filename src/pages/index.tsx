import type { NextPage } from 'next';
import PfProfilePage from 'components/pages/PfProfilePage';
import PfCarrierPage from 'components/pages/PfCarrierPage';
import PfSkillsPage from 'components/pages/PfSkillsPage';
import PfProductsPage from 'components/pages/PfProductsPage';
import PfHomePage from 'components/pages/PfHomePage';

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
