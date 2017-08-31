import { Component } from '@angular/core';
import { WordsService } from './services/words.service'
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
  providers: [WordsService]
})
export class AppComponent {
  
  constructor(private titleService: Title){
    this.titleService.setTitle( this.title );
  }

  title = 'Word API App';

}
