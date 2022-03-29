import { StyleSheet, Text, View } from 'react-native';

export default function LineUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Line-up</Text>
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
