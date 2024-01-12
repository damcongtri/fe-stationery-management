import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStationeriesComponent } from './create-stationeries.component';

describe('CreateStationeriesComponent', () => {
  let component: CreateStationeriesComponent;
  let fixture: ComponentFixture<CreateStationeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateStationeriesComponent]
    });
    fixture = TestBed.createComponent(CreateStationeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
