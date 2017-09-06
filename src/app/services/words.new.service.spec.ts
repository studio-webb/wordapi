import { TestBed, inject } from '@angular/core/testing';
import { FakeBackend } from 'ngx-http-test';
import { WordsService } from './words.service';

describe('WordsService', () => {
  let service: WordsService;
  let backend: FakeBackend;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WordsService,
        FakeBackend.getProviders()
      ]
    });

    service = TestBed.get(WordsService);
    backend = TestBed.get(FakeBackend);
  });

  afterEach(() => {
    backend.verifyNoPendingRequests();
  });

  it('should be created', inject([WordsService, FakeBackend], () => {
    expect(service).toBeTruthy();
  }));

  it('should get response data WordsService service', (done) => {
    backend
      .expectGet('/api/v1/wordapi/tool/synonyms')
      .respond(response);

      service.getSynonyms('tool', 'synonyms').subscribe((res) => {
      expect(res).toEqual(response);
      done();
    });
  });

});
