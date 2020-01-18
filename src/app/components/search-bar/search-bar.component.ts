import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  @Output()
  Search = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onCitySearch(searchTerm: string): void {
    this.Search.emit(searchTerm);
  }
}
