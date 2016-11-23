import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngb-dropdown',
  template: `
    <div class="dropdown" [class.open]="open">
    <ng-content></ng-content>
  </div>
  `,
  styles: []
})
export class NgbDropdown {

  @Input() private open: boolean;

}

@Component({
  selector: 'ngb-dropdown-menu',
  host: {
    'class': 'dropdown-menu'
  },
  template: `<ng-content></ng-content>`
})
export class NgbDropdownMenu { }

