import React from "react";
import { StyleSheet, View, Text, Button, FlatList, Dimensions, Platform } from "react-native";

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
        marginBottom: 10,
        height: 35,
        color: '#000',
        textAlign: 'center',
        padding: 5,
        ...Platform.select({
            ios: {
                fontSize: 25,
            },
            android: {
                height: 40,
                fontSize: 18,
            },
            default: { 
                color: '#000', 
            }
        })
    },
    puntos: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        // backgroundColor: 'red',
        margin: 10,
    },
})