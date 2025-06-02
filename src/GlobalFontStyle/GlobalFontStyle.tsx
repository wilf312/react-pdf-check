import { Font, StyleSheet } from '@react-pdf/renderer';

/**
 * 改行設定の修正
 * 行末で連続した文字がある場合、英語の場合 -を入れるが日本語では不要なので文字を入れないように修正する
 * @see https://qiita.com/YSU250/items/ef4286255ec7b017420d
 */
Font.registerHyphenationCallback((word) => Array.from(word).flatMap((char) => [char, '']));

/**
 * 日本語fontへの対応
 * これを入れないと日本語が表示できない
 * 1. google fontsからNotoSansJPをダウンロード
 * 2. publicに配置
 * 3. フォントの設定をする
 * @see https://zenn.dev/ksk2/articles/c0cf38b8ba61ec#%E6%97%A5%E6%9C%AC%E8%AA%9E%E6%96%87%E5%AD%97%E5%8C%96%E3%81%91%E5%95%8F%E9%A1%8C
 */
Font.register({
  family: 'NotoSansJP',
  fonts: [
    {
      src: '/font/Noto_Sans_JP/NotoSansJP-VariableFont_wght.ttf',
    },
    {
      src: '/font/Noto_Sans_JP/static/NotoSansJP-Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

export const GlobalFontStyle = StyleSheet.create({
  page: {
    fontFamily: 'NotoSansJP',
  },
});
