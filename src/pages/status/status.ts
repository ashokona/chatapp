import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import { MediaCapture} from '@ionic-native/media-capture';

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
  providers: [Camera,MediaCapture]
})
export class StatusPage {
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,private camera: Camera,private mediaCapture: MediaCapture) {
    this.base64Image = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

  camerastatus(){
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

  videostatus(){
    this.mediaCapture.captureVideo((videodata) => {
      alert(JSON.stringify(videodata));
    })
  }

  gallerystatus() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: 2000,
      targetHeight: 2000,
      allowEdit: true,
      correctOrientation: true,
      mediaType: 2,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });

  }

  textstatus() {
    let modal = this.modalCtrl.create('CreatetextstatusPage');
    modal.present();
  }
}
