import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-soundrecord',
  templateUrl: 'soundrecord.html',
})
export class SoundrecordPage {
  design: string = "filter";
  state: string = 'top';
  buttonIcon: string = "microphone";
  isActive : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    document.getElementsByTagName('ion-popover')[0].setAttribute("id", "soundrecord_popover");
    document.querySelector("page-chat")['style'].filter = 'blur(2px)';
  }
  startrecord(getIcon: string){
    this.state = this.state == 'top' ? 'bottom': 'top';

    if (this.buttonIcon === 'microphone') {
      this.isActive = false;
      this.buttonIcon = "pause";
    }
    else if (this.buttonIcon === 'pause') {
      this.isActive = true;
      this.buttonIcon = "microphone";
    }
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
