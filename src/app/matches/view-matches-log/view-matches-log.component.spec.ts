import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatchesLogComponent } from './view-matches-log.component';

describe('ViewMatchesLogComponent', () => {
  let component: ViewMatchesLogComponent;
  let fixture: ComponentFixture<ViewMatchesLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMatchesLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMatchesLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
