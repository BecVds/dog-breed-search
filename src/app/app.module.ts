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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DogBreedResultsComponent } from './dog-breed-results/dog-breed-results.component';
import { DogBreedCardComponent } from './dog-breed-results/dog-breed-card/dog-breed-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DogBreedSearchComponent,
    SearchCardComponent,
    NameSearchComponent,
    TraitSearchComponent,
    BackgroundComponent,
    RangeInputComponent,
    OptionInputComponent,
    DogBreedResultsComponent,
    DogBreedCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    MatSliderModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
