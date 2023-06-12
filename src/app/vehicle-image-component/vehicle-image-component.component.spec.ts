import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleImageComponentComponent } from './vehicle-image-component.component';

describe('VehicleImageComponentComponent', () => {
  let component: VehicleImageComponentComponent;
  let fixture: ComponentFixture<VehicleImageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleImageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
