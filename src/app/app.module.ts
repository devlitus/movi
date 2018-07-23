import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//providers
import { ConfigProvider } from "../providers/config/config";
import { MoviProvider } from "../providers/movi/movi";
import { SeriesProvider } from '../providers/series/series';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

//pages
import { MyApp } from './app.component';
import { HomePage, 
         MoviPage, 
         SeriesPage, 
         ModalMoviPage, 
         ModalSeriesPage,
         SearchMoviPage,
         SearchTvPage } from "../pages/index-page";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoviPage,
    SeriesPage,
    ModalMoviPage,
    ModalSeriesPage,
    SearchMoviPage,
    SearchTvPage
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
    MoviPage,
    SeriesPage,
    ModalMoviPage,
    ModalSeriesPage,
    SearchMoviPage,
    SearchTvPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConfigProvider,
    MoviProvider,
    SeriesProvider,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
