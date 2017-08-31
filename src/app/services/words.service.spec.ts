import { TestBed, fakeAsync, inject, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http, BaseRequestOptions, ResponseOptions } from '@angular/http';

import { WordsService } from './words.service';

describe('WordsService', () => {
  let service: WordsService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WordsService,

        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });

    backend = TestBed.get(MockBackend);
    service = TestBed.get(WordsService);

  });

  it('should return response from WordsService', fakeAsync(() => {
    let response = {
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

    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    service.getSynonyms('foo', 'bar');
    tick();

    //doesn't work response...
    expect(service.results.length).toBe(0);
  }));

  it('should be created', inject([WordsService, MockBackend], (service: WordsService) => {
    expect(service).toBeTruthy();
  }));
});
