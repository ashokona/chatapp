import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserprofilePage } from './userprofile';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    UserprofilePage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(UserprofilePage),
  ],
})
export class UserprofilePageModule {}
