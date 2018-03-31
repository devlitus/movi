import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchMoviPage } from './search-movi';

@NgModule({
  declarations: [
    SearchMoviPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchMoviPage),
  ],
})
export class SearchMoviPageModule {}
