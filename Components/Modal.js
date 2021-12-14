import React, { Children } from 'react';
import { StyleSheet, Modal, View, Text } from 'react-native';

export default ( { children, visible  } ) => {
    return(
        <Modal
          animationType='slide'
          transparent={true}
          visible={visible}
        >
          <View style={styles.center}>
            <View style={styles.contenido}>
                { children }
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