import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrawlStartsPageComponent } from './pages/brawl-starts-page/brawl-starts-page.component';
import { BrawlStarsRoutingModule } from './brawl-stars-routing.module';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { SharedModule } from '../shared/shared.module';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';
import { GameModesPageComponent } from './pages/game-modes-page/game-modes-page.component';

@NgModule({
  declarations: [
    BrawlStartsPageComponent,
    EventsPageComponent,
    MapsPageComponent,
    GameModesPageComponent,
  ],
  imports: [CommonModule, BrawlStarsRoutingModule, SharedModule],
})
export class BrawlStarsModule {}
