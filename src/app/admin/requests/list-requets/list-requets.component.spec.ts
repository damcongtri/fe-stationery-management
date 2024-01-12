import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequetsComponent } from './list-requets.component';

describe('ListRequetsComponent', () => {
  let component: ListRequetsComponent;
  let fixture: ComponentFixture<ListRequetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRequetsComponent]
    });
    fixture = TestBed.createComponent(ListRequetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
