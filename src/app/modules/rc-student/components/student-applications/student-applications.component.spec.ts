import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentApplicationsComponent} from './student-applications.component';

describe('StudentApplicationsComponent', () => {
  let component: StudentApplicationsComponent;
  let fixture: ComponentFixture<StudentApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentApplicationsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
