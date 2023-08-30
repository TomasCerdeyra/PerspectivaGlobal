import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollOnlyResponseComponent } from './poll-only-response.component';

describe('PollOnlyResponseComponent', () => {
  let component: PollOnlyResponseComponent;
  let fixture: ComponentFixture<PollOnlyResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PollOnlyResponseComponent]
    });
    fixture = TestBed.createComponent(PollOnlyResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
