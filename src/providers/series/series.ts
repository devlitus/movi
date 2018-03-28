import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SeriesProvider {
  private apiKey = '98ff23888e6447cdab84f13477adb87e';
  constructor(public http: HttpClient) {
    
  }
  series(pages){
    let promise = new Promise((resolve, reject) => {
      this.http.get('https://api.themoviedb.org/3/tv/popular?api_key='+this.apiKey+'&language=es-ES&page='+pages)
      .subscribe(data => {
        resolve(data['results']);
      })
    })
    return promise;
  }
  detailSeries(id){
    let promise = new Promise((resolve, reject) => {
      this.http.get('https://api.themoviedb.org/3/tv/'+id+'?api_key='+this.apiKey+'&language=es-ES&append_to_response=videos,images')
      .subscribe(data => {
        resolve(data);
        if (data['status_code'] == 7) {
          reject(console.error(data['status_message']))
        }
      })
    })
    return promise;
  }
}
