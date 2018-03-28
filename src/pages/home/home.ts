import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviPage, SeriesPage } from "../index-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pageMovi(){
    this.navCtrl.push(MoviPage);
  }
  pageSeries(){
    this.navCtrl.push(SeriesPage);
  }

}
