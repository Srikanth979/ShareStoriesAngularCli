import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/throw';

import { ISignUpForm, ILoginForm } from "../interfaces/appComponentInterfaces";

@Injectable()
export class HttpGlobalService {
  //public loginForm: ILoginForm;
  public heroesUrl = 'http://localhost:8080/greeting';  // URL to web API
  public headers = new Headers({ 'Content-Type': 'application/json' });
  public options = new RequestOptions({
    //method: RequestMethod.Post,
    headers: this.headers
    //url: this.heroesUrl
  });

  constructor (private http: Http) {}

  public signIn(loginForm: ILoginForm): Observable<any> {
    // Working get example
  /*   return this.http.get(this.heroesUrl)
                      .map(this.extractData)
                      .catch(this.handleError); */
  //  this.options.body = JSON.stringify(loginForm);
    return this.http.post(this.heroesUrl, JSON.stringify(loginForm), this.options)
                        .map(this.extractData)
                        .catch(this.handleError);
  }

  private extractData(res: Response) {
     return res.json();
  }

  private handleError (error: Response | any) {
      return Observable.throw(error.statusText);
  }

}
