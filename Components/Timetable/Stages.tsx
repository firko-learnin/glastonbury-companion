import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import EventGrid from './EventGrid';
import schedule from '../../Data/schedule2019.json'; // Will eventually be a fetch request

const stages = schedule.locations.map((stage) => stage.name);
type Props = {
  daySelected: string;
};

type data = {
  end?: string | undefined;
  mbId?: string | undefined;
  name?: string | undefined;
  short?: string | undefined;
  start?: string | undefined;
  url?: string | undefined;
}[];

function filterByStage(stage: string, data: data) {
  const index = data.findIndex((location) => location.name === stage);
  const actData = schedule.locations[index].events;
  return actData;
}

export default function Stages({ daySelected }: Props) {
  const [actData, setActData] = useState(schedule.locations); // To be changed to fetch eventually

  return (
    <View style={styles.gridContainer}>
      {stages.map((stage, index) => (
        <View key={`${stage}${index}`} style={styles.stageRow}>
          <View style={styles.stageNameContainer}>
            <Text style={styles.text}>{stage}</Text>
          </View>
          <EventGrid
            stage={stage}
            stageData={filterByStage(stage, actData)}
            daySelected={daySelected}
          ></EventGrid>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    width: 5000,
    backgroundColor: 'white',
    marginBottom: 100,
  },
  stageRow: {
    marginTop: 0,
    flexDirection: 'row',
    backgroundColor: 'rgb(26, 20, 72)',
    width: 5000,
    alignContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'black',
  },
  text: {
    color: 'white',
    width: 200,
    fontSize: 16,
    textAlign: 'center',
  },
  stageNameContainer: {
    backgroundColor: '#eb7db1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 200,
  },
});
