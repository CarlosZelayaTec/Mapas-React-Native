import React from "react";
import { StyleSheet, View, Text, Button, FlatList, Dimensions } from "react-native";

export default ({ onPress, data }) => {
    return(
        <>
            <View style={styles.listas}>
                <FlatList 
                    data={data.map(x => x.name)}
                    renderItem={({item}) => {
                        return(
                            <View style={styles.puntos}>
                                <Text style={styles.texto}>{item}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={item => item}                
                />
                
            </View>
            <Button title='Cerrar' onPress={onPress}/>
        </>
    )
}

const styles = StyleSheet.create({
    listas: {
        height: Dimensions.get('screen').height - 200,
        width: Dimensions.get('window').width - 120,
    },
    texto: {
        fontSize: 20,
        marginBottom: 10,
        height: 32,
    },
    puntos: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        // backgroundColor: 'red',
        margin: 10,
    },
})