import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviProvider {
  private apiKey = '98ff23888e6447cdab84f13477adb87e';
  private lenguaje = 'language=es-ES';
  constructor(public http: HttpClient) {
    
  }
  movi(pages){
    let promise = new Promise((resolve, reject) => {
      this.http.get('https://api.themoviedb.org/3/movie/popular?api_key='+this.apiKey+'&'+this.lenguaje+'&page='+pages)
      .subscribe(data => {
        resolve(data['results']);
      })
    })
    return promise;
  }
  detailMovi(id){
    let promise = new Promise((resolve, reject) => {
      this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apiKey+'&'+this.lenguaje+'&append_to_response=videos')
      .subscribe(data => {
        resolve(data);
      })
    })
    return promise;
  }
  searchMovi(movi){
    let promise = new Promise((resolve, reject) =>{
      this.http.get('https://api.themoviedb.org/3/search/movie?api_key='+this.apiKey+'&'+this.lenguaje+'&query='+movi+'&page=1&include_adult=false')
      .subscribe(data => {
        resolve(data['results']);
      })
    })
    return promise;
  }
}
