import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogBreedResultsComponent } from './dog-breed-results/dog-breed-results.component';
import { DogBreedSearchComponent } from './dog-breed-search/dog-breed-search.component';

const routes: Routes = [
  {
    path: '',
    component: DogBreedSearchComponent
  },
  {
    path: 'search-results',
    component: DogBreedResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
