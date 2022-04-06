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

type Dates = {
  Wednesday: dayjs.Dayjs;
  Thursday: dayjs.Dayjs;
  Friday: string;
  Saturday: string;
  Sunday: string;
};

//2019 festival dates
const dates = {
  Wednesday: '2019-06-26 00:00',
  Thursday: '2019-06-27 00:00',
  Friday: '2019-06-28 00:00',
  Saturday: '2019-06-29 00:00',
  Sunday: '2019-06-30 00:00',
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
  }[],
  day: string
) {
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
  //Declare minimum start time for acts spanning midnight the previous day
  const minStart = dayjs(dates[day as keyof Dates])
    .set('hour', 0)
    .set('minute', 0);
  //Declare maximum end time for acts spanning midnight the following day
  const maxEnd = dayjs(minStart, 'YYYY-MM-DD').add(1, 'day');
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
    const runTime = Math.min(end.diff(start), maxEnd.diff(start)) / 60000;
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
  // let total = 0;
  // for (let i = 0; i < slots.length; i++) {
  //   total += slots[i].runTime!;
  //   // console.log(total);
  // }
  return slots;
}

export default function EventGrid({ stage, stageData, daySelected }: Props) {
  // Filter down the data passed in for the stage to the user selected date
  const dateFilteredActs = filterByDay(stageData, daySelected);

  const slots = generateSlots(dateFilteredActs, daySelected);

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
      {slots.map((slot, index) =>
        slot.runTime! > 0 ? (
          <View
            key={`${stage}${index}`}
            style={{
              flex: slot.runTime,
              height: 100,
              alignContent: 'center',
              justifyContent: 'center',
              backgroundColor: slot.name === 'Blank space' ? 'white' : 'rgb(26, 20, 72)',
              borderColor: 'white',
              borderWidth: 0.5,
              overflow: 'hidden',
            }}
          >
            {slot.name === 'Blank space' ? (
              <Text style={styles.emptySlotText}>{stage}</Text>
            ) : (
              <Text style={styles.text}>
                {slot.name}
                {'\n'} {'\n'} {'\n'}
                {dayjs(slot.start).format('HH:mm')} - {dayjs(slot.end).format('HH:mm')}
              </Text>
            )}
          </View>
        ) : null
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  emptySlotText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
  },
});
