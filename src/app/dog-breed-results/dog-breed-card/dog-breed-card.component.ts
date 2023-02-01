import { Component, OnInit, Input } from '@angular/core';
import { DogDetails } from 'src/app/data-models/dog-details-data';

@Component({
  selector: 'app-dog-breed-card',
  templateUrl: './dog-breed-card.component.html',
  styleUrls: ['./dog-breed-card.component.scss']
})
export class DogBreedCardComponent implements OnInit {

  @Input() breed: DogDetails = {} as DogDetails;

  constructor(){}

  ngOnInit(): void {
  }
}
