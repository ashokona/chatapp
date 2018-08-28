import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, App} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-chatlist',
  templateUrl: 'chatlist.html',
})
export class ChatlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, private app: App) {
  }

  ionViewDidLoad() {

  }

  showpic() {
    let popover = this.popoverCtrl.create('UserpicpopoverPage');
    popover.present();
    popover.onDidDismiss(data => {
      document.querySelector("page-tab").classList.remove("effect");
    })
  }


  chat() {
    this.app.getRootNav().setRoot('ChatPage');
  }
  groupchat(){
    this.app.getRootNav().setRoot('GroupchatPage');
  }

  // on scroll show hide fab and header
  onScroll(e: any) {
    if (e.directionY == "down") {
      document.getElementById("hide_show_fab")['style'].transform = 'translate3d(0, 320px, 0)';
    } else {
      document.getElementById("hide_show_fab")['style'].transform = 'translate3d(0, 0, 0)';
    }
  }
// on scroll show hide and header fab
}

