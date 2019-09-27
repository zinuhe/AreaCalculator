import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasSearchComponent } from './areas-search.component';

describe('AreasSearchComponent', () => {
  let component: AreasSearchComponent;
  let fixture: ComponentFixture<AreasSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
