import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './Components';

export default function App() {

  const [puntos, setPuntos] = useState([]);
  const [puntosTemp, setPuntoTemp] = useState([]);
  const [nombre, setNombre] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [ visibilityFilter, setVisibilityFilter ] = useState('new_point');

    // Abre el modal y y guarda las coordenadas en un estado temporal
  const handLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_point');
    setPuntoTemp(nativeEvent.coordinate);
    setVisibility(true);
  }

    // Guarda el nombre del Punto en un estado
  const handleChangeText = text =>{
    setNombre(text)
  }

    // Al presionar el boton 'aceptar' guarda el nombre con las coordenadas en las 
    // cuales presionamos sobre el mapa en un estado, cierra el modal y resetea el estado del nombre
  const handleSubmit = () => {
    const newPunto = { coordinate: puntosTemp, name: nombre };
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
    setNombre('');
  }

  const handleLista = () =>{
    setVisibilityFilter('all_Pointer');
    setVisibility(true);
  }
   
  return (
    <View style={styles.container}>
      <Map onLongPress={handLongPress} />
       <Modal visible={visibility}>
         {visibilityFilter === 'new_point'
         ?  
          <> 
              <Input title="Nombre" placeholder="Nombre del punto" onChangeText={ handleChangeText } />
                <Button title="Aceptar" onPress={handleSubmit} />
           </>
           : <List data={ puntos } />
} 
       </Modal>
        <Panel onPressLeft={handleLista} textLeft={'title'}/>
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
