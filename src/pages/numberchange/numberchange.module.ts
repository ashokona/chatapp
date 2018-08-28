import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumberchangePage } from './numberchange';

@NgModule({
  declarations: [
    NumberchangePage,
  ],
  imports: [
    IonicPageModule.forChild(NumberchangePage),
  ],
})
export class NumberchangePageModule {}
