import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html',
})
export class PrivacyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacyPage');
  }

  lastseen() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Last seen');

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

  profilepicture() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Profile picture');

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

  about() {
    let alert = this.alertCtrl.create();
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
}
