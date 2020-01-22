import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WeatherService } from "../../services/weather.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-weather-details",
  templateUrl: "./weather-details.component.html",
  styleUrls: ["./weather-details.component.scss"]
})
export class WeatherDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private location: Location
  ) {}
  Weather;

  ngOnInit() {
    this.Weather = this.weatherService.weather;
  }

  goBack() {
    this.location.back();
  }
}
