import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviProvider } from "../../providers/movi/movi";
import { Configuracion } from "../../app/configuracion";


@IonicPage()
@Component({
  selector: 'page-peliculas',
  templateUrl: 'peliculas.html',
})
export class PeliculasPage {
  public configuracion: Configuracion = new Configuracion;
  public pelicula: Object;
  public pagina: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _servicePeliculas: MoviProvider) {
  }

  ionViewDidLoad() {
    
    
  }
  getPeliculas(){
    let pagina = this.pagina+1;
    this._servicePeliculas.peliculas(pagina).then(response => {
      this.pelicula = response;
    })
  }

}
