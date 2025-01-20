import { Component, OnInit } from '@angular/core';
import { BrawlStarsService } from '../../services/brawl-stars.service';
import { List } from '../../interfaces/brawlers.interface';

@Component({
  selector: 'brawl-stars-brawl-starts-page',
  standalone: false,

  templateUrl: './brawl-starts-page.component.html',
  styleUrl: './brawl-starts-page.component.css',
})
export class BrawlStartsPageComponent implements OnInit {
  public brawlers: List[] = [];
  constructor(private brawlStarsService: BrawlStarsService) {}
  ngOnInit(): void {
    this.brawlStarsService.brawlers().subscribe((data) => {
      this.brawlers = data.list;
    });
  }
}
