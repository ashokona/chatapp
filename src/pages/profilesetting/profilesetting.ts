import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profilesetting',
  templateUrl: 'profilesetting.html',
})
export class ProfilesettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesettingPage');
  }

  privacy(){
    this.navCtrl.push('PrivacyPage')
  }

  changenumber(){
    this.navCtrl.push('NumberchangePage')
  }

}
