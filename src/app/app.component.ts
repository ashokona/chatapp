import {Component} from '@angular/core';
import {Platform,ToastController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

declare let nativeclick;

@Component({
  templateUrl: 'app.html',
  providers:[Network]
})
export class MyApp {
  rootPage: any = 'SignupPage';
  selectedTheme: String;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private network: Network,public toastCtrl: ToastController) {
    platform.ready().then((val) => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if (val === 'cordova') {
        let clickyClasses = ['button']; // add other classes that should make a sound when clicked on
        nativeclick.watch(clickyClasses);
      }

      // watch network for a disconnect
      let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        console.log("broken")
        let toast = this.toastCtrl.create({
          message: 'your internet is not working',
          showCloseButton: true,
          closeButtonText: 'Ok',
          cssClass: "nointernet",
          position:'top',
        });
        toast.present();
      });

    });
  }

  internetcheck(){

  }
}

