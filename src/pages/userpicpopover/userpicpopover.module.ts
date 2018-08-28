import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserpicpopoverPage } from './userpicpopover';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    UserpicpopoverPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(UserpicpopoverPage),
  ],
})
export class UserpicpopoverPageModule {}
