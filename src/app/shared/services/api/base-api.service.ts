import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constants } from '@shared/services/constants';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  private baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  protected getAll(route: string, action: string) : Observable<Array<any>> {
    return this.http
      .get(this.getUrl(`${route}/${action}`))
      .pipe(map(
        (_:Array<any>) => {
          return _ === null ? [] : _;
        },
        error => {
          this.handleError(error);
        }
      ));
  }

  protected getBy(route: string, action: string, params: HttpParams) {
    return this.http
      .get(this.getUrl(`${route}/${action}`), { params: params })
      .pipe(map(
        _ => {
          return _ === null ? [] : _;
        },
        error => {
          this.handleError(error);
        }
      ));
  }

  // Logs errors to the console
  protected handleError(error) {
    console.error(Constants.Errors.DefaultMessage, error);
  }

  // Forms the url from on our baseUrl, the route, and any params passed in
  protected getUrl(relativePath: string) {
    return `${this.baseUrl}${relativePath}`;
  }
}
