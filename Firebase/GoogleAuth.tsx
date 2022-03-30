import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

WebBrowser.maybeCompleteAuthSession();

function GoogleAuth() {
  const { auth } = useContext(AuthContext);

  //Google sign in function
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: Constants!.manifest!.extra!.googleClientId,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      const provider = new GoogleAuthProvider();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Pressable
      aria-label="Sign in with Google"
      onPress={() => {
        promptAsync();
      }}
      style={styles.button}
    >
      <Text style={styles.text}>Sign in</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
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

export default GoogleAuth;
