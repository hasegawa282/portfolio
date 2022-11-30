import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { LaptopMac, School, HistoryEdu, Keyboard } from '@mui/icons-material'
import PfTimelineItem from './PfTimelineItem';
import { useMediaQuery, useTheme } from '@mui/material';

export default function PfTimeLine() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Timeline position={matches ? 'alternate' : 'right'}>
      <PfTimelineItem 
        paperProps={{
          title: '青森県立五所川原高校　卒業', 
          text: '自分の成長への近道は、地道な努力のみということを受験勉強を通して学びました。'
        }}
        icon={<HistoryEdu style={{color: 'black' }}/>}
        dateStart="2018/3"
      />
      <PfTimelineItem 
        paperProps={{
          title: '横浜国立大学　理工学部入学',
          sub_title: '数物・電子情報系学科　電子情報システムEP', 
          text: 'ダイビングサークルBlueMarlinとバスケサークルB2Uに入会。特にBlueMarlinでは、役職についていない分一番サークルを盛り上げるように意識していました。どちらのサークルも一生の仲間と出会うことができました。'
        }}
        icon={<School/>}
        dateStart="2018/4"
      />
      <PfTimelineItem 
        paperProps={{
          title: '長期インターンシップ開始', 
          sub_title: 'Intelligence Design Inc.', 
          text: '学業に真剣に取り組んでいたのと、33万のmacbookを購入した心意気を買われ入社します。スキル無し、リモートワークでの実務開発は非常にタフでしたが、得られたものは大きかったと思います。今後もフルスタックエンジニアを目指して成長させていただきます。'
        }}
        icon={<LaptopMac style={{color: 'black' }}/>}
        dateStart="2020/2"
      />
      <PfTimelineItem 
        paperProps={{
          title: '横浜国立大学　理工学部卒業', 
          text: '卒業研究では、マルチエージェントシミュレーションで電力市場を分析しておりました。【2021年度　第11回　電気学会東京支部神奈川支所　研究会】では優秀賞を取得できました。'
        }}
        icon={<School/>}
        dateStart="2022/3"
      />
      <PfTimelineItem 
        paperProps={{
          title: '横浜国立大学大学院　理工学府入学', 
          text: '学業に真剣に取り組んでいたおかげで、大学院に推薦合格することができました。大学院では研究分野のみならず、情報システム分野を幅広く、深く学びたいと考えています。'
        }}
        icon={<School style={{color: 'black' }}/>}
        dateStart="2022/4"
      />
      <PfTimelineItem 
        paperProps={{
          title: 'BIPROGY DX HACK 2022', 
          sub_title: 'BIPROGY', 
          text: '人生初のハッカソンに参加しました。テックリードとして、チームに開発環境を共有し、「リアルタイム音声認識による英語禁止ゲーム」を搭載しました。最終的なプロダクトとしては、「リアルタイム音声認識による英語禁止ゲーム」と「アンケート機能」を搭載させたビデオ通話アプリケーションを開発しました。チームメンバーに恵まれたおかげで、前代未聞の3冠【最優秀賞、オーディエンス賞、kintone賞】を受賞できました。'
        }}
        icon={<Keyboard/>}
        dateStart="2022/5"
      />
      <PfTimelineItem 
        paperProps={{
          title: 'Sprinters', 
          sub_title: 'パーソルキャリア', 
          text: 'ユーザーニーズ検証から、プロトタイプ開発まで経験できるインターンシップに参加しました。ユーザーが本当に求める物を提供するためのUI/UXや、ビジネス観点でのサービス開発など、普段ではなかなか携われない部分を経験できました。チームメンバーに恵まれたおかげで、【最優秀賞】を受賞できました。'
        }}
        icon={<Keyboard style={{color: 'black'}}/>}
        dateStart="2022/6"
      />
      <PfTimelineItem 
        paperProps={{
          title: 'KDGHACKS 2022 SUMMER', 
          sub_title: 'KDDI', 
          text: 'KDDIが開催するハッカソンに参加しました。テックリードとして、React×Azure開発環境を作成・共有したり、WBSを引きチームの開発を円滑に進めるようにしました。機能面では「ランダムにイベントを生成するAPI」や「フロントエンドのAPI呼び出し部分」などを開発し、最終的なプロダクトとしては、夏休みの予定をガチャガチャのようにランダムに生成する、「夏休みガチャ予定作成アプリケーション」を開発しました。チームメンバーに恵まれたおかげで、【優秀賞(3位)】を受賞できました。'
        }}
        icon={<Keyboard/>}
        dateStart="2022/7"
      />
      <PfTimelineItem 
        paperProps={{
          title: 'BIPROGY SUMMER INTERNSHIP', 
          sub_title: 'BIPROGY', 
          text: 'BIPROGYが開催するインターンシップに参加しました。フロントエンドを担当し、日々ユーザーが利用するサービスの開発のため、毎日使っていても飽きないデザインを意識しました。メンバーに恵まれたおかげで【最優秀賞】を獲得できました。'
        }}
        icon={<Keyboard style={{color: 'black'}}/>}
        dateStart="2022/8"
      />
      <PfTimelineItem 
        paperProps={{
          title: 'SONY 職業密着型インターンシップ', 
          sub_title: 'SONY', 
          text: '2週間のインターンシップに参加しました。秘密保持契約のため詳細に関しては記載できませんが、非常に勉強になるインターンシップでした。'
        }}
        icon={<Keyboard/>}
        dateStart="2022/9"
      />
      <PfTimelineItem 
        paperProps={{
          title: 'Autumn Hackathon', 
          sub_title: 'DeNA', 
          text: 'DeNA開催のハッカソンに参加しました。フロントエンドを担当しました。短い期間の開発でもアイデアで開発コストを抑えることで、プロダクトを開発できることを身を持って経験しました。メンバーに恵まれたおかげで【優勝】することができました。'
        }}
        icon={<Keyboard style={{color: 'black'}}/>}
        dateStart="2022/9"
      />
      <PfTimelineItem 
        paperProps={{
          title: '夏の陣2022 アプリケーション開発', 
          sub_title: 'Rakuten', 
          text: 'Rakutenのインターンシップに参加しました。ドライブなどの移動中に、その場所特有の話題を提供してくれるwebアプリケーションを開発しました。受賞はできませんでしたが、英語のプレゼン、google react mapsの利用など非常に成長できるインターンでした。'
        }}
        icon={<Keyboard/>}
        dateStart="2022/9"
      />
      <PfTimelineItem 
        paperProps={{
          title: 'サマーインターンシップ', 
          sub_title: 'leverages', 
          text: 'leveragesの2週間のサマーインターンシップに参加しました。Dart/flutterで看護師国家資格アプリの改修を行いました。企画提案->設計->実装->テスト->リリースまで体験できたのは非常に勉強になりました。またフロントの状態をグローバルに保管する構成やインフラ/バックエンドのDDD構成も体感でき成長を感じました。'
        }}
        icon={<Keyboard style={{color: 'black'}}/>}
        dateStart="2022/9/20"
        dateEnd="30"
      />
       <PfTimelineItem 
        paperProps={{
          title: '長期インターンシップ', 
          sub_title: 'pixiv', 
          text: 'pixivのエンジニアは技術力が非常に高かったです。私自身1ヶ月半コードレビューをしていただき、フロントエンドの技術レベルが1つ上がった気がします。人柄も含めて本当にいい会社だと感じたので、興味のある方は是非インターンシップに参加してみてください。'
        }}
        icon={<Keyboard/>}
        dateStart="2022/10"
        dateEnd="11"
      />
       <PfTimelineItem 
        paperProps={{
          title: '長期インターンシップ', 
          sub_title: 'recruit', 
          text: ''
        }}
        icon={<Keyboard style={{color: 'black'}}/>}
        dateStart="2022/11"
        dateEnd="12"
      />
    </Timeline>
  );
}