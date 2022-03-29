import { StyleSheet, Text, View, Pressable } from 'react-native';
import GoogleAuth from '../Firebase/GoogleAuth';

export default function Home() {
  return (
    <View style={styles.container}>
      <GoogleAuth></GoogleAuth>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(247, 56%, 18%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
