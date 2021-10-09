import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, PermissionsAndroid } from 'react-native';

import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { Text, View } from '../components/Themed';

const UserLocationScreen = () => {
    const [userLocation, setUserLocation] = useState();

    useEffect(() => {
        requestLocationPermission();
    }, []);

    const requestLocationPermission = async (): Promise<void> => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Permissão para acessar sua localização",
                message: "Permite que a aplicação acesse sua localização atual?",
                buttonNeutral: "Pergunte-me depois",
                buttonNegative: "Cancelar",
                buttonPositive: "OK"
            }
        );

        (granted === PermissionsAndroid.RESULTS.GRANTED)
            ? getUserPosition()
            : alert('Permissão negada');
    }

    const getUserPosition = (): void =>
        Geolocation.getCurrentPosition((response) => console.log(response), err => console.log(err),
            {
                enableHighAccuracy: false,
                timeout: 50000,
                maximumAge: 10000
            });

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});

export default UserLocationScreen;