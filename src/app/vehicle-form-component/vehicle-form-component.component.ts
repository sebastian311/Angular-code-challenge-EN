import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LicensePlateFormatPipe } from '../licensePlateFormatPipe';
import { kentekenValidator } from '../kentekenValidator';

@Component({
  selector: 'app-vehicle-form-component',
  templateUrl: './vehicle-form-component.component.html',
  styleUrls: ['./vehicle-form-component.component.css']
})
export class VehicleFormComponentComponent implements OnInit {
  @Input() dropdownTypeOptions!: string[]; // type
  @Input() takeDefault!: boolean; // type
  @Output() optionTypeSelected = new EventEmitter<string>(); // type

  @Input() dropdownSubtypeOptions!: string[]; // subtype
  @Output() optionSubtypeSelected = new EventEmitter<string>(); // subtype

  displaySubtype: boolean = true;
  displayKentekenError: boolean = false;

  licensePlateFormatPipe: LicensePlateFormatPipe = new LicensePlateFormatPipe;

  vehicleForm: FormGroup; // Initialize the FormGroup here

  constructor() {
    this.vehicleForm = new FormGroup({
      vehicleType: new FormControl(null, Validators.required),
      vehicleSubtype: new FormControl({ value: null, disabled: true }, Validators.required),
      kenteken: new FormControl(null, [Validators.required, kentekenValidator])
    });
  }

  ngOnInit(): void {
    if (this.takeDefault && this.dropdownTypeOptions.length > 0) {
      this.vehicleForm.get('vehicleType')!.setValue(this.dropdownTypeOptions[0]);
    } /* else {
      this.vehicleForm.get('vehicleType')!.setValue(this.dropdownTypeOptions[1]);
    } */ // This else is for when we have a backend. It will give the alternative value (not the default).
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes.dropdownSubtypeOptions.currentValue.length == 0 ) {
      this.displaySubtype = false;
    } else {
      this.displaySubtype = true;
    }
  }

  formatLicensePlate(licensePlate: string): string {
    return this.licensePlateFormatPipe.transform(licensePlate);
  }

  selectType(ev: any) {
    this.optionTypeSelected.emit(ev.target.value);
  }

  selectSubtype(ev: any) {
    this.optionSubtypeSelected.emit(ev.target.value);
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      this.displayKentekenError = false;
    } else {
      this.displayKentekenError = true;
    }
  }
}
