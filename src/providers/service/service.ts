import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
 private baseUrl = 'http://localhost/login/api/';  // URL to web api
 // private baseUrl = 'http://192.168.137.1/login/api/';  // URL to web api
 private respuesta:any ;
 private categories: Object[] ;

  constructor(public http: Http) {
  }
  getServiceByCat(id):Promise<Object[]>{
    return this.http.get(this.baseUrl + 'servicesCat')
      .toPromise()
      .then(
        (response) => {
          this.respuesta = response;
          this.categories = JSON.parse(this.respuesta._body);
         return this.categories;
        }
      ).catch()
  }

}
