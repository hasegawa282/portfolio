import PfPageArea from 'components/atoms/PfPageArea';
import PfTitle from 'components/atoms/PfTitle';
import styled from 'styled-components'
import PfTimeLine from './PfTimeLine';


const PfCarrierPage = () => {
    return (
        <ParentDiv>
            <PfTitle >Carrier</PfTitle>
            <PfTimeLine />
        </ParentDiv>
    );
};

const ParentDiv = styled(PfPageArea)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default PfCarrierPage;
