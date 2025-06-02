import { PDFViewer } from '@react-pdf/renderer';

import { Document, Page, StyleSheet, View } from '@react-pdf/renderer';
import { GlobalFontStyle } from '../GlobalFontStyle/GlobalFontStyle';
import { 丸つけ } from './丸つけ';

const styles = StyleSheet.create({
  page: {
    ...GlobalFontStyle.page,
    flexDirection: 'column',
  },
  section: {
    margin: 10,
    padding: 15,
    flexGrow: 1,
  },
});

type Props = {
  金額: string;
  贈与者住所: string;
  贈与者氏名: string;
  受贈者住所: string;
  受贈者氏名: string;
};

const MyDocument: React.FC<Partial<Props>> = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <丸つけ />
      </View>
    </Page>
  </Document>
);

const PlayGround: React.FC<Partial<Props>> = (props) => <MyDocument {...props} />;

export default {
  component: PlayGround, // 表示するのはドキュメントコンポーネント自体
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

const TemplateViewer = (args) => (
  // PDFViewer には幅と高さを指定する必要があります
  <PDFViewer style={{ width: '100%', height: '600px' }}>
    <PlayGround {...args} />
  </PDFViewer>
);

export const ViewerDefault = TemplateViewer.bind({});
ViewerDefault.args = {
  金額: '3600000',
  贈与者住所: '北海道札幌市中央区南1条西1丁目1-1',
  贈与者氏名: '田中太郎',
  受贈者住所: '北海道札幌市中央区南1条西1丁目1-1;',
  受贈者氏名: '田中花子',
};

/*


import React from 'react';
import {    Svg, Circle } from '@react-pdf/renderer';

// スタイルを定義します
const svg = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    border: '1px solid #CCCCCC',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  // SVGコンテナのスタイル（必要に応じて）
  svgContainer: {
    width: '60',
    height: 30, // SVGの描画領域を確保
    border: '1px dashed blue', // 描画領域を可視化するため
    // alignItems: 'center', // SVGを中央に配置する場合
    // justifyContent: 'center', // SVGを中央に配置する場合
  },
  // 丸のスタイル（Presentation Attributesとして直接渡すことも可能）
  circleStyle: {
    // fill: 'red', // 塗りつぶしの色
    stroke: 'black', // 線の色
    strokeWidth: 2, // 線の太さ
    opacity: 0.8, // 透明度
  },
  ellipseStyle: {
    // fill: 'green',        // 塗りつぶしの色
    stroke: 'black',  // 線の色
    strokeWidth: 3,       // 線の太さ
    opacity: 0.7,         // 透明度
  }
});

// 丸を描くコンポーネント



const CircleComponent = () => (
  <View style={svg.svgContainer}>
    // Svgコンテナ。viewBoxはSVGの描画領域と座標系を定義します。
    <Svg viewBox="0 0 20 20" style={{backgroundColor: 'red'}}>
        // <Circle /> 要素
        // cx, cy: 円の中心のX, Y座標
        // r: 半径
        // style: Presentation Attributes または style オブジェクトでスタイルを指定

      //   <Circle
      //   cx="50" // viewBox内での中心X座標
      //   cy="50" // viewBox内での中心Y座標
      //   r="40"  // 半径
      //   style={svg.circleStyle} // StyleSheetで定義したスタイルを適用
      //   // または、以下のように直接propsとして渡すことも可能
      //   // fill="red"
      //   // stroke="black"
      //   // strokeWidth={2}
      // />
      <Ellipse
        cx="8"  // viewBox内での中心X座標
        cy="10"  // viewBox内での中心Y座標
        rx="15"  // X軸方向の半径 (幅の半分)
        ry="8"  // Y軸方向の半径 (高さの半分)
        style={svg.ellipseStyle}
      />
    </Svg>
  </View>
);
*/
