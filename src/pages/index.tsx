import type { NextPage } from 'next';
import PfHomeArea from 'components/atoms/PfHomeArea';
import PfProfile from 'components/molucules/PfProfile';
import PfCarrier from 'components/molucules/PfCarrier';

const Home: NextPage = () => {
    return (
        <div style={{width: '100%', display: 'block'}}>
            <PfHomeArea>
                portfolio
            </PfHomeArea>
            <PfProfile />
            <PfCarrier />
        </div>
        
    );
};



export default Home;
