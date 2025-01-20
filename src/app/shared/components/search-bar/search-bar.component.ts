import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-bar',
  standalone: false,

  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @ViewChild('search')
  public input!: ElementRef<HTMLInputElement>;
  @Output()
  public brawlSearch: EventEmitter<string> = new EventEmitter();
  searchBrawler() {
    const input: string = this.input.nativeElement.value;
    this.brawlSearch.emit(this.input.nativeElement.value);
  }
}
