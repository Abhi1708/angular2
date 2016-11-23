import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'droopdownvalue',
  host: {
    'class': 'DroopdownValue'
  },
  template: `<ng-content></ng-content>`
})
export class DroopdownValue {
  value:string;
  label:string;

  constructor(value:string,label:string) {
    this.value = value;
    this.label = label;
  }
}

@Component({
  selector: 'droopdown',
  template: `
    <ul>
      <li *ngFor="let value of values" (click)="selectItem(value.value)">{{value.label}}</li>
    </ul>
  `
})
export class DroopdownComponent {
  @Input()
  values: DroopdownValue[];

  @Output() select = new EventEmitter<string>();
  

  

  selectItem(value) {
    this.select.emit(value);
  }
}