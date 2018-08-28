import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-choosechat',
  templateUrl: 'choosechat.html',
  providers:[EmailComposer]
})
export class ChoosechatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosechatPage');

  }


  chatemail(){
    this.navCtrl.pop();
    let alert = this.alertCtrl.create({
      title: 'Email Chat',
      message: 'Chat with Jackie Brown will be sent to your account, Attaching media will generate a larger email message',
      cssClass:'alert_normal',
      buttons: [
        {
          text: 'Without Media',
          role: 'withoutmedia',
          handler: () => {
            let email = {
              to: 'demo@gmail.com',
              subject: 'Yeppy it is working',
              body: 'Jackie Brown Chat without media',
              isHtml: true
            };
            this.emailComposer.open(email);
          }
        },
        {
          text: 'Attach Media',
          role: 'attachmedia',
          handler: () => {
            let email = {
              to: 'demo@gmail.com',
              attachments: [
                'assets/img/beer_party.jpg',
              ],
              subject: 'Yeppy it is working',
              body: 'Jackie Brown Chat with media',
              isHtml: true
            };
            this.emailComposer.open(email);
          }
        }
      ]
    });
    alert.present();
  }
}
