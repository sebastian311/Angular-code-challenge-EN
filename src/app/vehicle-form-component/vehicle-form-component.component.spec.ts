import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFormComponentComponent } from './vehicle-form-component.component';

describe('VehicleFormComponentComponent', () => {
  let component: VehicleFormComponentComponent;
  let fixture: ComponentFixture<VehicleFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
