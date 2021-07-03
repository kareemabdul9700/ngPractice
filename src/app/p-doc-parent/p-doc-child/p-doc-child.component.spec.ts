import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDocChildComponent } from './p-doc-child.component';

describe('PDocChildComponent', () => {
  let component: PDocChildComponent;
  let fixture: ComponentFixture<PDocChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDocChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDocChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
