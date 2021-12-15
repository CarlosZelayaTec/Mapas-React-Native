import React from "react";
import { StyleSheet, Button, View } from "react-native";

export default ({ onPressLeft, textLeft, viewPoints }) => {
    return(
        <View style={styles.panel}>
            <View style={styles.botonAndroid}>
                <Button title={ textLeft } onPress={onPressLeft}/> 
            </View>
            <Button title="Mostrar/Ocultar" onPress={viewPoints} /> 
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botonAndroid: {
        marginRight: 15,
    }
})