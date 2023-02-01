import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { DogDetails } from '../data-models/dog-details-data';
import { environment } from 'src/environments/environment';
import { DogTraitsData } from '../data-models/dog-traits-data';
import { DogSearchOptionsData } from '../data-models/dog-search-options-data';

@Injectable({
  providedIn: 'root'
})
export class DogBreedSearchApiService {
  private readonly HTTP_HEADERS: HttpHeaders = new HttpHeaders().set('X-Api-Key', environment.apiKey);
  private readonly URL: string = 'https://api.api-ninjas.com/v1/dogs';
  private offset: number = 0;

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  getDogByBreedName(name: string): Observable<DogDetails[]> {
    let params: HttpParams = new HttpParams()
    .set('name', name);

    return this.httpClient.get<DogDetails[]>(this.URL, {
      params,
      headers: this.HTTP_HEADERS
    })
  }
  getDogsByTraits(dogTraits: DogTraitsData, searchOptions: DogSearchOptionsData): Observable<DogDetails[]> {
    let params: HttpParams = new HttpParams();

    params = params
    .append('min_height', dogTraits.height.minValue)
    .append('max_height', dogTraits.height.maxValue)
    .append('max_weight', dogTraits.weight.maxValue)
    .append('min_weight', dogTraits.weight.minValue)
    .append('offset', this.offset);

    if (searchOptions.protectiveness) {
      params = params.append('protectiveness', dogTraits.protectiveness)
    }
    if (searchOptions.barking) {
      params = params.append('barking', dogTraits.barking)
    }
    if (searchOptions.energy) {
      params = params.append('energy', dogTraits.energy)
    }
    if (searchOptions.trainability) {
      params = params.append('trainability', dogTraits.trainability)
    }

    return this.httpClient.get<DogDetails[]>(this.URL, {
      params,
      headers: this.HTTP_HEADERS
    })

  }
}
