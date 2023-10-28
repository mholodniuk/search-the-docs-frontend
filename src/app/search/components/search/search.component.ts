import { Component } from '@angular/core';
import { SearchApiService } from "../../service/search-api.service";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  value = 'clear me';

  constructor(private searchService: SearchApiService) {
    this.searchService.fullTextSearch("Java", 16).subscribe();
  }
}
