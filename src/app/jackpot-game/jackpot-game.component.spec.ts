import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotGameComponent } from './jackpot-game.component';

describe('JackpotGameComponent', () => {
  let component: JackpotGameComponent;
  let fixture: ComponentFixture<JackpotGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackpotGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
