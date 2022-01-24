import styled from 'styled-components'

interface PfAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    disable_decoration?:boolean;
};

const PfA: React.FC<PfAProps> = (props) => {
    return (
        <StyledPfA {...props} target="_blank" rel="noopener noreferrer">{props.text}</StyledPfA>
    );
};

const StyledPfA = styled.a<{
    disable_decoration?:boolean;
}>`
    text-decoration: ${(p) => (p.disable_decoration ? 'none' : 'underline')};
`;

export default PfA