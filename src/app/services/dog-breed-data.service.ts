import { Injectable } from '@angular/core';
import { DogDetails } from '../data-models/dog-details-data';

@Injectable({
  providedIn: 'root'
})
export class DogBreedDataService {

  private _dogBreeds: DogDetails[] = []

  get dogBreeds() {
    return this._dogBreeds
  }

  captureDogBreedsData(dogBreeds: DogDetails[]){
    this._dogBreeds = dogBreeds;
  }

}
