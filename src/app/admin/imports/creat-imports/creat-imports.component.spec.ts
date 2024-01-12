import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatImportsComponent } from './creat-imports.component';

describe('CreatImportsComponent', () => {
  let component: CreatImportsComponent;
  let fixture: ComponentFixture<CreatImportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatImportsComponent]
    });
    fixture = TestBed.createComponent(CreatImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
