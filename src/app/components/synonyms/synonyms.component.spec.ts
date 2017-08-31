import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from '../../app.component';
import { SynonymsComponent } from './synonyms.component';
import { InputWordComponent } from '../input-word/input-word.component';

describe('SynonymsComponent', () => {
  let component: SynonymsComponent;
  let fixture: ComponentFixture<SynonymsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppComponent,
        InputWordComponent,
        SynonymsComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynonymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should send current value to parent component', () => {
    let synonym = 'some word';
    component.inputEvent.subscribe(event => {
      synonym = event;
    });
    component.changeInput();

    expect(synonym).not.toBeNull()
    expect(synonym).toBe(synonym);
  });
});
