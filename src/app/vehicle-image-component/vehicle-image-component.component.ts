import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vehicle-image-component',
  templateUrl: './vehicle-image-component.component.html',
  styleUrls: ['./vehicle-image-component.component.css']
})
export class VehicleImageComponentComponent implements OnInit {
  @Input() selectedTypeForImage!: string;
  imagePath!: string;

  ngOnInit(): void {
    this.updateImagePath();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedTypeForImage) {
      this.updateImagePath();
    }
  }

  updateImagePath(): void {
    switch (this.selectedTypeForImage) {
      case 'Auto':
        this.imagePath = './assets/auto.jpg';
        break;
      case 'Motor':
        this.imagePath = './assets/motor.jpg';
        break;
      case 'Scooter':
        this.imagePath = './assets/scooter.jpg';
        break;
      default:
        this.imagePath = './assets/auto.jpg';
        break;
    }
  }
}
