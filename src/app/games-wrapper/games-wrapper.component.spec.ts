import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesWrapperComponent } from './games-wrapper.component';

describe('GamesWrapperComponent', () => {
  let component: GamesWrapperComponent;
  let fixture: ComponentFixture<GamesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
