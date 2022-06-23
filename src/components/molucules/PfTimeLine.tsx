import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { LaptopMac, School, HistoryEdu, Keyboard } from '@mui/icons-material'
import PfTimelineItem from './PfTimelineItem';
import { useMediaQuery, useTheme } from '@mui/material';

export default function PfTimeLine() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Timeline position={matches?'alternate':'right'} style={{width: '100%'}}>
      <PfTimelineItem 
        paperProps={{
          title: '青森県立五所川原高校　卒業', 
          text: '自分の成長への近道は、地道な努力のみということを受験勉強を通して学びました。'
        }}
        icon={<HistoryEdu style={{color: 'black' }}/>}
        date="2018/3"
      />
      <PfTimelineItem 
        paperProps={{
          title: '横浜国立大学　理工学部入学',
          sub_title: '数物・電子情報系学科　電子情報システムEP', 
          text: 'ダイビングサークルBlueMarlinとバスケサークルB2Uに入会。特にBlueMarlinでは、役職についていない分一番サークルを盛り上げるように意識していました。どちらのサークルも一生の仲間と出会うことができました。'
        }}
        icon={<School/>}
        date="2018/4"
      />
      <PfTimelineItem 
        paperProps={{
          title: '長期インターンシップ開始', 
          sub_title: 'Intelligence Design Inc.', 
          text: '学業に真剣に取り組んでいたのと、33万のmacbookを購入した心意気を買われ入社します。スキル無し、リモートワークでの実務開発は非常にタフでしたが、得られたものは大きかったと思います。今後もフルスタックエンジニアを目指して成長させていただきます。'
        }}
        icon={<LaptopMac style={{color: 'black' }}/>}
        date="2020/2"
      />
      <PfTimelineItem 
        paperProps={{
          title: '横浜国立大学　理工学部卒業', 
          text: '卒業研究では、マルチエージェントシミュレーションで電力市場を分析しておりました。【2021年度　第11回　電気学会東京支部神奈川支所　研究会】では優秀賞を取得できました。'
        }}
        icon={<School/>}
        date="2022/3"
      />
      <PfTimelineItem 
        paperProps={{
          title: '横浜国立大学大学院　理工学府入学', 
          text: '学業に真剣に取り組んでいたおかげで、大学院に推薦合格することができました。大学院では研究分野のみならず、情報システム分野を幅広く、深く学びたいと考えています。'
        }}
        icon={<School style={{color: 'black' }}/>}
        date="2022/4"
      />
      <PfTimelineItem 
        paperProps={{
          title: 'ハッカソン[BIPROGY DX HACK 2022]', 
          text: '人生初のハッカソンに参加しました。テックリードとして、チームに開発環境を共有し、「リアルタイム音声認識による英語禁止ゲーム」を搭載しました。最終的なプロダクトとしては、「リアルタイム音声認識による英語禁止ゲーム」と「アンケート機能」を搭載させたビデオ通話アプリケーションを開発しました。チームメンバーに恵まれたおかげで、前代未聞の3冠【最優秀賞、オーディエンス賞、kintone賞】を受賞できました。'
        }}
        icon={<Keyboard/>}
        date="2022/5"
      />
      <PfTimelineItem 
        paperProps={{
          title: 'Sprinters', 
          sub_title: 'パーソルキャリア', 
          text: 'ユーザーニーズ検証から、プロトタイプ開発まで経験できるインターンシップに参加しました。ユーザーが本当に求める物を提供するためのUI/UXや、ビジネス観点でのサービス開発など、普段ではなかなか携われない部分を経験できました。チームメンバーに恵まれたおかげで、【最優秀賞】を受賞できました。'
        }}
        icon={<Keyboard/>}
        date="2022/5"
      />
    </Timeline>
  );
}