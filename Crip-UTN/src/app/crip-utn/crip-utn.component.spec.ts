import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CripUTNComponent } from './crip-utn.component';

describe('CripUTNComponent', () => {
  let component: CripUTNComponent;
  let fixture: ComponentFixture<CripUTNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CripUTNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CripUTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
