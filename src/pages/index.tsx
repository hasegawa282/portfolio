import type { NextPage } from 'next';
import PfProfilePage from 'components/organisms/PfProfilePage';
import PfCarrierPage from 'components/organisms/PfCarrierPage';
import PfSkillsPage from 'components/organisms/PfSkillsPage';
import PfProductsPage from 'components/organisms/PfProductsPage';
import PfHomePage from 'components/organisms/PfHomePage';

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
