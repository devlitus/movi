import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalMoviPage } from './modal-movi';

@NgModule({
  declarations: [
    ModalMoviPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalMoviPage),
  ],
})
export class ModalMoviPageModule {}
