import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
//providers
import { ConfigProvider } from '../../providers/config/config';
import { SeriesProvider } from '../../providers/series/series';

@Component({
  selector: 'page-modal-series',
  templateUrl: 'modal-series.html',
})
export class ModalSeriesPage {
  public imagen;
  public logo;
  public profile;
  public detail: any[] = [];
  public creadores: any[] = [];
  public companias: any[] = [];
  public temporadas: any[] = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private _config: ConfigProvider,
    private _series: SeriesProvider) {
  }

  ionViewDidLoad() {
    this.getConfig();
    this.getDetailSerie();
  }
  getConfig(){
    return this._config.config()
    .then(data => {
      this.setConfig(data);
    })
  }
  setConfig(data){
    let base = data.base_url;
    let poster = data.poster_sizes[1];
    let logo = data.logo_sizes[1];
    let profile = data.profile_sizes[1];
    this.imagen = base+poster;
    this.logo = base+logo;
    this.profile = base+profile;
  }
  getDetailSerie(){
    let id = this.navParams.get('id');
    return this._series.detailSeries(id)
    .then(data => {
      this.setDetail(data);
    })
  }
  setDetail(data){
    console.log(data);
    let detailSerie = {
      'id': data.id,
      'titulo': data.original_name,
      'poster': data.poster_path,
      'sinopsis': data.overview,
      'prime_emision': data.first_air_date,
      'ultima_emision': data.last_air_date,
      'episodios_emiter': data.episode_run_time,
      'popularida': data.popularity,
      'temporadas': data.number_of_seasons
    }
    this.detail.push(detailSerie);
    this.getCreadores(data['created_by']);
    this.getCompanias(data['production_companies']);
    this.getTemporadas(data['seasons']);
  }
  getCreadores(data){
    let creadores;
    for (const d of data) {
      creadores = {
        'id': d.id,
        'nombre': d.name,
        'foto': d.profile_path
      }
      this.creadores.push(creadores);
    }
  }
  getCompanias(data){
    let compania;
    for (const d of data) {
      compania = {
        'id': d.id,
        'logo': d.logo_path,
        'name': d.name
      }
      this.companias.push(compania);
    }
  }
  getTemporadas(data){
    let temporada;
    for (const d of data) {
      temporada = {
        'episodios': d.episode_count,
        'poster': d.poster_path,
        'name': d.name,
        'fecha': d.air_date
      }
      this.temporadas.push(temporada);
    }
  }
  cerrarModal(){
    this.viewCtrl.dismiss();
  }

}
