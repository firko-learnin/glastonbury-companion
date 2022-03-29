import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import LineUp from './Pages/LineUp';
import News from './Pages/News';
import Map from './Pages/Map';
import Account from './Pages/Account';
import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './Firebase/AuthContext';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';

const Stack = createNativeStackNavigator();

export default function Index() {
  const { user, isLoading } = useContext(AuthContext);
  console.log(isLoading);
  return (
    <NavigationContainer>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <Stack.Navigator
          initialRouteName={user === null ? 'Home' : 'Account'}
          screenOptions={{
            headerTitleAlign: 'center',
            headerLeft: (props) => null,
          }}
        >
          <Stack.Screen
            name="Home"
            component={user ? Account : Home}
            options={{
              title: 'Home',
            }}
          ></Stack.Screen>

          <Stack.Screen
            name="Line-up"
            component={LineUp}
            options={{ title: 'Line-up' }}
          ></Stack.Screen>

          <Stack.Screen name="News" component={News} options={{ title: 'News' }}></Stack.Screen>

          <Stack.Screen name="Map" component={Map} options={{ title: 'Map' }}></Stack.Screen>

          <Stack.Screen
            name="Account"
            component={Account}
            options={{ title: 'Account' }}
          ></Stack.Screen>
        </Stack.Navigator>
      )}
      <StatusBar style="auto" />
      <Navbar></Navbar>
    </NavigationContainer>
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
