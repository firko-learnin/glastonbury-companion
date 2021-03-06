import React from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable } from 'react-native';

type Props = {
  daySelected: string;
  setDaySelected: React.Dispatch<React.SetStateAction<string>>;
};

export default function DayPicker({ daySelected, setDaySelected }: Props) {
  function handlePress(day: string) {
    setDaySelected(day);
  }
  return (
    <SafeAreaView style={styles.dayPicker}>
      <Pressable
        style={daySelected === 'Wednesday' ? styles.daySelected : styles.Pressable}
        onPress={() => handlePress('Wednesday')}
      >
        <Text style={styles.text}>Wed</Text>
      </Pressable>

      <Pressable
        style={daySelected === 'Thursday' ? styles.daySelected : styles.Pressable}
        onPress={() => handlePress('Thursday')}
      >
        <Text style={styles.text}>Thu</Text>
      </Pressable>

      <Pressable
        style={daySelected === 'Friday' ? styles.daySelected : styles.Pressable}
        onPress={() => handlePress('Friday')}
      >
        <Text style={styles.text}>Fri</Text>
      </Pressable>

      <Pressable
        style={daySelected === 'Saturday' ? styles.daySelected : styles.Pressable}
        onPress={() => handlePress('Saturday')}
      >
        <Text style={styles.text}>Sat</Text>
      </Pressable>

      <Pressable
        style={daySelected === 'Sunday' ? styles.daySelected : styles.Pressable}
        onPress={() => handlePress('Sunday')}
      >
        <Text style={styles.text}>Sun</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  dayPicker: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgb(233, 59, 129)',
    height: 40,
  },
  Pressable: {
    height: '80%',
    width: '20%',
    justifyContent: 'center',
  },
  daySelected: {
    backgroundColor: 'rgb(0, 172, 240)',
    borderColor: 'black',
    borderWidth: 0.5,
    shadowColor: 'black',
    shadowRadius: 0.5,
    height: '90%',
    width: '20%',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
