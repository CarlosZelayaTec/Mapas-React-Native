import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';
import MapView from 'react-native-maps';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
        <MapView style={styles.mapa}/>
        <Modal
          animationType='slide'
          transparent={true}
          visible={true}
        >
          <View style={styles.center}>
            <View style={styles.contenido}>
              <Text style={styles.texto}>Hola Tita</Text>
              <Text style={styles.texto}>Hola Carlangas</Text>
            </View>
          </View>
        </Modal>
      <StatusBar style="auto" />
  
      </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  contenido: {
    flex: 1,
    margin: 25,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  mapa: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
