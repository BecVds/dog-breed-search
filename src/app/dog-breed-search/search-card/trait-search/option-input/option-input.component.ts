import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-option-input',
  templateUrl: './option-input.component.html',
  styleUrls: ['./option-input.component.scss']
})
export class OptionInputComponent implements OnInit {

  isChecked: boolean = true;
  selectedOption: string = '';

  @Input() criteria: string = '';
  @Output() onOptionSelection = new EventEmitter <string>();
  @Output() onSlideToggleSelection = new EventEmitter <boolean>()

  constructor() { }

  ngOnInit(): void {
    this.initOptions();
  }

  onOptionSelect(a: string) {
    this.selectedOption = a;
    this.onOptionSelection.emit(a);
  }

  onSlideToggle(){
    this.onSlideToggleSelection.emit(this.isChecked);
  }

  private initOptions(): void {
    this.isChecked = true;
    this.onSlideToggleSelection.emit(this.isChecked);
    this.selectedOption = '0';
    this.onOptionSelection.emit(this.selectedOption);
  }

}
