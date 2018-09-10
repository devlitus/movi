import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MoviProvider {
  private apiKey = '98ff23888e6447cdab84f13477adb87e';
  private lenguaje = 'es-ES';
  private urlBase = 'https://api.themoviedb.org/3/'
  constructor(public http: HttpClient) {
    
  }
  peliculas(pages){
    console.log(pages);
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.urlBase}movie/popular?api_key=${this.apiKey}&language=${this.lenguaje}&page=${pages}`)
      .subscribe(data => {
        resolve(data['results']);
      })
    })
    return promise;
  }
  detallePelicula(id){
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.urlBase}movie/${id}?api_key=${this.apiKey}&language=${this.lenguaje}&append_to_response=videos, images`)
      .subscribe(data => {
        resolve(data);
      })
    })
    return promise;
  }

}
