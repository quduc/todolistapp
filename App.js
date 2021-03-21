import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './Components/ToDoList';

export default function App() {
  return (
    <View>
      <ToDoList />
    </View>
    
  );
}

