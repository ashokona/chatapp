import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the NumberchangePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-numberchange',
  templateUrl: 'numberchange.html',
})
export class NumberchangePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumberchangePage');
  }

  next() {
    document.getElementById("content").className = "animated fadeOutRight";
    document.getElementById("form").className = "animated fadeOutLeft";
    document.getElementById("next").className = "animated fadeOut";
    document.getElementById("otp").className = "animated fadeIn";
  }

  otp() {
    this.navCtrl.push('OtpPage')
  }
}
