import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosechatPage } from './choosechat';

@NgModule({
  declarations: [
    ChoosechatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoosechatPage),
  ],
})
export class ChoosechatPageModule {}
