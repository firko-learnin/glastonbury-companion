import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import schedule from '../Data/schedule2019.json';
import Timetable from '../Components/Timetable/Timetable';

function extractPyramid() {
  const index = schedule.locations.findIndex((location) => location.name === 'Pyramid Stage');
  const data = schedule.locations[index].events;
  return data;
}

export default function LineUp() {
  const data = extractPyramid();
  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pyramid Stage</Text>
      {/* <ScrollView contentContainerStyle={styles.scrollView}>
        {data.map((item, index) => (
          <Text key={index} style={styles.text}>
            {'\u2B24' + ' '}
            {item.name} - {item.start}
          </Text>
        ))}
      </ScrollView> */}
      <Timetable></Timetable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(247, 56%, 18%)',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: '10%',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
  },
  text: {
    color: 'white',
  },
});
