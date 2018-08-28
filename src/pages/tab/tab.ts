import { Component } from '@angular/core';
import { IonicPage, NavController,PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  callRoot = 'CallPage';
  chatlistRoot = 'ChatlistPage';
  statusRoot = 'StatusPage';


  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController) {
  }

  menu(myEvent){
    let popover = this.popoverCtrl.create('MenuPage');
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      document.querySelector("page-tab").classList.remove("effect");

    })
  }

  // show searchbar
  public buttonClicked: boolean = false;

  public showsearchbar() {
    this.buttonClicked = !this.buttonClicked;
  }
}
