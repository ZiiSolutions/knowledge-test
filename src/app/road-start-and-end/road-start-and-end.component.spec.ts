import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadStartAndEndComponent } from './road-start-and-end.component';

describe('RoadStartAndEndComponent', () => {
  let component: RoadStartAndEndComponent;
  let fixture: ComponentFixture<RoadStartAndEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadStartAndEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadStartAndEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
