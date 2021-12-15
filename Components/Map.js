import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

export default ({ onLongPress, puntos, viewPointFilter }) => {
    return(
        <MapView 
            style={styles.mapa}
            onLongPress={onLongPress}
        >
            {viewPointFilter && puntos.map(x =>
                <Marker 
                    key={x.name}
                    coordinate={x.coordinate}
                    title={x.name}
                />)}
        </MapView>
    )
}

const styles = StyleSheet.create({
    mapa: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 150,
      },
})