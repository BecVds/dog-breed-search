import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss']
})
export class RangeInputComponent implements OnInit {

  @Input() criteria: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
