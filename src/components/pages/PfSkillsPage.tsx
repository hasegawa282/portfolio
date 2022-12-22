import PfTitle from 'components/atoms/PfTitle';
import SkillCard from 'components/molucules/SkillCard';
import ParentDiv from 'components/atoms/ParentDiv';

const skills = [
    {
        src: "/images/javascript1.png",
        date: '2.5年',
        value: 4,
        name: 'JavaScript',
    },
    {
        src: "/images/react.png",
        date: '2.5年',
        value: 4,
        name: 'React',
    },
    {
        src: "/images/typescript1.png",
        date: '2.5年',
        value: 4,
        name: 'TypeScript',
    },
    {
        src: "/images/css3.png",
        date: '2.5年',
        value: 3,
        name: 'CSS',
    },
    {
        src: "/images/HTML5.png",
        date: '2.5年',
        value: 3,
        name: 'HTML',
    },
    {
        src: "/images/blueprintjs1.jpeg",
        date: '2年',
        value: 3,
        name: 'BlueprintJS',
    },
    {
        src: "/images/python.png",
        date: '3年',
        value: 3,
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
        date: '2年',
        value: 3,
        name: 'React-Router',
    },
    {
        src: "/images/github.png",
        date: '2年',
        value: 2,
        name: 'Github',
    },
    {
        src: "/images/flutter1.png",
        date: '3ヶ月',
        value: 2,
        name: 'Flutter',
    },
    {
        src: "/images/gcp.png",
        date: '2ヶ月',
        value: 1,
        name: 'Google Vision API',
    },
    {
        src: "/images/aws1.png",
        date: '1年',
        value: 3,
        name: 'AWS',
    },
    {
        src: "/images/nextjs.png",
        date: '2ヶ月',
        value: 1,
        name: 'NextJS',
    },
    {
        src: "/images/firebase.png",
        date: '2ヶ月',
        value: 1,
        name: 'Firebase',
    },
    {
        src: "/images/gopher.png",
        date: '2ヶ月',
        value: 2,
        name: 'Go',
    },
    {
        src: "/images/azure.png",
        date: '1ヶ月',
        value: 1,
        name: 'Azure',
    },
    {
        src: "/images/dart.png",
        date: '3ヶ月',
        value: 2,
        name: 'Dart',
    },
    {
        src: "/images/storybook.png",
        date: '1ヶ月',
        value: 1,
        name: 'Storybook',
    },
]


const PfSkillsPage = () => {
    const sorted_skills = skills.sort((a, b) => {
        if(a.value < b.value) return 1
        if(a.value > b.value) return -1
        return 0
    })
    return (
        <ParentDiv>
            <PfTitle id="Skills">Skills</PfTitle>
            <div>IPAが公表するITスキル標準の定義に基づき(最大7)自己判断で評価しました。</div>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {sorted_skills.map((skill,i) => (<SkillCard 
                src={skill.src} 
                rating_props={{value: skill.value}}
                date={skill.date}
                name={skill.name}
                key={i}
                />))}
            </div>
        </ParentDiv>
    );
};

export default PfSkillsPage;
