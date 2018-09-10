import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//providers
import { MoviProvider } from "../providers/movi/movi";
import { SeriesProvider } from '../providers/series/series';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { SocialSharing } from '@ionic-native/social-sharing';

//pages
import { MyApp } from './app.component';
import { HomePage } from "../pages/home/home";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MoviProvider,
    SeriesProvider,
    YoutubeVideoPlayer,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
