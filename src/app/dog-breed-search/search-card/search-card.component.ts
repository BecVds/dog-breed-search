import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DogBreedDataService } from 'src/app/services/dog-breed-data.service';
import { DogBreedSearchApiService } from 'src/app/services/dog-breed-search-api.service';
import { DogBreedSearchService } from 'src/app/services/dog-breed-search.service';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit, OnDestroy {
  private _subscriptionControl: Subject<void> = new Subject<void>();

  searchOption = 'name'

  constructor(
    private readonly dogBreedSearchService: DogBreedSearchService,
    private readonly dogBreedApiService: DogBreedSearchApiService,
    private readonly dogBreedDataService: DogBreedDataService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._subscriptionControl.next();
    this._subscriptionControl.complete();
  }

  onSearch(): void {
    if (this.searchOption === 'trait'){
      console.log('trait search')
      this.dogBreedApiService.getDogsByTraits(
        this.dogBreedSearchService.dogTraits,
        this.dogBreedSearchService.searchOptions
      )
      .pipe(
        takeUntil(this._subscriptionControl)
      )
      .subscribe({
        next: (val => {
          this.dogBreedDataService.captureDogBreedsData(val);
          this.router.navigate(['/search-results'])
        }),
        error: (err => console.log(err))
      })

    } else if (this.searchOption === 'name'){
      this.dogBreedApiService.getDogByBreedName(this.dogBreedSearchService.dogBreed)
      .pipe(
        takeUntil(this._subscriptionControl)
      )
      .subscribe({
        next: (val => {
          this.dogBreedDataService.captureDogBreedsData(val);
          this.router.navigate(['/search-results'])
        }),
        error: (err => console.log(err))
      })
    }
  }
}
