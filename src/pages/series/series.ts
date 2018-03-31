import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, InfiniteScroll, ModalController } from 'ionic-angular';
//providers
import { ConfigProvider } from '../../providers/config/config';
import { SeriesProvider } from '../../providers/series/series';
//pages
import { ModalSeriesPage } from "../index-page";

@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  public urlImagen
  public series: any[]=[];
  public pages = 0;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _config: ConfigProvider,
    private _series: SeriesProvider,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.getConfig();
    this.getSeries();
  }
  getConfig(){
    return this._config.config()
    .then(data => {
      this.setConfig(data);
    })
    .catch(error => console.error('Error en promise config series'));
  }
  setConfig(data){
    let config = data;
    let base_url = config.base_url;
    let fondo = config.backdrop_sizes[1]; 
    return this.urlImagen = base_url+fondo;
  }
  getSeries(){
    this.pages = this.pages+1;
    return this.infiniteScroll.waitFor(
      this._series.series(this.pages)
      .then(data => {
        this.setSeries(data);
        this.infiniteScroll.complete();
      })
      .catch(error => console.error('Error provider series'))
    );
  }
  setSeries(data){
    for (const s of data) {
      let serie = {
        'id': s.id,
        'titulo': s.name,
        'fondo': s.backdrop_path
      }
      this.series.push(serie);  
    }
  }
  detailSeries(id){
    console.log(id);
    let modal = this.modalCtrl.create(ModalSeriesPage, {id});
    modal.present();
  }

}
