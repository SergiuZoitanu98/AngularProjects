import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUncofirmedComponent } from './modal-uncofirmed.component';

describe('ModalUncofirmedComponent', () => {
  let component: ModalUncofirmedComponent;
  let fixture: ComponentFixture<ModalUncofirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUncofirmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUncofirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
