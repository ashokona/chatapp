import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    EmojiPickerModule,
    IonicImageViewerModule,
    IonicPageModule.forChild(ChatPage),
  ],
})
export class ChatPageModule {}
