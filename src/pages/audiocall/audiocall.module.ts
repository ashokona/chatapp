import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudiocallPage } from './audiocall';

@NgModule({
  declarations: [
    AudiocallPage,
  ],
  imports: [
    IonicPageModule.forChild(AudiocallPage),
  ],
  exports: [
    AudiocallPage
  ]
})
export class AudiocallPageModule {}
