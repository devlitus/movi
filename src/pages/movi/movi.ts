import { Component, ViewChild } from '@angular/core';
import { NavParams, ModalController, InfiniteScroll, NavController } from 'ionic-angular';
//Providers
import { ConfigProvider } from "../../providers/config/config";
import { MoviProvider } from "../../providers/movi/movi";
//pages
import { ModalMoviPage, SearchMoviPage } from "../index-page";

@Component({
  selector: 'page-movi',
  templateUrl: 'movi.html',
})
export class MoviPage {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  public urlImagen;
  public movi: any = [];
  public pages = 0;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private _moviService: MoviProvider,
    private _confiService: ConfigProvider) {
      
  }

  ionViewDidLoad() {
    this.getConfig();
    this.getMovi();
  }
  getConfig(){
    this._confiService.config()
    .then(data => {
      this.setConfig(data);
    })
    .catch(error => console.error('Error en config provider'));
  }
  setConfig(data){
    let config = data;
    let base_url = config.base_url;
    let fondo = config.backdrop_sizes[1]; 
    return this.urlImagen = base_url+fondo;
  }
  getMovi(){
    this.pages = this.pages+1;
    return this.infiniteScroll.waitFor(
      this._moviService.movi(this.pages)
      .then(data => {
        this.setMovi(data);
        this.infiniteScroll.complete();
    })
    .catch(error => {
      console.error('Error en movi provaider');
      this.infiniteScroll.enable(false);
    }));
  }
  setMovi(data){
    let dataMovi;
    for (const m of data) {
      dataMovi = {
        'id': m.id,
        'titulo': m.title,
        'imagen': m.backdrop_path
      } 
      this.movi.push(dataMovi);
    }
  }
  onInput(name){
    if(name !== ''){
      this.navCtrl.push(SearchMoviPage, {name});
    } 
  }
  detailMovi(id){
    let modal = this.modalCtrl.create(ModalMoviPage, {id});
    modal.present();
  }
  

}
