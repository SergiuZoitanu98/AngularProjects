import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaClientiComponent } from './ricerca-clienti.component';

describe('RicercaClientiComponent', () => {
  let component: RicercaClientiComponent;
  let fixture: ComponentFixture<RicercaClientiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaClientiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
