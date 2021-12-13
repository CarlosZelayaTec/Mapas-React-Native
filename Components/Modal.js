import React from 'react';
import { StyleSheet, Modal, View, Text } from 'react-native';

export default () => {
    return(
        <Modal
          animationType='slide'
          transparent={true}
          visible={false}
        >
          <View style={styles.center}>
            <View style={styles.contenido}>
              <Text style={styles.textoModal}>Hola Carlangas</Text>
            </View>
          </View>
        </Modal>
    )
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        }
        
      },
      textoModal: {
        fontSize: 30,
        fontWeight: 'bold',
      },
})