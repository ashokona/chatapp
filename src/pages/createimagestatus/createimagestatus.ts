import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-createimagestatus',
  templateUrl: 'createimagestatus.html',
})
export class CreateimagestatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateimagestatusPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
