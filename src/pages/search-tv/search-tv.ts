import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//provider
import { ConfigProvider } from "../../providers/config/config";
import { SeriesProvider } from "../../providers/series/series";

@Component({
  selector: 'page-search-tv',
  templateUrl: 'search-tv.html',
})
export class SearchTvPage {
  public imagen;
  public tv: any[]=[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _config: ConfigProvider,
    private _tv: SeriesProvider) {
  }

  ionViewDidLoad() {
    this.getCondig();
    this.getSearchTv();
  }
  getCondig(){
    return this._config.config()
    .then(data => {
      this.setConfig(data);
    })
  }
  setConfig(data){
    let base = data.base_url;
    let poster = data.poster_sizes[0];
    this.imagen = base+poster;
  }
  getSearchTv(){
    let tv = this.navParams.get('series');
    return this._tv.searchSeries(tv)
    .then(data => {
      if(data == ''){
        this.navCtrl.pop();
      }else{
        this.setSearchTv(data);
      }
    })
  }
  setSearchTv(data){
    let tv;
    for (const t of data) {
      tv = {
        'id': t.id,
        'titulo': t.name,
        'imagen': t.poster_path,
        'fecha': t.first_air_date
      }
      this.tv.push(tv);
    }
  }

}
