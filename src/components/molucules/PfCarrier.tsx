import PfCard from 'components/atoms/PfCard';
import PfInformation from 'components/atoms/PfInformation';
import PfPageArea from 'components/atoms/PfPageArea';
import PfTitle from 'components/atoms/PfTitle';
import PfMiniTitle from 'components/atoms/PfMiniTitle';
import styled from 'styled-components'
import PfTextArea from 'components/atoms/PfTextArea';
import PfTimeLine from './PfTimeLine';


const PfCarrier = () => {
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

export default PfCarrier;
