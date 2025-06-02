import { PDFViewer } from '@react-pdf/renderer';

import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import { GlobalFontStyle } from '../GlobalFontStyle/GlobalFontStyle';
import _PlayGround from './PlayGround';

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
      <_PlayGround />
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
