import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../../app.component';
import { InputWordComponent } from './input-word.component';
import { SynonymsComponent } from '../synonyms/synonyms.component';
import { WordsService } from '../../services/words.service'

describe('InputWordComponent', () => {
  let component: InputWordComponent;
  let fixture: ComponentFixture<InputWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputWordComponent,
        SynonymsComponent
      ],
      providers: [WordsService],
      imports: [
        HttpModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should change input value', () => {
    let newValue = 'new value';
    component._synonym = '';

    component.changeInput(newValue);

    expect(component._synonym).toBe(newValue);
  });
});
