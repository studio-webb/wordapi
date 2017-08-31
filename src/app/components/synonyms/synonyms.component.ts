import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.css'
]
})
export class SynonymsComponent implements OnInit {
  @Input() synonym: string;
  @Output() inputEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  changeInput() {
    this.inputEvent.emit(this.synonym);
  }
}
