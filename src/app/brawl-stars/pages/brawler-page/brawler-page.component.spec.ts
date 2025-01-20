import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrawlerPageComponent } from './brawler-page.component';

describe('BrawlerPageComponent', () => {
  let component: BrawlerPageComponent;
  let fixture: ComponentFixture<BrawlerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrawlerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrawlerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
