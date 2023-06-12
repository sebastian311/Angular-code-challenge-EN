import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Output() selectedTypeForImage = new EventEmitter<string>();
  type!: string;
  
  vehicleTypes = ['Auto', 'Motor', 'Scooter'];
  vehicleSubtypes = {
    auto: ['Hatchback', 'Sedan', 'Station', 'Cabriolet', 'Coupé', 'MPV', 'Terreinauto'],
    motor: ['All-road', 'Naked', 'Enduro', 'Race', 'Toermotor', 'Chopper', 'Zijspan'],
    scooter: []
  };
  subtypePath!: string[];

  takeDefaultValue!: boolean; // code slightly changes when there is a backend involved

  ngOnInit(): void {
    // When there is a backend, check for a saved value.
    this.takeDefaultValue = true;

    if ( this.takeDefaultValue ) {
      this.subtypePath = this.vehicleSubtypes.auto;
    } else {
      this.subtypePath = this.vehicleSubtypes.motor
    }
  }
  
  updateFormValue(opt: string) {
    switch (opt) {
      case 'Auto':
        this.subtypePath = this.vehicleSubtypes.auto;
        break;
      case 'Motor':
        this.subtypePath = this.vehicleSubtypes.motor;
        break;
      case 'Scooter':
        this.subtypePath = this.vehicleSubtypes.scooter;
        break;
      default:
        this.subtypePath = [];
        break;
    }
    
    this.type = opt;
    // Emit the selected type for the image component
    this.selectedTypeForImage.emit(opt);
  }

  onOptionTypeSelected(opt: string) {
    this.updateFormValue(opt);
    console.log('Selected type: ', opt);
  }

  onOptionSubtypeSelected(opt: string) {
    console.log('Selected subtype: ', opt);
  }
}
