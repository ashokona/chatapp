import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }
  messagetune() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Notification Tone');

    alert.addInput({
      type: 'radio',
      label: 'Tune 1',
      value: 'tun1',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Tune 2',
      value: 'tune2',
    });
    alert.addInput({
      type: 'radio',
      label: 'Tune 3',
      value: 'tune',
    });
    alert.addInput({
      type: 'radio',
      label: 'tune 4',
      value: 'tune4',
    });
    alert.addInput({
      type: 'radio',
      label: 'Tune 5',
      value: 'tune5',
    });
    alert.addInput({
      type: 'radio',
      label: 'Tune 6',
      value: 'tune',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });

    alert.present();
  }

  vibrate() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Vibrate');

    alert.addInput({
      type: 'radio',
      label: 'Off',
      value: 'off',
    });
    alert.addInput({
      type: 'radio',
      label: 'default',
      value: 'tune2',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Short',
      value: 'short',
    });
    alert.addInput({
      type: 'radio',
      label: 'Long',
      value: 'long',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });

    alert.present();
  }

  ringtone() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Ringtone');

    alert.addInput({
      type: 'radio',
      label: 'Tune 1',
      value: 'tun1',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Tune 2',
      value: 'tune2',
    });
    alert.addInput({
      type: 'radio',
      label: 'Tune 3',
      value: 'tune',
    });
    alert.addInput({
      type: 'radio',
      label: 'tune 4',
      value: 'tune4',
    });
    alert.addInput({
      type: 'radio',
      label: 'Tune 5',
      value: 'tune5',
    });
    alert.addInput({
      type: 'radio',
      label: 'Tune 6',
      value: 'tune',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });

    alert.present();
  }

  callvibrate() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Vibrate');

    alert.addInput({
      type: 'radio',
      label: 'Off',
      value: 'off',
    });
    alert.addInput({
      type: 'radio',
      label: 'default',
      value: 'tune2',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Short',
      value: 'short',
    });
    alert.addInput({
      type: 'radio',
      label: 'Long',
      value: 'long',
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
