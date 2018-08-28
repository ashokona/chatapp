import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatetextstatusPage } from './createtextstatus';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

@NgModule({
  declarations: [
    CreatetextstatusPage,
  ],
  imports: [
    EmojiPickerModule,
    IonicPageModule.forChild(CreatetextstatusPage),
  ],
})
export class CreatetextstatusPageModule {}
