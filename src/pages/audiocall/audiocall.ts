import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-audiocall',
  templateUrl: 'audiocall.html',
})
export class AudiocallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudiocallPage');
  }
  back(){
    this.navCtrl.pop()
  }
}
