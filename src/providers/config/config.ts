import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {
  private apiKey = '98ff23888e6447cdab84f13477adb87e';
  constructor(public http: HttpClient) {
    
  }
  config(){
    let promise = new Promise((resolve, reject) =>{
      this.http.get('https://api.themoviedb.org/3/configuration?api_key='+ this.apiKey)
      .subscribe(data => {
        resolve(data['images']);
      })
    })
    return promise;
  }

}
