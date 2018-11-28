import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDataFlowComponent } from './fetch-data-flow.component';

describe('FetchDataFlowComponent', () => {
  let component: FetchDataFlowComponent;
  let fixture: ComponentFixture<FetchDataFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchDataFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDataFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
