import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTelephoneComponent } from './list-telephone.component';

describe('ListTelephoneComponent', () => {
  let component: ListTelephoneComponent;
  let fixture: ComponentFixture<ListTelephoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTelephoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
