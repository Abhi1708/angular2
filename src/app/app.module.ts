import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
  

import { AppComponent } from './app.component';


import { DatabindingComponent } from "./databinding/databinding.component";
import { EventBindingComponent } from "./databinding/event-binding.component";
import { PropertyBindingComponent } from "./databinding/property-binding.component";
import { TwoWayBindingComponent } from "./databinding/two-way-binding.component";
import { LifecycleComponent } from './lifecycle.component';
import {NgbDropdown, NgbDropdownMenu} from './dropdown.component';
import {DroopdownComponent, DroopdownValue} from './droopdown.component';



@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifecycleComponent,
    NgbDropdown, NgbDropdownMenu,
    DroopdownComponent, DroopdownValue
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
