import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviPage } from './movi';

@NgModule({
  declarations: [
    MoviPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviPage),
  ],
})
export class MoviPageModule {}
