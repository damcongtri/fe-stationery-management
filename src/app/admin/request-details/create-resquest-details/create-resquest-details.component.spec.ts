import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResquestDetailsComponent } from './create-resquest-details.component';

describe('CreateResquestDetailsComponent', () => {
  let component: CreateResquestDetailsComponent;
  let fixture: ComponentFixture<CreateResquestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateResquestDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateResquestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
