import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasDetailComponent } from './areas-detail.component';

describe('AreasDetailComponent', () => {
  let component: AreasDetailComponent;
  let fixture: ComponentFixture<AreasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
