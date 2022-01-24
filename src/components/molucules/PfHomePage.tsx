import PfHomeArea from 'components/atoms/PfHomeArea';
import styled from 'styled-components'


const PfHomePage: React.FC = () => {
    return (
        <PfHomeArea id="Home">
            <CenterBlock>Welcome to my Portfolio</CenterBlock>
        </PfHomeArea>
    );
};

const CenterBlock = styled.div`
    font-size: 5rem;
    z-index: 99;
    color: white;
    padding: 10px;
    background-color: rgba(1, 1, 1, 0.3);
`;


export default PfHomePage;
