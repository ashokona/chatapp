import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabPage } from '../pages/tab/tab';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    TabPage,
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    SuperTabsModule.forRoot(),
    EmojiPickerModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
