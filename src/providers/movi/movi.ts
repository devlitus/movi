import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MoviProvider {
  private apiKey = '98ff23888e6447cdab84f13477adb87e';
  private lenguaje = 'language=es-ES';
  private urlBase = 'https://api.themoviedb.org/3/'
  constructor(public http: HttpClient) {
    
  }
  movi(pages){
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.urlBase+'movie/popular?api_key='+this.apiKey+'&'+this.lenguaje+'&page='+pages)
      .subscribe(data => {
        resolve(data['results']);
      })
    })
    return promise;
  }
  detailMovi(id){
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.urlBase+'movie/'+id+'?api_key='+this.apiKey+'&'+this.lenguaje+'&append_to_response=videos')
      .subscribe(data => {
        resolve(data);
      })
    })
    return promise;
  }
  searchMovi(movi){
    let promise = new Promise((resolve, reject) =>{
      this.http.get(this.urlBase+'search/movie?api_key='+this.apiKey+'&'+this.lenguaje+'&query='+movi+'&page=1&include_adult=false')
      .subscribe(data => {
        resolve(data['results']);
      })
    })
    return promise;
  }
  newMovi(){
    let promise = new Promise((resolve, reject) => {
      this.http.get('https://api.themoviedb.org/3/movie/latest?api_key=98ff23888e6447cdab84f13477adb87e&language=en-ES')
      .subscribe(data => {
        resolve(data);
        console.log('provide ',data);
      })
    })
    return promise;
  }

}
