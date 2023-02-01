import { Component, OnInit } from '@angular/core';
import { DogBreedSearchService } from 'src/app/services/dog-breed-search.service';

@Component({
  selector: 'app-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.scss']
})
export class NameSearchComponent implements OnInit {

  breedName: string = '';

  constructor(
    private readonly dogBreedSearchService: DogBreedSearchService
  ) { }

  ngOnInit(): void {
  }

  captureBreedName() {
    this.dogBreedSearchService.captureBreedName(this.breedName)
  }
}
