import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleStoreComponent } from './simple-store.component';

describe('SimpleStoreComponent', () => {
  let component: SimpleStoreComponent;
  let fixture: ComponentFixture<SimpleStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
