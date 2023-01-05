import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trait-search',
  templateUrl: './trait-search.component.html',
  styleUrls: ['./trait-search.component.scss']
})
export class TraitSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testFunction(option: string){
    console.log(option)
  }



}
