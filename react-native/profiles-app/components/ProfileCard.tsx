import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableNativeFeedback } from 'react-native';

const ProfileCard = (props: any) => {

    const navigation = useNavigation();

    const viewUserDetails = () => {
        
        navigation.navigate('ProfileDetails', { name: props.user.login });
    }

    return (
        <TouchableNativeFeedback onPress={viewUserDetails}>
            <View style={[styles.mainInfoContainer, styles.shadowProp]}>
                <Image style={styles.image} source={{ uri: props.user.avatar_url }} />
                <View style={styles.cardtextContainer}>
                    <Text style={styles.userName}>{props.user.login}</Text>
                    <Text style={styles.detailsText}>Toque para ver mais detalhes</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 50
    },
    cardtextContainer: {
        width: '80%'
    },
    shadowProp: {
        elevation: 20,
        shadowColor: '#52006A',
    },
    userName: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10
    },
    detailsText: {
        textAlign: "center",
    },
    mainInfoContainer: {
        display: "flex",
        alignSelf: "center",
        width: '95%',
        backgroundColor: 'white',
        flexDirection: "row",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginVertical: 10,
    }
});

export default ProfileCard;