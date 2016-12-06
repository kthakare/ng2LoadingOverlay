/**
 * Created by kthakare on 11/30/2016.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Page } from './page';
import { PAGES } from './page-titles';
import { INFO } from './page-titles';
import { CONTACT } from './page-titles';

@Injectable()
export class Service {

  private headers = new Headers({'Content-Type': 'application/json'});
  private pagesUrl = 'app/pages';  // URL to web api

  constructor(private http: Http) { }

  getPages(): Promise<Page[]> {

      //return Promise.resolve(PAGES);
    return new Promise<Page[]>(resolve =>
      setTimeout(resolve, 5000)) // delay 2 seconds
      .then(() => PAGES);

  }

  /*getPages(): Promise<Page[]> {
    return this.http.get(this.pagesUrl)
      .toPromise()
      .then(response => response.json().data as Page[])
      .catch(this.handleError);
  }*/

  getInfo(): Promise<Page[]> {
    //return Promise.resolve(INFO);
    return new Promise<Page[]>(resolve =>
      setTimeout(resolve, 5000)) // delay 2 seconds
      .then(() => INFO);
  }

  getContact(): Promise<Page[]> {
    //return Promise.resolve(CONTACT);
    return new Promise<Page[]>(resolve =>
      setTimeout(resolve, 5000)) // delay 2 seconds
      .then(() => CONTACT);
  }

  getPage(id: number): Promise<Page> {
    return this.getPages()
      .then(pages => pages.find(page => page.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

