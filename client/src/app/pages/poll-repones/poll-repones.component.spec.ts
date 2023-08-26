import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollReponesComponent } from './poll-repones.component';

describe('PollReponesComponent', () => {
  let component: PollReponesComponent;
  let fixture: ComponentFixture<PollReponesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PollReponesComponent]
    });
    fixture = TestBed.createComponent(PollReponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
