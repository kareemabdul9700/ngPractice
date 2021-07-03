import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclhookComponent } from './lifecyclhook.component';

describe('LifecyclhookComponent', () => {
  let component: LifecyclhookComponent;
  let fixture: ComponentFixture<LifecyclhookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclhookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
