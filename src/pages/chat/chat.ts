import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Content, PopoverController,} from 'ionic-angular';

import {TabPage} from '../tab/tab';
import {Camera} from '@ionic-native/camera';
import {MediaCapture} from '@ionic-native/media-capture';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  providers: [Camera, MediaCapture, InAppBrowser]
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  toggled: boolean = false;
  emojitext: string;

  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private mediaCapture: MediaCapture, public popoverCtrl: PopoverController, private iab: InAppBrowser) {
    this.base64Image = "assets/img/camera.svg";
  }

  ionViewDidEnter() {
    this.base64Image = "";
    this.content.scrollToBottom(0);
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }

  gototab() {
    this.navCtrl.setRoot(TabPage)
  }

  // emoji
  handleSelection(event) {
    if (this.emojitext == undefined) {
      this.emojitext = "";
    }
    this.emojitext = this.emojitext + " " + event.char;
  }
// emoji end

  docupload() {
    var fileupload = document.getElementById("filechooser");
    fileupload.click();
  }

  opencamera() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: 2000,
      targetHeight: 2000,
      allowEdit: true,
      correctOrientation: true,
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  // openvideocamera() {
  //   this.mediaCapture.captureVideo((videodata) => {
  //     alert(JSON.stringify(videodata));
  //   })
  // }

  opengallery() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: 2000,
      targetHeight: 2000,
      allowEdit: true,
      correctOrientation: true,
      mediaType: 2,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });

  }

  recordpopover() {
    let popover = this.popoverCtrl.create('SoundrecordPage');
    popover.present();
    popover.onDidDismiss(data => {
      document.querySelector("page-chat")['style'].filter = 'blur(0)';
    })
  }

  changetextarea() {
    var textarea = document.getElementById("messageInputBox");
    textarea.style.height = Math.min(textarea.scrollHeight) + "px";
  }

  videocall() {
    this.navCtrl.push('VideocallPage')
  }

  audiocall() {
    this.navCtrl.push('AudiocallPage')
  }

  // on scroll hide button up down
  onScroll(e: any) {

    if (e.directionY == "down") {
      document.querySelector(".hideonscrollup")['style'].transform = 'scale(0)';
      document.querySelector(".hideonscrolldown")['style'].transform = 'scale(1)';
    } else {
      document.getElementById("scroll_btn")['style'].transform = 'scale(1)';
      document.querySelector(".hideonscrollup")['style'].transform = 'scale(1)';
      document.querySelector(".hideonscrolldown")['style'].transform = 'scale(0)';
    }

  }

  gotoup() {
    this.content.scrollToTop(200);
  }

  gotobottom() {
    this.content.scrollToBottom(200);
  }

// on scroll hide button up down end


  // in app browser
  launch(url) {
    const browser = this.iab.create(url,"_blank","location=no,fullscreen=yes,toolbar=no,clearcache=yes,clearsessioncache=yes,zoom=no");
  }
  // in app browser end

  userprofile(){
    this.navCtrl.push('UserprofilePage')
  }

  // show searchbar
  public buttonClicked: boolean = false;

  public showsearchbar() {
    this.buttonClicked = !this.buttonClicked;
  }

  // on press message select
  wasClicked = false;
  selectmsg(){
    this.wasClicked= !this.wasClicked;
  }
}
