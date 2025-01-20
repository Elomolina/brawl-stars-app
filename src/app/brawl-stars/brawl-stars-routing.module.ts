import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrawlStartsPageComponent } from './pages/brawl-starts-page/brawl-starts-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { GameModesPageComponent } from './pages/game-modes-page/game-modes-page.component';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';
import { BrawlerPageComponent } from './pages/brawler-page/brawler-page.component';

export const routes: Routes = [
  {
    path: '',
    component: BrawlStartsPageComponent,
  },
  {
    path: 'mapas',
    component: MapsPageComponent,
  },
  {
    path: 'eventos',
    component: EventsPageComponent,
  },
  {
    path: 'modos-de-juego',
    component: GameModesPageComponent,
  },
  {
    path: 'brawler/:id',
    component: BrawlerPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrawlStarsRoutingModule {}
