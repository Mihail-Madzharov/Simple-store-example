import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCombineLatestComponent } from './rxjs-combine-latest.component';

describe('RxjsCombineLatestComponent', () => {
  let component: RxjsCombineLatestComponent;
  let fixture: ComponentFixture<RxjsCombineLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsCombineLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsCombineLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
