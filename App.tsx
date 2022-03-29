import { StyleSheet } from 'react-native';
import React from 'react';
import { AuthProvider } from './Firebase/AuthContext';
import Index from './Index';

export default function App() {
  return (
    <AuthProvider>
      <Index></Index>
    </AuthProvider>
  );
}
