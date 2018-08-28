import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-changestatus',
  templateUrl: 'changestatus.html',
})
export class ChangestatusPage {
  emojitext: string;
  toggled: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangestatusPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  // emoji
  handleSelection(event) {
    if (this.emojitext == undefined) {
      this.emojitext = "";
    }
    this.emojitext = this.emojitext + " " + event.char;
  }
// emoji end
}
