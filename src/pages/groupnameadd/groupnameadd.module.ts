import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupnameaddPage } from './groupnameadd';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

@NgModule({
  declarations: [
    GroupnameaddPage,
  ],
  imports: [
    EmojiPickerModule,
    IonicPageModule.forChild(GroupnameaddPage),
  ],
})
export class GroupnameaddPageModule {}
