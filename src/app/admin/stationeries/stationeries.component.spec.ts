import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationeriesComponent } from './stationeries.component';

describe('StationeriesComponent', () => {
  let component: StationeriesComponent;
  let fixture: ComponentFixture<StationeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StationeriesComponent]
    });
    fixture = TestBed.createComponent(StationeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
