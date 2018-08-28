import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-videocall',
  templateUrl: 'videocall.html',
})
export class VideocallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideocallPage');
  }
  back(){
    this.navCtrl.pop()
  }
}
