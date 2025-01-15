import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brawler } from '../interfaces/brawlers.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrawlStarsService {
  constructor(private httpClient: HttpClient) {}

  public url: string = 'https://api.brawlify.com/v1/';
  public brawlers(): Observable<Brawler> {
    const apiUrl = `${this.url}/brawlers`;
    //make http request
    return this.httpClient.get<Brawler>(apiUrl);
  }
}
