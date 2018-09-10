import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll } from 'ionic-angular';
import { MoviProvider } from "../../providers/movi/movi";
import { Configuracion } from "../../app/configuracion";
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-peliculas',
  templateUrl: 'peliculas.html',
})
export class PeliculasPage {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  public configuracion: Configuracion = new Configuracion;
  public pelicula: Array<any>=[];
  public paginas = 0;
  public urlImagen: string = this.configuracion.config.images.secure_base_url + this.configuracion.config.images.backdrop_sizes[2];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _servicePeliculas: MoviProvider,
    private social: SocialSharing) {
  }

  ionViewDidLoad() {
    this.getPeliculas();
  }
  getPeliculas() {
    this.paginas = this.paginas + 1;
    this.infiniteScroll.waitFor(
      this._servicePeliculas.peliculas(this.paginas)
      .then(res => {
        this.setPeliculas(res);
        this.infiniteScroll.complete();
      })
      .catch(error =>{console.error('Fallo de conexion', error);})
      )
  }
  setPeliculas(data) {
    for(let p of data) {
      this.pelicula.push(p);
    }
  }
  compartir(share, peli, imagen){
    switch (share) {
      case 'facebook':
        this.social.shareViaFacebook(peli, imagen, null)
        .then(res =>{console.log('Correcto');})
        .catch(erro => {console.error('Error', erro);})
        break;
      case 'twitter':
        this.social.shareViaTwitter(peli, imagen, null)
          .then(res => { console.log('Correcto'); })
          .catch(erro => { console.error('Error', erro); })
        break;
      case 'whatsapp':
        this.social.shareViaWhatsApp(peli, imagen, null)
          .then(res => { console.log('Correcto'); })
          .catch(erro => { console.error('Error', erro); })
        break;
    
      default:
        break;
    }
  }
  openDetallePelicula(id){
    this.navCtrl.push('DetallePeliculaPage', {id});
  }
}
