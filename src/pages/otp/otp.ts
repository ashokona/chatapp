import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }

  verify() {
    let alert = this.alertCtrl.create({
      title: 'Welcome',
      cssClass:'alert_normal',
      message: 'Now you are verified and connect with your family and friends throught Multi Chat.',
      buttons: [ {
        text: 'OK',
        handler: data => {
          this.navCtrl.push('SignupprofilePage')
        }
      },]
    });
    alert.present();
  }

}
