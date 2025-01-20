import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrawlStartsPageComponent } from './brawl-stars/pages/brawl-starts-page/brawl-starts-page.component';

const routes: Routes = [
  {
    path: 'brawl-stars',
    loadChildren: () =>
      import('./brawl-stars/brawl-stars.module').then(
        (m) => m.BrawlStarsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'brawl-stars',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
