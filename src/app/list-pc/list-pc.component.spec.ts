import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPcComponent } from './list-pc.component';

describe('ListPcComponent', () => {
  let component: ListPcComponent;
  let fixture: ComponentFixture<ListPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
