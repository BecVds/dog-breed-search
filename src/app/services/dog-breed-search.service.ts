import { Injectable } from '@angular/core';
import { DogSearchOptionsData } from '../data-models/dog-search-options-data';
import { DogTraitsData } from '../data-models/dog-traits-data';

@Injectable({
  providedIn: 'root'
})
export class DogBreedSearchService {
  private _dogBreed: string = '';
  private _dogTraits: DogTraitsData = {} as DogTraitsData;
  private _searchOptions: DogSearchOptionsData = {} as DogSearchOptionsData;

  get dogBreed(): string {
    return this._dogBreed;
  }

  get dogTraits(): DogTraitsData {
    return this._dogTraits
  }

  get searchOptions(): DogSearchOptionsData {
    return this._searchOptions
  }

  constructor() { }

  captureDogBreedData(dogTraits: DogTraitsData){
    this._dogTraits = dogTraits;
  }

  captureSearchOptions(searchOptions: DogSearchOptionsData){
    this._searchOptions = searchOptions;
  }

  captureBreedName(breedName: string){
    this._dogBreed = breedName;
  }
}
