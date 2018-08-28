import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-createtextstatus',
  templateUrl: 'createtextstatus.html',
})
export class CreatetextstatusPage {
  toggled: boolean = false;
  emojitext: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.presentToast();
  }

  handleSelection(event) {
    if (this.emojitext == undefined) {
      this.emojitext = "";
    }
    this.emojitext = this.emojitext + " " + event.char;

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Swipe to change the background color!',
      duration: 3000
    });
    toast.present();
  }

  changetextarea() {
    var textarea = document.getElementById("statusInputBox");
    textarea.style.height = Math.min(textarea.scrollHeight) + "px";
  }

}
