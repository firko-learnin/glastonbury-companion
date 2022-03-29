import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '7%',
    backgroundColor: 'hsl(0, 0%, 95%)',
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  nav1: {
    height: '100%',
    alignItems: 'center',
    flex: 1,
    textAlignVertical: 'center',
    backgroundColor: 'hsl(197, 100%, 47%)',
    justifyContent: 'center',
    color: 'white',
  },
  nav2: {
    height: '100%',
    alignItems: 'center',
    flex: 1,
    textAlignVertical: 'center',
    backgroundColor: 'hsl(56, 100%, 44%)',
    justifyContent: 'center',
    color: 'white',
  },
  nav3: {
    height: '100%',
    alignItems: 'center',
    flex: 1,
    textAlignVertical: 'center',
    backgroundColor: 'hsl(7, 83%, 41%)',
    justifyContent: 'center',
    color: 'white',
  },
  nav4: {
    height: '100%',
    alignItems: 'center',
    flex: 1,
    textAlignVertical: 'center',
    backgroundColor: 'hsl(145, 100%, 27%)',
    justifyContent: 'center',
    color: 'white',
  },
  text: {
    color: 'white',
  },
});

export default function Navbar() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <Pressable style={styles.nav1} onPress={() => navigation.navigate('Line-up')}>
        <Text style={styles.text}>Line-up</Text>
      </Pressable>

      <Pressable style={styles.nav2} onPress={() => navigation.navigate('News')}>
        <Text style={styles.text}>News</Text>
      </Pressable>

      <Pressable style={styles.nav3} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.text}>Map</Text>
      </Pressable>

      <Pressable style={styles.nav4} onPress={() => navigation.navigate('Account')}>
        <Text style={styles.text}>Account</Text>
      </Pressable>
    </View>
  );
}
