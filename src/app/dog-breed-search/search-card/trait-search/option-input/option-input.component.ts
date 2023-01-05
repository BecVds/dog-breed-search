import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-option-input',
  templateUrl: './option-input.component.html',
  styleUrls: ['./option-input.component.scss']
})
export class OptionInputComponent implements OnInit {

  selectedOption: string = '';

  @Input() criteria: string = '';
  @Output() onOptionSelection = new EventEmitter <string>();

  constructor() { }

  ngOnInit(): void {
  }

  onOptionSelect(a: string) {
    console.log('test' + a);
    this.selectedOption = a;
    this.onOptionSelection.emit(a);
  }

}
