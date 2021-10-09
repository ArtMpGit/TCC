import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProfileCard from '../components/ProfileCard';

import { Text, View } from '../components/Themed';

const ProfilesListScreen = () => {
  const [profilesList, setProfilesList] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users', { params: { per_page: 100 } }).then(({ data }) => {
      setProfilesList(data);
    }).catch(console.error)
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={profilesList}
        renderItem={({ item, index }) => <ProfileCard user={item} key={`${item.login}${index}`} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    ...StyleSheet.absoluteFillObject
  },
});

export default ProfilesListScreen;
