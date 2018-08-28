import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilesettingPage } from './profilesetting';

@NgModule({
  declarations: [
    ProfilesettingPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilesettingPage),
  ],
})
export class ProfilesettingPageModule {}
