import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTechComponent } from './details-tech.component';

describe('DetailsTechComponent', () => {
  let component: DetailsTechComponent;
  let fixture: ComponentFixture<DetailsTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
