import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: `
    <fa-databinding></fa-databinding>
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
    	<p #voundContent>{{test}}</p>
    </fa-lifecycle>
    <button (click)="delete = true">CLick to Delete</button>
    
    <button (click)="test = 'change value'">CLick to change Content</button>
    
    <button (click)="boundValue = 2000">CLick to change Binding</button>

    <ngb-dropdown [open]="isOpen">
  <button id="dropdown-button" class="btn btn-primary dropdown-toggle" (click)="toggleDropdown()">
    Toggle dropdown
  </button>
  <ngb-dropdown-menu aria-labelledby="dropdown-button">
    <ul>
     <li *ngFor ="let menu of dropdownMenu">
        <a href>{{menu.text}}</a>
    </ul>
  </ngb-dropdown-menu>
</ngb-dropdown>
<br><br><br>

<droopdown [values]="droopdownValues" (select)="action($event.value)">
  <button >drop</button>
</droopdown>
  `,
  
})
export class AppComponent {
	isOpen: boolean = false;
  
  dropdownMenu: Array<any> = [
    {
      text: 'Dynamic 1',
    },
    {
      text: 'Dynamic 2'
    }
  ];
  
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
	delete = false;
	test='starting value';
	boundValue = 1000
}


