import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detalle-pelicula',
  templateUrl: 'detalle-pelicula.html',
})
export class DetallePeliculaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  getPelicula(){
    console.log(this.navParams.get('id'));

  }

}
