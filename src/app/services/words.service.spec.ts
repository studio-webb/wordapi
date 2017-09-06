import { TestBed, fakeAsync, inject, tick } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend, ResponseOptionsArgs, RequestMethod, BaseRequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { WordsService } from './words.service';

describe('WordsService', () => {
  let service: WordsService;
  let backend: MockBackend;

  const response = {
    word: 'tool',
    synonyms:
    ['joyride',
      'tool around',
      'instrument',
      'creature',
      'puppet',
      'cock',
      'dick',
      'pecker',
      'prick',
      'putz',
      'shaft']
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WordsService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend, defaultOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });

    service = TestBed.get(WordsService);
    backend = TestBed.get(MockBackend);
  });

  it('should be created', inject([WordsService, MockBackend], (service: WordsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return response from WordsService', fakeAsync(() => {

    backend.connections.subscribe((conn: MockConnection) => {
      conn.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    service.getSynonyms('tool', 'synonyms').subscribe((data) => {
      expect(data.word).toBe(response.word);
      expect(data.synonyms.length).toBe(response.synonyms.length);
    });
  }));  
});
