import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild } from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy   {

  @Input() bindable = 1000;

  @ContentChild('boundCOntent')
  boundContent: HTMLElement;

  constructor() {
   }

   ngOnChanges() {
     this.log('ngOnChanges');
   }

    ngOnInit() {
      this.log('ngOnInit');
    }

    ngDoCheck() {
      this.log('ngDoCheck');

    }

    ngAfterContentInit() {
      this.log('ngAfterContentInit');
      console.log(this.boundContent);
    }

    ngAfterContentChecked() {
this.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
this.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
this.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
this.log('ngOnDestroy');
    }

    private log(hook: string) {
console.log(hook);
    }
}
