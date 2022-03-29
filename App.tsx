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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}></Stack.Screen>

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
