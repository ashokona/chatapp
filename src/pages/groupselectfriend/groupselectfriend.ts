import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the GroupselectfriendPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groupselectfriend',
  templateUrl: 'groupselectfriend.html',
})
export class GroupselectfriendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedContacts = [];
    this.contactList = [{
      id: 1,
      name: "Jackie Brown",
      pics: "assets/img/user1.jpg",
    },
      {
        id: 2,
        name: "Beverly Wright",
        pics: "assets/img/user2.jpg",
      },
      {
        id: 3,
        name: "Josh Brown",
        pics: "assets/img/user3.jpg",
      },
      {
        id: 4,
        name: "Revikeo Brishley",
        pics: "assets/img/user4.jpg",
      },
      {
        id: 5,
        name: "Beverly Wright",
        pics: "assets/img/user5.jpg",
      },
      {
        id: 6,
        name: "Jackie Brown",
        pics: "assets/img/user6.jpg",
      },
      {
        id: 7,
        name: "Beverly Wright",
        pics: "assets/img/user2.jpg",
      },
      {
        id: 8,
        name: "Josh Brown",
        pics: "assets/img/user3.jpg",
      },
      {
        id: 9,
        name: "Revikeo Brishley",
        pics: "assets/img/user4.jpg",
      },
      {
        id: 10,
        name: "Beverly Wright",
        pics: "assets/img/user5.jpg",
      },
      {
        id: 11,
        name: "Jackie Brown",
        pics: "assets/img/user6.jpg",
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupselectfriendPage');
  }

  contactList: any[];

  selectedContacts: any[];


  tapedAvatar(id: number) {

    console.log(this.selectedContacts);
    if (this.isInArray(id)) {
      let index = this.selectedContacts.indexOf(id);

      this.selectedContacts.splice(index, 1);
    } else {
      this.selectedContacts.push(id);
      console.log(this.selectedContacts.indexOf(id));
    }
  }

  isInArray(id: number): boolean {
    let check: boolean = false;
    for (let contactId of this.selectedContacts) {
      if (contactId == id) {
        check = true;
      }
    }
    return check;
  }

  groupnameadd(){
    this.navCtrl.push('GroupnameaddPage')
  }
}
