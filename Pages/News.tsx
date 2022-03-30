import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function News() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={{ backgroundColor: 'transparent' }}
        source={{
          html: '<a class="twitter-timeline" data-theme="dark" href="https://twitter.com/secretglasto?ref_src=twsrc%5Etfw">Tweets by secretglasto</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> ',
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginBottom: '10%',
    backgroundColor: 'hsl(247, 56%, 18%)',
  },
});
