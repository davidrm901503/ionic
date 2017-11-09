import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SubCategoryProvider {
  private baseUrl = 'http://localhost/login/api/';  // URL to web api
  // private baseUrl = 'http://192.168.137.1/login/api/';  // URL to web apid

  private respuesta:any ;
  private subcategories: Object[] ;
  constructor(public http: Http) {  }

  topSubcategories():Promise<Object[]>{
    return this.http.get(this.baseUrl+ 'topSubcategories')
      .toPromise()
      .then(
        (response) => {
           this.respuesta = response;
           this.subcategories = JSON.parse(this.respuesta._body);
          return this.subcategories;
        }

      ).catch(this.handleError)
  }
  getsubcategories(id):Promise<Object[]>{
    return this.http.get(this.baseUrl+ 'subcategories')
      .toPromise()
      .then(
        (response) => {
          this.respuesta = response;
          this.subcategories = JSON.parse(this.respuesta._body);
         return this.subcategories;
        }

      ).catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}


