import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideocallPage } from './videocall';

@NgModule({
  declarations: [
    VideocallPage,
  ],
  imports: [
    IonicPageModule.forChild(VideocallPage),
  ],
  exports: [
    VideocallPage
  ]
})
export class VideocallPageModule {}
