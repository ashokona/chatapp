import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, App} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-call',
  templateUrl: 'call.html',
})
export class CallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallPage');
  }

  showpic() {
    let popover = this.popoverCtrl.create('UserpicpopoverPage');
    popover.present();
    popover.onDidDismiss(data => {
      document.querySelector("page-tab")['style'].filter = 'blur(0)';
    })
  }

  videocall() {
    this.app.getRootNav().push('VideocallPage')
  }

  audiocall() {
    this.app.getRootNav().push('AudiocallPage')
  }
}
