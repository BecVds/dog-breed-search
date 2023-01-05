import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogBreedSearchComponent } from './dog-breed-search/dog-breed-search.component';
import { SearchCardComponent } from './dog-breed-search/search-card/search-card.component';
import { NameSearchComponent } from './dog-breed-search/search-card/name-search/name-search.component';
import { TraitSearchComponent } from './dog-breed-search/search-card/trait-search/trait-search.component';
import { BackgroundComponent } from './dog-breed-search/background/background.component';
import { RangeInputComponent } from './dog-breed-search/search-card/trait-search/range-input/range-input.component';
import { OptionInputComponent } from './dog-breed-search/search-card/trait-search/option-input/option-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DogBreedSearchComponent,
    SearchCardComponent,
    NameSearchComponent,
    TraitSearchComponent,
    BackgroundComponent,
    RangeInputComponent,
    OptionInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
