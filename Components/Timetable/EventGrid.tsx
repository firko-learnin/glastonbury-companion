import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import dayjs from 'dayjs';

//Stage name passed in as a prop
type Props = {
  stage: string;
  stageData: {
    end?: string | undefined;
    mbId?: string | undefined;
    name?: string | undefined;
    short?: string | undefined;
    start: string;
    url?: string | undefined;
  }[];
  daySelected: string;
};

function filterByDay(actData: Props['stageData'], day: String) {
  // Convert the start date into a day of the week and return filtered data
  return actData.filter((act) => dayjs(act.start).format('dddd') === day);
}

function generateSlots(
  dateFilteredActs: {
    end?: string | undefined;
    mbId?: string | undefined;
    name?: string | undefined;
    short?: string | undefined;
    start: string;
    url?: string | undefined;
    timeBefore?: number;
    runTime?: number;
  }[]
) {
  console.log(dateFilteredActs);
  //Declare an array to contain the times defined by flex size
  const slots: {
    end?: string | undefined;
    mbId?: string | undefined;
    name?: string | undefined;
    short?: string | undefined;
    start?: string | undefined;
    url?: string | undefined;
    timeBefore?: number | undefined;
    runTime?: number;
  }[] = [];
  dateFilteredActs.forEach((act, index) => {
    //Calculate the time before the event (assume items are in time order)
    let date1;
    //If first event calculate the time from midnight
    if (index === 0) date1 = dayjs(act.start).set('hour', 0).set('minute', 0);
    //Otherwise calculate the time since the previous event
    if (index !== 0) date1 = dayjs(dateFilteredActs[index - 1].end);
    const date2 = dayjs(act.start);
    //Divide by 60000 to convert ms to minutes
    const timeBefore = date2.diff(date1) / 60000;
    act.timeBefore = timeBefore;
    slots.push({ runTime: timeBefore, name: 'Blank space' });
    //Calculate runtime
    const start = dayjs(act.start);
    const end = dayjs(act.end);
    const runTime = end.diff(start) / 60000;
    act.runTime = runTime;
    slots.push(act);
    //Account for time after final act
    if (index === dateFilteredActs.length - 1) {
      const midnight = dayjs(dateFilteredActs[0].start).set('hour', 0).set('minute', 0);
      const nextDay = dayjs(midnight.add(1, 'day'));
      const finalTime = nextDay.diff(end) / 60000;
      slots.push({ runTime: finalTime, name: 'Blank space' });
    }
  });
  let total = 0;
  for (let i = 0; i < slots.length; i++) {
    total += slots[i].runTime!;
    console.log(total);
  }
  return slots;
}

export default function EventGrid({ stage, stageData, daySelected }: Props) {
  // Filter down the data passed in for the stage to the user selected date
  const dateFilteredActs = filterByDay(stageData, daySelected);

  const slots = generateSlots(dateFilteredActs);
  console.log(slots);

  //Generate an array of 25 hours to map through to create a grid
  const getHours = (): number[] => {
    let grid = [];
    for (let i = 0; i < 25; i++) {
      grid.push(i);
    }
    return grid;
  };
  const hours: number[] = getHours();

  //Return a "grid" with a width of 2400, total width 2500 including the stage names, use this to calculate event "slots"
  return (
    <>
      {/* {hours.map((time, index) => (
        <View key={`${stage}${time}${index}`} style={styles.container}>
          <Text style={styles.text}>
            {stage} - {time}
          </Text>
        </View>
      ))} */}
      {slots.map((slot, index) => (
        <View
          key={`${stage}${index}`}
          style={{
            flex: slot.runTime,
            height: '100%',
            backgroundColor: slot.name === 'Blank space' ? 'white' : 'blue',
            borderColor: 'red',
            borderWidth: 1,
          }}
        >
          {slot.name === 'Blank space' ? null : (
            <Text style={styles.text}>
              {slot.name}
              {'\n'} {'\n'} {'\n'}
              {dayjs(slot.start).format('HH:mm')} - {dayjs(slot.end).format('HH:mm')}
            </Text>
          )}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Flex 1 will change depending on act duration
    height: '100%',
    backgroundColor: 'blue',
    borderColor: 'red',
    borderWidth: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
