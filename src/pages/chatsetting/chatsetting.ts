import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ActionSheetController,Platform} from 'ionic-angular';
import {Camera} from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-chatsetting',
  templateUrl: 'chatsetting.html',
  providers: [Camera]
})
export class ChatsettingPage {
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController,private camera: Camera,public platform: Platform,) {
    this.base64Image = "assets/img/camera.svg";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsettingPage');
  }

  language() {
    let alert = this.alertCtrl.create({
      cssClass: "settingalert"
    });
    alert.setTitle('Language');

    alert.addInput({
      type: 'radio',
      label: 'English',
      value: 'english',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'हिंदी',
      value: 'hindi',
    });
    alert.addInput({
      type: 'radio',
      label: 'বাংলা',
      value: 'bengali',
    });
    alert.addInput({
      type: 'radio',
      label: 'Français',
      value: 'french',
    });
    alert.addInput({
      type: 'radio',
      label: 'தமிழ்',
      value: 'tamil',
    });
    alert.addInput({
      type: 'radio',
      label: 'اردو',
      value: 'urdu',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });

    alert.present();
  }

  profilepicture() {
    let alert = this.alertCtrl.create({
      cssClass: "settingalert"
    });
    alert.setTitle('Font Size');

    alert.addInput({
      type: 'radio',
      label: 'Big',
      value: 'big',
    });
    alert.addInput({
      type: 'radio',
      label: 'Normal',
      value: 'normal',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Small',
      value: 'small',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });

    alert.present();
  }

  about() {
    let alert = this.alertCtrl.create({
      cssClass: "settingalert"
    });
    alert.setTitle('About');

    alert.addInput({
      type: 'radio',
      label: 'Everyone',
      value: 'everyone',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'My Contacts',
      value: 'mycontacts',
    });
    alert.addInput({
      type: 'radio',
      label: 'Nobody',
      value: 'nobody',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });

    alert.present();
  }

  wallpaper() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Change your chat wallpaper',
      buttons: [
        {
          text: 'gallery',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.camera.getPicture({
              destinationType: this.camera.DestinationType.DATA_URL,
              quality: 100,
              targetWidth: 750,
              targetHeight: 1350,
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

        }, {
          text: 'Camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.camera.getPicture({
              destinationType: this.camera.DestinationType.DATA_URL,
              quality: 100,
              targetWidth: 750,
              targetHeight: 1350,
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
          text: 'No Wallpaper',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('No Wallpaper clicked');
          },
        }, {
          text: 'Cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  chatbackup(){
    this.navCtrl.push('ChatbackupPage')
  }

  chathistory(){
    this.navCtrl.push('ChathistoryPage')
  }

}

