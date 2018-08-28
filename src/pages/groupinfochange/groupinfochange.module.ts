import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupinfochangePage } from './groupinfochange';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

@NgModule({
  declarations: [
    GroupinfochangePage,
  ],
  imports: [
    EmojiPickerModule,
    IonicPageModule.forChild(GroupinfochangePage),
  ],
})
export class GroupinfochangePageModule {}
