import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, Platform, LoadingController} from 'ionic-angular';
import {Camera} from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-groupnameadd',
  templateUrl: 'groupnameadd.html',
  providers: [Camera]
})
export class GroupnameaddPage {
  public base64Image: string;
  emojitext: string;
  toggled: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public platform: Platform, private camera: Camera, public loadingCtrl: LoadingController) {
    this.base64Image = "assets/img/camera.svg";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupinfochangePage');
  }

  changepic() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Upload image',
      buttons: [
        {
          text: 'Camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.camera.getPicture({
              destinationType: this.camera.DestinationType.DATA_URL,
              quality: 100,
              targetWidth: 2000,
              targetHeight: 2000,
              allowEdit: true,
              correctOrientation: true,
            }).then((imageData) => {
              // imageData is a base64 encoded string
              this.base64Image = "data:image/jpeg;base64," + imageData;
            }, (err) => {
              console.log(err);
            });
          }
        }, {
          text: 'Gallery',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.camera.getPicture({
              destinationType: this.camera.DestinationType.DATA_URL,
              quality: 100,
              targetWidth: 2000,
              targetHeight: 2000,
              allowEdit: true,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
            }).then((imageData) => {
              // imageData is a base64 encoded string
              this.base64Image = "data:image/jpeg;base64," + imageData;
            }, (err) => {
              console.log(err);
            });
          }
        },
      ]
    });
    actionSheet.present();
  }

  // emoji
  handleSelection(event) {
    if (this.emojitext == undefined) {
      this.emojitext = "";
    }
    this.emojitext = this.emojitext + " " + event.char;
  }

// emoji end
}
