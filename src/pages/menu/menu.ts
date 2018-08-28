import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  scanData : {};
  options :BarcodeScannerOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    document.querySelector("page-tab").className += ' ' + 'effect';
  }

  qrscan(){
    this.options = {
      prompt : "Scan your QR code "
    };
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

      console.log(barcodeData);
      this.scanData = barcodeData;
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }
  selectfriend(){
    this.navCtrl.push('GroupselectfriendPage');
  }
  setting(){
    this.navCtrl.push('ProfilePage');
  }


  toggleAppTheme() {
    let elem = document.body;
    elem.classList.toggle("dark-theme");
  }
}
