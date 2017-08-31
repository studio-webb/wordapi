import { Component, OnInit, ElementRef, Renderer, Input, Output } from '@angular/core';
import { WordsService } from '../../services/words.service'
import { SynonymsComponent } from '../synonyms/synonyms.component';


@Component({
  selector: 'app-input-word',
  templateUrl: './input-word.component.html',
  styleUrls: ['./input-word.component.css']
})
export class InputWordComponent implements OnInit {
  @Output() synonym
  _synonym = '';
  synonyms = [];

  constructor(private elRef: ElementRef, private renderer: Renderer, private _wordsService: WordsService) {}

  ngOnInit() {
    let typingTimer;
    let input = this.elRef.nativeElement.querySelector('#search-box');
    let val = '';
    this.renderer.listen(input, 'keyup', (event) => {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        if (val !== input.value) {
          this.getWords(input.value, 'synonyms')
          val = input.value;
        }
      }, 400);
    });
  }

  getWords(word: string, type: string) {
    if (word && word.length > 1) {
      this._wordsService.getSynonyms(word, type)
        .subscribe(
          req => {
            if (req.synonyms && req.synonyms.length > 0) {
              this.synonyms = req.synonyms;
            } else {
              this.synonyms = [];
            }
          }
        )
    }
  }

  changeInput($event) {
    this._synonym = $event;
  }
}
