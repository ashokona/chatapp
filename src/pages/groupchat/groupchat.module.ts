import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupchatPage } from './groupchat';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

@NgModule({
  declarations: [
    GroupchatPage,
  ],
  imports: [
    EmojiPickerModule,
    IonicImageViewerModule,
    IonicPageModule.forChild(GroupchatPage),
  ],
})
export class GroupchatPageModule {}
