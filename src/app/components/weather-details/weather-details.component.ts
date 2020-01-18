import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-weather-details",
  templateUrl: "./weather-details.component.html",
  styleUrls: ["./weather-details.component.scss"]
})
export class WeatherDetailsComponent implements OnInit {
  constructor() {}
  @Input("data") public Weather;

  ngOnInit() {}
}
