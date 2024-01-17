import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStationeriesComponent } from './edit-stationeries.component';

describe('EditStationeriesComponent', () => {
  let component: EditStationeriesComponent;
  let fixture: ComponentFixture<EditStationeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditStationeriesComponent]
    });
    fixture = TestBed.createComponent(EditStationeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
