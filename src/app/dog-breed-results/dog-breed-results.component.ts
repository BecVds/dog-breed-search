import { Component, OnInit } from '@angular/core';
import { DogDetails } from '../data-models/dog-details-data';
import { DogBreedDataService } from '../services/dog-breed-data.service';

@Component({
  selector: 'app-dog-breed-results',
  templateUrl: './dog-breed-results.component.html',
  styleUrls: ['./dog-breed-results.component.scss']
})
export class DogBreedResultsComponent implements OnInit {

  dogBreeds: DogDetails[] = [];

  constructor(
    private readonly dogBreedDataService: DogBreedDataService,
  ) {}

  ngOnInit(): void {
    this.initBreedsData();
  }

  initBreedsData(){
    this.dogBreeds = this.dogBreedDataService.dogBreeds;
    console.log(this.dogBreeds)
  }


}
