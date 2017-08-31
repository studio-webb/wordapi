import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputWordComponent } from './components/input-word/input-word.component';
import { SynonymsComponent } from './components/synonyms/synonyms.component';

@NgModule({
  declarations: [
    AppComponent,
    InputWordComponent,
    SynonymsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
