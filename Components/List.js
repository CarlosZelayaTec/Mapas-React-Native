import React from "react";
import { StyleSheet, View, Text, Button, FlatList, Dimensions } from "react-native";

export default ({ onPress, data }) => {
    return(
        <>
            <View style={styles.listas}>
                <FlatList 
                    data={data.map(x => x.name)}
                    renderItem={({item}) => <Text style={styles.texto}>{item}</Text>}
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
        fontSize: 30,
        textAlign: 'center',
        padding: 20,
    },
})