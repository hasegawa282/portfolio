import PfPageArea from 'components/atoms/PfPageArea';
import PfTitle from 'components/atoms/PfTitle';
import styled from 'styled-components'
import SkillCard from 'components/molucules/SkillCard';

const skills = [
    {
        src: "/images/javascript1.png",
        date: '2年',
        value: 3,
        name: 'JavaScript',
    },
    {
        src: "/images/react.png",
        date: '2年',
        value: 3,
        name: 'React',
    },
    {
        src: "/images/typescript1.png",
        date: '2年',
        value: 3,
        name: 'TypeScript',
    },
    {
        src: "/images/css3.png",
        date: '2年',
        value: 3,
        name: 'CSS',
    },
    {
        src: "/images/HTML5.png",
        date: '2年',
        value: 3,
        name: 'HTML',
    },
    {
        src: "/images/blueprintjs1.jpeg",
        date: '1年',
        value: 2,
        name: 'BlueprintJS',
    },
    {
        src: "/images/python.png",
        date: '1年',
        value: 2,
        name: 'Python',
    },
    {
        src: "/images/redux1.png",
        date: '1年',
        value: 2,
        name: 'Redux',
    },
    {
        src: "/images/react-router.png",
        date: '1年',
        value: 2,
        name: 'React-Router',
    },
    {
        src: "/images/github.png",
        date: '1年',
        value: 2,
        name: 'Github',
    },
    {
        src: "/images/bootstrap.png",
        date: '1年未満',
        value: 1,
        name: 'BootstrapJS',
    },
    {
        src: "/images/Materil-UI.png",
        date: '1年未満',
        value: 1,
        name: 'Material UI',
    },
    {
        src: "/images/flutter1.png",
        date: '1年未満',
        value: 1,
        name: 'Flutter',
    },
    {
        src: "/images/gcp.png",
        date: '1年未満',
        value: 1,
        name: 'Google Vision API',
    },
    {
        src: "/images/aws1.png",
        date: '1年未満',
        value: 1,
        name: 'AWS',
    },
    {
        src: "/images/nextjs.png",
        date: '1年未満',
        value: 1,
        name: 'NextJS',
    },
]


const PfSkillPage = () => {
    return (
        <ParentDiv>
            <PfTitle >Skill</PfTitle>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {skills.map((skill) => (<SkillCard 
                src={skill.src} 
                ratingProps={{value: skill.value}}
                date={skill.date}
                name={skill.name}
                />))}
            </div>
        </ParentDiv>
    );
};

const ParentDiv = styled(PfPageArea)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default PfSkillPage;
