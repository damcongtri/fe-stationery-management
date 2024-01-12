import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateImportDetailsComponent } from './create-import-details.component';

describe('CreateImportDetailsComponent', () => {
  let component: CreateImportDetailsComponent;
  let fixture: ComponentFixture<CreateImportDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateImportDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateImportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
