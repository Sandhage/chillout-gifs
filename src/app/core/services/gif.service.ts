import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ObjectUnsubscribedError } from 'rxjs/util/ObjectUnsubscribedError';
import { GifClass } from '../models/gif.model';

@Injectable()
export class GifService {

  constructor(private http: Http) { }

  requestGifsFromReddit(): Observable<GifClass[]> {
    const url = `https://www.reddit.com/r/relaxinggifs/new.json`;
    
    const result = this.http.get(url)
      .map((res: Response) => { return res.json()['data'].children })
      .catch((error: any) => Observable.throw(error || 'WHOOPSIE'));

    return result;
  }

}