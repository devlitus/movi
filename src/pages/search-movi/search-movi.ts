import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//provider
import { MoviProvider } from "../../providers/movi/movi";
import { ConfigProvider } from "../../providers/config/config";
@Component({
  selector: 'page-search-movi',
  templateUrl: 'search-movi.html',
})
export class SearchMoviPage {
  public busqueda: any[]=[];
  public imagen;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _movi: MoviProvider, private _config: ConfigProvider) {
  }

  ionViewDidLoad() {
    this.getConfig();
    this.getSearchMovi();
  }
  getConfig(){
    return this._config.config()
    .then(data => {
      this.setConfig(data);
    })
    .catch(error => console.error('error config searchMovi'));
  }
  setConfig(data){
    let base_url = data.base_url;
    let poster = data.poster_sizes[1];
    this.imagen = base_url+poster;
  }
  getSearchMovi(){
    let name = this.navParams.get('name');
    return this._movi.searchMovi(name)
    .then(data => {
      if(data == ''){
        this.navCtrl.pop();
      }else{
        this.setSearchMovi(data);
      }
    })
    .catch(error => console.error('Error en searchMovi provider'));
  }
  setSearchMovi(data){
    console.log(data);
    let searchs = data;
    let search;
    for (const s of searchs) {
      search = {
        'id': s.id,
        'poster': s.poster_path,
        'titulo': s.title,
        'fecha': s.release_date
      }
      this.busqueda.push(search);
    }
  }

}
