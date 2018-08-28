import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-changeusername',
  templateUrl: 'changeusername.html',
})
export class ChangeusernamePage {
  emojitext: string;
  toggled: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeusernamePage');
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
