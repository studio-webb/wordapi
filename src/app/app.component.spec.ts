import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputWordComponent } from './components/input-word/input-word.component';
import { SynonymsComponent } from './components/synonyms/synonyms.component';
import { WordsService } from './services/words.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputWordComponent,
        SynonymsComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [WordsService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Word API App'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Word API App');
  }));
});

