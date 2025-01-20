import { Component, Input } from '@angular/core';
import { List } from '../../../brawl-stars/interfaces/brawlers.interface';

@Component({
  selector: 'shared-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  public isLoaded: boolean = false;
  @Input()
  public brawler!: List;
  loaded() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 500);
  }
}
