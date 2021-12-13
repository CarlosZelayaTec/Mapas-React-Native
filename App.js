import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Map, Modal, Panel } from './Components';

export default function App() {

  const handLongPress = ({ nativeEvent }) => {
    console.log(nativeEvent);
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handLongPress} />
       <Modal />   
        <Panel />
      <StatusBar style="auto" />
  
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
