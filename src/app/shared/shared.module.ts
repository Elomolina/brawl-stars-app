import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    CardComponent,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavBarComponent,
    FooterComponent,
    CardComponent,
    LoadingSpinnerComponent,
  ],
})
export class SharedModule {}
