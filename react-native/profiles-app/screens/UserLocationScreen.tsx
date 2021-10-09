import * as React from 'react';
import { StyleSheet, PermissionsAndroid } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const initialRegion = {
    latitude: 15,
    longitude: -87,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

const UserLocationScreen = () => {
    const [initialLocation] = React.useState(initialRegion);
    const mapRef = React.useRef({} as MapView);

    const requestLocationPermission = async (): Promise<void> => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

        (granted === PermissionsAndroid.RESULTS.GRANTED)
            ? getUserPosition()
            : alert('Permissão negada');
    }

    const getUserPosition = (): void =>
        Geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            mapRef.current!.animateToRegion({ ...initialLocation, latitude, longitude })
            console.log(coords)
        }, err => console.log(err),
            {
                enableHighAccuracy: false,
                timeout: 1000,
            });

    return (
        <MapView
            style={styles.map}
            initialRegion={initialLocation}
            onMapReady={requestLocationPermission}
            ref={mapRef}
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