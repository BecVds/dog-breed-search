import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RangeInputValues } from '../../../../data-models/range-input-data';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss']
})
export class RangeInputComponent implements OnInit {

  rangeInputValues: RangeInputValues = {} as RangeInputValues;

  @Input() criteria: string = '';
  @Output() onRangeSelection = new EventEmitter<RangeInputValues>();

  constructor() { }

  ngOnInit(): void {
    this.initSliderValue();
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  onSliderChange(): void {
    this.onRangeSelection.emit(this.rangeInputValues);
  }

  private initSliderValue(): void {
    this.rangeInputValues = {minValue: 0, maxValue: 60};
    this.onRangeSelection.emit(this.rangeInputValues);
  }
}
