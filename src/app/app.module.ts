import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VehicleFormComponentComponent } from './vehicle-form-component/vehicle-form-component.component';
import { VehicleImageComponentComponent } from './vehicle-image-component/vehicle-image-component.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponentComponent,
    VehicleImageComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
