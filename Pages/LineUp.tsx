import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import schedule from '../Data/schedule2019.json';
import Navbar from '../Components/Navbar/Navbar';

function extractPyramid() {
  const index = schedule.locations.findIndex((location) => location.name === 'Pyramid Stage');
  const data = schedule.locations[index].events;
  return data;
}

export default function LineUp() {
  const data = extractPyramid();
  console.log(data[0].name);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Line-up:</Text>
      {data.map((item, index) => (
        <Text key={index} style={styles.text}>
          {'\u2B24' + ' '}
          {item.name} - {item.start}
        </Text>
      ))}
      {data.map((item, index) => (
        <Text key={index} style={styles.text}>
          {'\u2B24' + ' '}
          {item.name} - {item.start}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    marginBottom: '7%',
    paddingBottom: '7%',
    backgroundColor: 'hsl(247, 56%, 18%)',
    alignItems: 'center',
    overflow: 'scroll',
  },
  title: {
    color: 'white',
    fontSize: 40,
  },
  text: {
    color: 'white',
  },
});
