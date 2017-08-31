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
      .map(res => {
        this.results = res.json();
        console.log(this.results);
        return this.results;
      })
      // .subscribe(res => console.log(res))
      .catch((err: any) => {
        return Observable.throw(err.message);
      });
  }
}
