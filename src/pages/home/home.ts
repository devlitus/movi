import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pageMovi(){
    this.navCtrl.push('PeliculasPage');
  }
  pageSeries(){
    this.navCtrl.push('SeriesPage')
  }

}
