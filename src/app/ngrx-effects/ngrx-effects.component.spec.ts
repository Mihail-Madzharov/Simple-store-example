import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxEffectsComponent } from './ngrx-effects.component';

describe('NgrxEffectsComponent', () => {
  let component: NgrxEffectsComponent;
  let fixture: ComponentFixture<NgrxEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
