import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatusPage } from './status';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    StatusPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(StatusPage),
  ],
})
export class StatusPageModule {}
