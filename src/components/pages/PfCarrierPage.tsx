import ParentDiv from 'components/atoms/ParentDiv';
import PfTitle from 'components/atoms/PfTitle';
import PfTimeLine from '../molucules/PfTimeLine';


const PfCarrierPage: React.FC = () => {
    return (
        <ParentDiv style={{overflow: 'scroll'}}>
            <PfTitle id="Carrier">Carrier</PfTitle>
            <PfTimeLine />
        </ParentDiv>
    );
};


export default PfCarrierPage;
