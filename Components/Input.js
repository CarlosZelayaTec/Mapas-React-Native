import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default ({ title, ...rest }) => {
    return(
        <View style={styles.wrapper}>
            <Text style={styles.texto}>{ title }</Text>
            <TextInput { ...rest } style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        height: '40%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        width: '80%',
        marginTop: 15,
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    }
})