import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangestatusPage } from './changestatus';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

@NgModule({
  declarations: [
    ChangestatusPage,
  ],
  imports: [
    EmojiPickerModule,
    IonicPageModule.forChild(ChangestatusPage),
  ],
})
export class ChangestatusPageModule {}
