import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupprofilePage } from './groupprofile';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    GroupprofilePage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(GroupprofilePage),
  ],
})
export class GroupprofilePageModule {}
