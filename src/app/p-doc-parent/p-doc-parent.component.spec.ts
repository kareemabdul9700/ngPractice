import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDocParentComponent } from './p-doc-parent.component';

describe('PDocParentComponent', () => {
  let component: PDocParentComponent;
  let fixture: ComponentFixture<PDocParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDocParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDocParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
