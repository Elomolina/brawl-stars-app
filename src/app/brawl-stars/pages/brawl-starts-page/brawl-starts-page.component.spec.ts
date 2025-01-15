import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrawlStartsPageComponent } from './brawl-starts-page.component';

describe('BrawlStartsPageComponent', () => {
  let component: BrawlStartsPageComponent;
  let fixture: ComponentFixture<BrawlStartsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrawlStartsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrawlStartsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
