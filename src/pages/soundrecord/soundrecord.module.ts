import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoundrecordPage } from './soundrecord';

@NgModule({
  declarations: [
    SoundrecordPage,
  ],
  imports: [
    IonicPageModule.forChild(SoundrecordPage),
  ],
})
export class SoundrecordPageModule {}
