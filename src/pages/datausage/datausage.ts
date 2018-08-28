import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-datausage',
  templateUrl: 'datausage.html',
})
export class DatausagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatausagePage');
  }

  mobiledata() {
    let alert = this.alertCtrl.create();
    alert.setTitle('When Using Mobile Data');

    alert.addInput({
      type: 'checkbox',
      label: 'Photos',
      value: 'photos',
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Audio',
      value: 'audio',
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Videos',
      value: 'videos',
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Documents',
      value: 'documents',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });

    alert.present();
  }

  wifidata() {
    let alert = this.alertCtrl.create();
    alert.setTitle('When Using Mobile Data');

    alert.addInput({
      type: 'checkbox',
      label: 'Photos',
      value: 'photos',
      checked:true
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Audio',
      value: 'audio',
      checked:true
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Videos',
      value: 'videos',
      checked:true
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Documents',
      value: 'documents',
      checked:true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });

    alert.present();
  }

  roaming() {
    let alert = this.alertCtrl.create();
    alert.setTitle('When Roaming');

    alert.addInput({
      type: 'checkbox',
      label: 'Photos',
      value: 'photos',
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Audio',
      value: 'audio',
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Videos',
      value: 'videos',
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Documents',
      value: 'documents',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });

    alert.present();
  }

}
