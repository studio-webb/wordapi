import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class WordsService {

  results;

  constructor(private _http: Http) {
  }

  getSynonyms(word: string, type: string) {
    return this._http
      .get(`/api/v1/wordapi/${word}/${type}`)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    this.results = res.json();
    return this.results;
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
