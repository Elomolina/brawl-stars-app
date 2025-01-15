import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModesPageComponent } from './game-modes-page.component';

describe('GameModesPageComponent', () => {
  let component: GameModesPageComponent;
  let fixture: ComponentFixture<GameModesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameModesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameModesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
