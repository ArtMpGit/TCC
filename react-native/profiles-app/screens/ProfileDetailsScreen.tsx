import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProfileDetailsParamList } from '../interfaces/profile-details-param-list.interface';
import axios from 'axios';
import { User } from '../interfaces/user.interface';

const ProfileDetailsScreen = (props: any) => {
   const [user, setUser] = React.useState({} as User);
   const { name } = useRoute().params as ProfileDetailsParamList;
   const navigation = useNavigation();

   React.useEffect(() => {
      navigation.setOptions({ title: name })
      axios.get(`https://api.github.com/users/${name}`).then(({ data }) => {
         setUser(data);
      });
   }, [])

   return (
      <View style={styles.container}>
         <Image style={styles.userImage} source={{ uri: user.avatar_url }} />
         <View>
            <View style={styles.textContainer}>
               <Text style={styles.infoKey}>Nome:</Text>
               <Text style={styles.info}>{user.login}</Text>
            </View>
            <View style={styles.textContainer}>
               <Text style={styles.infoKey}>Qtd. seguidores:</Text>
               <Text style={styles.info}>{user.followers}</Text>
            </View>
            <View style={styles.textContainer}>
               <Text style={styles.infoKey}>Seguindo:</Text>
               <Text style={styles.info}>{user.following}</Text>
            </View>
            <View style={styles.textContainer}>
               <Text style={styles.infoKey}>Qtd de repositórios:</Text>
               <Text style={styles.info}>{user.public_repos}</Text>
            </View>

            {
               user?.location ?
                  <View style={styles.textContainer}>
                     <Text style={styles.infoKey}>Localidade:</Text>
                     <Text style={styles.info}>{user.location}</Text>
                  </View> : null
            }

            {
               user?.bio ?
                  <View style={styles.textContainer}>
                     <Text style={styles.infoKey}>Bio:</Text>
                     <Text style={styles.info}>{user.bio}</Text>
                  </View> : null
            }

         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {

   },
   userImage: {
      width: '100%',
      height: 440
   },
   textContainer: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 12,
      paddingHorizontal: 12
   },
   info: {
      textTransform: "capitalize",
      fontSize: 16
   },
   infoKey: {
      color: '#FE5376',
      fontWeight: "700",
      fontSize: 16
   }
});

export default ProfileDetailsScreen;