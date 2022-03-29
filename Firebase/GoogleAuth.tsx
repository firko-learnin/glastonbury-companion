import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

function GoogleAuth() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  //Google sign in function
  async function handleGoogleSignIn() {
    const authentication = getAuth();
    try {
      await signInWithPopup(authentication, provider).then((response) => {
        console.log(response);
      });
    } catch (error: any) {
      console.log(error!.message);
    }
  }

  return (
    <Pressable aria-label="Sign in with Google" onPress={handleGoogleSignIn} style={styles.button}>
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
