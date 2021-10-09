import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  imagePath: string;
  base64Image: string;
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50,
  };

  constructor(
    private camera: Camera,
    private file: File,
    public actionSheetController: ActionSheetController,
  ) {}

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.showImage(imageData);
      },
      (err) => {
        alert(`Ocorreu um erro: ${err}`);
      }
    );
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Deseja selecionar uma foto da galeria ou tirar uma nova?',
      buttons: [
        {
          text: 'Selecionar da galeria',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          },
        },
        {
          text: 'Usar a câmera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  showImage = (imagePath: string): void => {
    this.isLoading = true;
    const copyPath = imagePath;
    const splitPath = copyPath.split('/');
    const imageName = splitPath[splitPath.length - 1];
    const filePath = imagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(
      (base64) => {
        this.imagePath = base64;
        this.isLoading = false;
      },
      (error) => {
        alert(`Aconteceu um erro na apresentação da imagem ${error}`);
        this.isLoading = false;
      }
    );
  };
}
