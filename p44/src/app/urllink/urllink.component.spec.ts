import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrllinkComponent } from './urllink.component';

describe('UrllinkComponent', () => {
  let component: UrllinkComponent;
  let fixture: ComponentFixture<UrllinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrllinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrllinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
