import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrawlStarsService } from '../../services/brawl-stars.service';
import { List } from '../../interfaces/brawlers.interface';

@Component({
  selector: 'app-brawler-page',
  standalone: false,

  templateUrl: './brawler-page.component.html',
  styleUrl: './brawler-page.component.css',
})
export class BrawlerPageComponent implements OnInit {
  public brawler!: List;
  constructor(
    private activatedRoute: ActivatedRoute,
    private brawlStarsService: BrawlStarsService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.brawlStarsService.getBrawlerById(id).subscribe((data) => {
        console.log(data);

        this.brawler = data;
      });
    });
  }
}
