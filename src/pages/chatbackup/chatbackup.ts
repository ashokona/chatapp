import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chatbackup',
  templateUrl: 'chatbackup.html',
})
export class ChatbackupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatbackupPage');
  }

  backuptime(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Backup to Google Drive');

    alert.addInput({
      type: 'radio',
      label: 'Never',
      value: 'never',
    });
    alert.addInput({
      type: 'radio',
      label: 'Only when I tap "Backup"',
      value: 'byme',
    });
    alert.addInput({
      type: 'radio',
      label: 'Daily',
      value: 'byme',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Weekly',
      value: 'weekly',
    });
    alert.addInput({
      type: 'radio',
      label: 'Monthly',
      value: 'monthly',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {}
    });
    alert.present();
  }

  account(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Choose an account');

    alert.addInput({
      type: 'radio',
      label: 'ajoy.karmakar459@gmail.com',
      value: 'ajoy.karmakar459@gmail.com',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'appthemepro@gmail.com',
      value: 'appthemepro@gmail.com',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {}
    });
    alert.present();
  }

  backupnetwork(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Back up over');

    alert.addInput({
      type: 'radio',
      label: 'Wi-Fi',
      value: 'wifi',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Wi-Fi or cellular',
      value: 'wifi_or_cellular',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {}
    });
    alert.present();
  }

  includevideo(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Include Videos');

    alert.addInput({
      type: 'radio',
      label: 'Yes',
      value: 'yes',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'No',
      value: 'no',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {}
    });
    alert.present();
  }
}
