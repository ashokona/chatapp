import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChathistoryPage } from './chathistory';

@NgModule({
  declarations: [
    ChathistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ChathistoryPage),
  ],
})
export class ChathistoryPageModule {}
