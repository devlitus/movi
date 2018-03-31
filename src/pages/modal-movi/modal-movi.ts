import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
//providers
import { MoviProvider } from "../../providers/movi/movi";
import { ConfigProvider } from '../../providers/config/config';


@Component({
  selector: 'page-modal-movi',
  templateUrl: 'modal-movi.html',
})
export class ModalMoviPage {
  public detalles: any[]=[];
  public urlImagen;
  public titulo;
  public companias: any[]=[];
  public genero: any[]=[];
  public logo;
  constructor(
    public viewCtrl: ViewController, 
    public navParams: NavParams, 
    private _moviDetail: MoviProvider,
    private _config: ConfigProvider) {
  }

  ionViewDidLoad() {
    this.getConfig();
    this.getMoviDetail();
  }
  getConfig(){
    this._config.config()
    .then(data => {
      this.setConfig(data);
    })
    .catch(error => console.error('Error en config provider'));
  }
  setConfig(data){
    let config = data;
    let base_url = config.base_url;
    let profile_sizes =config.profile_sizes[0];
    let poster = config.poster_sizes[1];
    let logo = config.logo_sizes[1]; 
    this.urlImagen = base_url+poster;
    this.logo = base_url+logo;
  }

  getMoviDetail(){
    let param = this.navParams.get('id');
    return this._moviDetail.detailMovi(param)
    .then(data => {
      this.setDetailMovi(data);
    })
    .catch(error => console.log('Error promisa detalle', error));
  }
  setDetailMovi(data){
    console.log(data);
    let detail;
    let companias = data.production_companies;
    this.detalleCompania(companias);
    this.setGenero(data.genres);
    let popu = Math.round(data.popularity);
    detail =  {
      'imagen': data.poster_path,
      'original_leng': data.original_language,
      'titulo': data.title,
      'sinopsis': data.overview,
      'fecha': data.release_date,
      'tiempo': data.runtime,
      'popular': popu,
      'ver': data.homepage,
    }
    this.detalles.push(detail);
    this.titulo = data.title;
  }
  detalleCompania(componia){
    let compa;
    for (const c of componia) {
      compa ={
        'id': c.id,
        'name': c.name,
        'logo': c.logo_path,
        'ciudad': c.origin_country
      }
      this.companias.push(compa);
    }
  }
  setGenero(data){
    let generos; 
    for (const g of data) {
      generos = {
        'id': g.id,
      'name': g.name
      }
      this.genero.push(generos);
    }
  }
  cerrarModal(){
    this.viewCtrl.dismiss();
  }

}
