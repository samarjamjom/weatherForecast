import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-near-cities",
  templateUrl: "./near-cities.component.html",
  styleUrls: ["./near-cities.component.scss"]
})
export class NearCitiesComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  location;
  div1 = true;
  div2 = false;

  weatherInfo = [];
  Weather;

  public loadCities(filterText: string): void {
    if (filterText != "") {
      var filterCityList: any[] = [];
      this.Weather.list.forEach(w => {
        if (w.name.includes(filterText)) {
          filterCityList.push(w);
        }
      });
      this.weatherInfo = filterCityList;
    }
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lng = this.location.longitude;
      this.weatherService.getcities(lat, lng).subscribe(data => {
        this.Weather = data;
        this.weatherInfo = this.Weather.list;
        console.log(data);
      });
    });
    this.loadCities("");
  }

  onCitySearch(searchTerm: string): void {
    this.loadCities(searchTerm);
  }

  appearance() {
    this.div1 = false;
    this.div2 = true;
  }
}
