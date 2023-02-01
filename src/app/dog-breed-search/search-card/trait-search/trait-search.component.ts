import { Component, OnInit } from '@angular/core';
import { DogSearchOptionsData } from 'src/app/data-models/dog-search-options-data';
import { DogTraitsData } from 'src/app/data-models/dog-traits-data';
import { DogBreedSearchService } from 'src/app/services/dog-breed-search.service';
import { RangeInputValues } from '../../../data-models/range-input-data';

@Component({
  selector: 'app-trait-search',
  templateUrl: './trait-search.component.html',
  styleUrls: ['./trait-search.component.scss']
})
export class TraitSearchComponent implements OnInit {

  dogTraits: DogTraitsData = {
    barking: 0,
    energy: 0,
    protectiveness: 0,
    trainability: 0,
    height: {minValue:0, maxValue: 100},
    weight: {minValue:0, maxValue: 100},
  }

  dogSearchOptions: DogSearchOptionsData = {
    barking: true,
    energy: true,
    protectiveness: true,
    trainability: true,
  }

  constructor(
    private readonly dogBreedSearchService: DogBreedSearchService
  ) { }

  ngOnInit(): void {
  }

  optionSelect(option: string, criteria: string){
    if (criteria === 'Protectiveness'){
      this.dogTraits.protectiveness = parseInt(option);
    } else if (criteria === 'Barking'){
      this.dogTraits.barking = parseInt(option);
    } else if (criteria === 'Energy'){
      this.dogTraits.energy = parseInt(option);
    } else if (criteria === 'Trainability'){
      this.dogTraits.trainability = parseInt(option);
    }
    this.dogBreedSearchService.captureDogBreedData(this.dogTraits);
  }

  valueSelect(values: RangeInputValues, criteria: string){
    if (criteria === 'Height'){
      this.dogTraits.height = values;
    } else if (criteria === 'Weight'){
      this.dogTraits.weight = values;
    }
    this.dogBreedSearchService.captureDogBreedData(this.dogTraits);
  }

  optionToggle(toggle: boolean, criteria: string){
    if (criteria === 'Protectiveness'){
      this.dogSearchOptions.protectiveness = toggle;
    } else if (criteria === 'Barking'){
      this.dogSearchOptions.barking = toggle;
    } else if (criteria === 'Energy'){
      this.dogSearchOptions.energy = toggle;
    } else if (criteria === 'Trainability'){
      this.dogSearchOptions.trainability = toggle;
    }
    this.dogBreedSearchService.captureSearchOptions(this.dogSearchOptions);
  }

}
