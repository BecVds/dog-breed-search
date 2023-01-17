import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss']
})
export class RangeInputComponent implements OnInit {

  minValue = 40;
  maxValue = 60

  @Input() criteria: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
