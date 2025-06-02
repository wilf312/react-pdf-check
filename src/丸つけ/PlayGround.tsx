import { Ellipse, StyleSheet, Svg, Text, View } from '@react-pdf/renderer';
import type { FC } from 'react';

// スタイルを定義します
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#F7F7F7',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    border: '1px solid #DDDDDD',
    backgroundColor: '#FFFFFF',
  },
  // Text要素を横に並べるためのFlexコンテナ
  rowContainer: {
    flexDirection: 'row', // 子要素を横方向に配置
    // flexWrap: 'wrap',    // もし1行に収まらない場合に折り返したいなら追加
    // alignItems: 'center', // 縦方向の揃え方 (例: 中央揃え)
    // justifyContent: 'flex-start', // 横方向の揃え方 (例: 左寄せ)
    marginBottom: 10,
    border: '1px dashed lightblue', // レイアウト確認用
    padding: 5,
  },
  // 各Text要素のスタイル (必要に応じて)
  textItem: {
    fontSize: 12,
    marginRight: 5, // 各Text要素の間にスペースを作る
    padding: 2,
    // backgroundColor: 'lightgreen', // レイアウト確認用
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  // 異なるText要素のスタイル例
  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
    color: '#333',
  },
  smallText: {
    fontSize: 10,
    color: '#666',
  },
  // 丸のスタイル
  circle: {
    fill: '#FF6347', // トマト色
    stroke: '#FF4500',
    strokeWidth: 0.5,
  },
  // 絶対配置する丸のコンテナ
  circleContainer: {
    width: 30, // 丸のコンテナの幅
    height: 20, // 丸のコンテナの高さ
    zIndex: 10, // テキストの上に表示されるようにz-indexを高くする
    backgroundColor: 'rgba(255,0,0,0.1)', // デバッグ用に背景色を付けると位置調整がしやすい
  },
  ellipseStyle: {
    // fill: 'green',        // 塗りつぶしの色
    stroke: 'black', // 線の色
    strokeWidth: 3, // 線の太さ
    opacity: 0.7, // 透明度
  },
});

// PDFドキュメントのメインコンポーネント
const PlayGround = () => (
  <View style={styles.section}>
    <Text style={{ fontSize: 18, marginBottom: 15, textAlign: 'center' }}>
      Text要素の横並び表示
    </Text>
    {
      /*
    <Svg viewBox='0 0 40 20' style={[styles.circleContainer, styles.absolute]}>
      <Ellipse cx='20' cy='10' rx='16' ry='8' style={styles.ellipseStyle} />
    </Svg> */
    }
    <丸 />

    <丸
      pos={{
        left: -3,
        top: 3,
      }}
      size={{
        width: 30,
        height: 30,
      }}
      disableAbsolute
    />
    <丸
      pos={{
        left: -3,
        top: 3,
      }}
      disableAbsolute
    />

    <Text style={{ fontSize: 12, marginTop: 20 }}>
      単体で丸が置いてある例
    </Text>
    <Text style={{ fontSize: 12, marginTop: 20 }}>
      `rowContainer` の `flexDirection: 'row'` が、子要素の `Text` を横一列に並べています。 `marginRight`
      を使って、各Text要素の間にスペースを設けています。 `flexWrap: 'wrap'`
      を設定すると、スペースが足りない場合に次の行に折り返されます。
    </Text>
    {/* 例1: 基本的な横並び */}
    <View style={styles.rowContainer}>
      <View style={styles.relative}>
        <Text style={[styles.textItem, styles.relative]}>
          訪問
        </Text>
        <丸
          pos={{
            left: -3,
            top: 3,
          }}
        />
      </View>
      <Text style={[styles.textItem, styles.relative]}>電話</Text>
      <Text style={[styles.textItem, styles.relative]}>来所</Text>
    </View>

    <Text style={{ fontSize: 12, marginTop: 20 }}>
      文字の途中で position relative と absolute を使って、特定の位置にテキストを配置する例です。
    </Text>
    <View style={styles.rowContainer}>
      <Text style={styles.textItem}>名前:</Text>
      <Text style={styles.textItem}>山田太郎</Text>
      <Text style={styles.textItem}>(30歳)</Text>
    </View>
  </View>
);

export default PlayGround;

type 丸Props = {
  disableAbsolute?: boolean; // 絶対配置を無効にするオプション
  pos?: {
    left?: number;
    top?: number;
  };
  size?: {
    width?: number;
    height?: number;
  };
};
const 丸: FC<丸Props> = (props) => {
  const s = StyleSheet.create({
    // 絶対配置する丸のコンテナ
    circleContainer: {
      width: props.size?.width ?? 35, // 丸のコンテナの幅
      height: props.size?.height ?? 20, // 丸のコンテナの高さ
      zIndex: 10, // テキストの上に表示されるようにz-indexを高くする
      backgroundColor: 'rgba(255,0,0,0.1)', // デバッグ用に背景色を付けると位置調整がしやすい
      transform: 'translate(0, -1)',
      // transform: 'scale(1.5, 1.3)', // 中心に配置するための変形
    },
    ellipseStyle: {
      // fill: 'green',        // 塗りつぶしの色
      stroke: 'black', // 線の色
      strokeWidth: 3, // 線の太さ
      opacity: 0.7, // 透明度
    },
    pos: {
      position: props.disableAbsolute ? 'static' : 'absolute',
      left: props.pos?.left ?? 0,
      top: props.pos?.top ?? 0,
    },
  });

  return (
    <Svg viewBox='0 0 50 50' style={[s.circleContainer, s.pos]}>
      <Ellipse cx='22' cy='23' rx='40' ry='23' style={s.ellipseStyle} />
    </Svg>
  );
};
