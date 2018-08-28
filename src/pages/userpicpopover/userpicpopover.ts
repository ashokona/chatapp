import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-userpicpopover',
  templateUrl: 'userpicpopover.html',
})
export class UserpicpopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpicpopoverPage');
    document.querySelector("page-tab").className += ' ' + 'effect';
    document.getElementsByTagName('ion-popover')[0].setAttribute("id", "profilepic_popover");
  }
}
