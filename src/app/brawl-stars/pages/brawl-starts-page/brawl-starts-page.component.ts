import { Component, OnInit } from '@angular/core';
import { BrawlStarsService } from '../../services/brawl-stars.service';
import { List } from '../../interfaces/brawlers.interface';
import { map } from 'rxjs';

@Component({
  selector: 'brawl-stars-brawl-starts-page',
  standalone: false,

  templateUrl: './brawl-starts-page.component.html',
  styleUrl: './brawl-starts-page.component.css',
})
export class BrawlStartsPageComponent implements OnInit {
  public brawlers: List[] = [];
  public brawler: string = '';
  constructor(private brawlStarsService: BrawlStarsService) {}
  ngOnInit(): void {
    this.brawlStarsService.brawlers().subscribe((data) => {
      this.brawlers = data.list;
    });
  }
  brawlSearch(brawler: string) {
    this.brawler = brawler;
    this.brawlStarsService
      .brawlers()
      .pipe(
        map((brawlers) =>
          //bring only the brawlers that match the search
          brawlers.list.filter((data) =>
            data.name.toLowerCase().includes(this.brawler.toLowerCase())
          )
        )
      )
      .subscribe((data) => {
        this.brawlers = data;
      });
  }
}
