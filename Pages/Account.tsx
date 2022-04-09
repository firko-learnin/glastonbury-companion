import React, { useContext } from 'react';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import { Auth, getAuth, signOut } from 'firebase/auth';
import { AuthContext } from '../Firebase/AuthContext';

const auth = getAuth();

export default function HomeScreen() {
  const { user } = useContext(AuthContext);
  console.log(user);
  async function handleSignOut(auth: Auth) {
    try {
      await signOut(auth).then((response) => {
        return response;
      });
    } catch (error: any) {
      console.log(error!.message);
      return error;
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {user.displayName}</Text>
      <Pressable
        aria-label="Sign out"
        onPress={() => handleSignOut(auth)}
        // title="Sign out"
        style={styles.button}
      >
        <Text style={styles.text}>Sign out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e93b81',
    paddingTop: 50,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff',
  },
  button: {
    height: '7%',
    width: '40%',
    borderRadius: 5,
    alignItems: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'hsl(197, 100%, 47%)',
    justifyContent: 'center',
    color: 'white',
  },
});
