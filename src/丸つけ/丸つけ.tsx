import { Circle, Svg, Text, View } from '@react-pdf/renderer';

import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  inline: {
    display: 'inline',
  },

  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
  },
  section: {
    margin: 10,
    padding: 10,
    border: '1px solid #DDDDDD',
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 1.5,
    marginBottom: 10,
    // 親となるViewにposition: relativeを設定すると、子要素のabsolute配置の基準になります。
    // react-pdfのViewはデフォルトでflexコンテナのように振る舞うため、通常は明示的なrelativeは不要ですが、
    // 明示することで意図がより明確になります。
    position: 'relative',
    paddingLeft: 20, // 左側に丸のスペースを空ける
  },
  // 絶対配置する丸のコンテナ
  circleContainer: {
    position: 'absolute',
    top: 5, // 段落のテキスト行のどこに配置するかを調整
    left: 20, // 段落の左端からの位置
    width: 15, // 丸のコンテナの幅
    height: 15, // 丸のコンテナの高さ
    zIndex: 10, // テキストの上に表示されるようにz-indexを高くする
    // backgroundColor: 'rgba(255,0,0,0.1)' // デバッグ用に背景色を付けると位置調整がしやすい
  },
  // SVG自体は親のcircleContainerのサイズに合わせる
  absoluteSvg: {
    width: '100%',
    height: '100%',
  },
  // 丸のスタイル
  circle: {
    fill: '#FF6347', // トマト色
    stroke: '#FF4500',
    strokeWidth: 0.5,
  },
  highlightText: {
    positioon: 'relative',
    backgroundColor: 'yellow',
  },
});

export const 丸つけ = () => (
  <View style={styles.section}>
    <Text style={{ fontSize: 18, marginBottom: 20 }} h={'1'}>
      文章中にSVGの丸を絶対配置する例
    </Text>

    <View style={styles.paragraph}>
      {/* 絶対配置する丸のコンテナ */}
      <View style={styles.circleContainer}>
        <Svg viewBox='0 0 100 100' style={styles.absoluteSvg}>
          {/* cx, cy は親のSvgのviewBox内での相対座標 */}
          <Circle cx='50' cy='50' r='45' style={styles.circle} />
        </Svg>
      </View>
      <View>
        <Text style={{ display: 'inline' }}>
          これは、React-PDFを使用し
        </Text>
      </View>
      <Text>
        て作成されたサンプルのPDFドキュメントです。 特に、<View>
          <Text
            style={styles.highlightText}
          >
            このテキスト
          </Text>
        </View>
        の横にSVGの丸を絶対配置するデモンストレーションを行っています。
        絶対配置は、親要素に対する相対的な位置で要素を配置する際に非常に役立ちます。
        例えば、箇条書きのアイコンや、注釈、強調表示などに利用できます。
        この段落は、左側に少しパディングを設け、そこに丸が収まるようにしています。
      </Text>
    </View>
  </View>
);
