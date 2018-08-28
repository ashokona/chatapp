import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatsettingPage } from './chatsetting';

@NgModule({
  declarations: [
    ChatsettingPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatsettingPage),
  ],
})
export class ChatsettingPageModule {}
