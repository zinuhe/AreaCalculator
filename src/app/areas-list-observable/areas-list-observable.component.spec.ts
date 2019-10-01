import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasListObservableComponent } from './areas-list-observable.component';

describe('AreasListObservableComponent', () => {
  let component: AreasListObservableComponent;
  let fixture: ComponentFixture<AreasListObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasListObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasListObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
