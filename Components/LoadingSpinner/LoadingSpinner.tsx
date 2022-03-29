import React from 'react';
import { ActivityIndicator, StyleSheet, Image, View } from 'react-native';
import glastoLogo from '../../assets/glastoLogo.png';

export default function LoadingSpinner() {
  return (
    <View style={[styles.container]}>
      <Image style={styles.logo} source={glastoLogo}></Image>
      <ActivityIndicator size="large" color="#e93b81" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'hsl(247, 56%, 18%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    zIndex: 2,
    width: '250px',
    height: '250px',
  },
});
