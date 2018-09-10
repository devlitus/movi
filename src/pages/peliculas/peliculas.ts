import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll } from 'ionic-angular';
import { MoviProvider } from "../../providers/movi/movi";
import { Configuracion } from "../../app/configuracion";


@IonicPage()
@Component({
  selector: 'page-peliculas',
  templateUrl: 'peliculas.html',
})
export class PeliculasPage {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  public configuracion: Configuracion = new Configuracion;
  public pelicula: Object;
  public paginas= 0;
  public urlImagen: string = this.configuracion.config.images.secure_base_url + this.configuracion.config.images.backdrop_sizes[2];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _servicePeliculas: MoviProvider) {
  }

  ionViewDidLoad() {
    this.getPeliculas();
  }
  getPeliculas() {
    let pagina = this.paginas+1;
    return this.infiniteScroll
      .waitFor(this._servicePeliculas
        .peliculas(pagina)
        .then(response => {
          this.pelicula = response;
          console.log(this.pelicula);
          this.infiniteScroll.complete();
        }))
  }

}
