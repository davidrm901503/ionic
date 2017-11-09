import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CategoryProvider {
  private baseUrl = 'http://localhost/login/api/';  // URL to web api
  // private baseUrl = 'http://192.168.137.1/login/api/';  // URL to web api
  private respuesta:any ;
  private categories: Object[] ;
  constructor(public http: Http) {

  }
  getcategories():Promise<Object[]>{
    return this.http.get(this.baseUrl + 'categories')
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


