import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class WordsService {
  
  results: any[];

  constructor(private _http: Http) {
    this.results = [];
  }

  getSynonyms(word: string, type: string) {
    return this._http
      .get(`/api/v1/wordapi/${word}/${type}`)
      .map(res => res.json())
      .catch((err: any) => {
        return Observable.throw(err.message);
      });
  }
}
