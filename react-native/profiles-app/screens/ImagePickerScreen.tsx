import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View, Button, Image } from 'react-native';
import { CameraOptions } from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const TabOneScreen = () => {
  const [imageUri, setImageUri] = React.useState({});

  const openCamera = (openCamera: boolean): void => {
    const selectionMethod = openCamera ? launchCamera : launchImageLibrary;
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: true
    }

    selectionMethod(options, ({ didCancel, errorCode, errorMessage, assets }) => {
      if (didCancel || errorCode)
        alert(errorCode ? `Código de erro: ${errorCode}\n${errorMessage}` : 'Seleção cancelada');
      else {
        const imageBase64 = (assets!)[0]?.base64;
        if (imageBase64)
          setImageUri({ uri: `data:image/jpeg;base64,${imageBase64}` });
      }
    });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={Object.keys(imageUri).length > 0 ? imageUri : require('../assets/images/placeholder-image.jpg')} />
      <View style={styles.buttonsContainer}>
        <Button title={'Abrir câmera'} onPress={() => openCamera(true)} />
        <Button title={'Abrir galeria'} onPress={() => openCamera(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 480
  },
  buttonsContainer: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 16,
  }
});

export default TabOneScreen;
