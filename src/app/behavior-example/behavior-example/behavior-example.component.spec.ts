import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorExampleComponent } from './behavior-example.component';

describe('BehaviorExampleComponent', () => {
  let component: BehaviorExampleComponent;
  let fixture: ComponentFixture<BehaviorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
