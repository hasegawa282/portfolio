import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { LaptopMac, School, HistoryEdu } from '@mui/icons-material'
import PfTimelineItem from './PfTimelineItem';

export default function PfTimeLine() {
  return (
    <Timeline position="alternate" style={{width: '90%'}}>
      <PfTimelineItem 
        paperProps={{
          title: '青森県立五所川原高校　卒業', 
          text: ''
        }}
        icon={<HistoryEdu />}
        date="2018/3"
      />
      <PfTimelineItem 
        paperProps={{
          title: '横浜国立大学　理工学部入学',
          sub_title: '数物・電子情報系学科　電子情報システムEP', 
          text: 'ダイビングサークルBlueMarlinとバスケサークルB2Uに入会。特にBlueMarlinでは、役職についていない分一番サークルを盛り上げるように意識していました。どちらのサークルも一生の仲間と出会うことができました。'
        }}
        icon={<School color="primary"/>}
        date="2018/4"
      />
      <PfTimelineItem 
        paperProps={{
          title: '長期インターンシップ開始', 
          sub_title: 'Intelligence Design', 
          text: '学業に真剣に取り組んでいたのと、33万のmacbookを購入した心意気を買われ入社します。スキル無し、リモートワークでの実務開発は非常にタフでしたが、その分得られたものは大きかったと思います。これからもフルスタックエンジニアを目指して精進させていただきます。'
        }}
        icon={<LaptopMac />}
        date="2020/2"
      />
      <PfTimelineItem 
        paperProps={{
          title: '横浜国立大学　理工学部卒業(予定)', 
          text: '今年の春に卒業する予定です。'
        }}
        icon={<School />}
        date="2022/3"
      />
      <PfTimelineItem 
        paperProps={{
          title: '横浜国立大学大学院　理工学府入学(予定)', 
          text: '学業に真剣に取り組んでいたおかげで、大学院に推薦合格することができました。大学院では、情報システム分野をより深く学んでいきたいと考えています。'
        }}
        icon={<School />}
        date="2022/4"
      />
    </Timeline>
  );
}