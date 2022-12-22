import styled from 'styled-components';

interface PfAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    disable_decoration?: boolean;
    out_link?: boolean;
}

const PfA: React.FC<PfAProps> = (props) => {
    const _props = { ...props };
    if (props.out_link) {
        _props.target = '_blank';
        _props.rel = 'noopener noreferrer';
    }

    return <StyledPfA {..._props}>{props.text}</StyledPfA>;
};

const StyledPfA = styled.a<{
    disable_decoration?: boolean;
}>`
    text-decoration: ${(p) => (p.disable_decoration ? 'none' : 'underline')};
`;

export default PfA;
