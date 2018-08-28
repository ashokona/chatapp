import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeusernamePage } from './changeusername';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

@NgModule({
  declarations: [
    ChangeusernamePage,
  ],
  imports: [
    EmojiPickerModule,
    IonicPageModule.forChild(ChangeusernamePage),
  ],
})
export class ChangeusernamePageModule {}
