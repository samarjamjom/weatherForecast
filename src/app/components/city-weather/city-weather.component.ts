import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { WeatherInfo } from "../../classes/weather-info";

@Component({
  selector: "app-city-weather",
  templateUrl: "./city-weather.component.html",
  styleUrls: ["./city-weather.component.scss"]
})
export class CityWeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  @Input("data") public loc;
  URL;
  location;
  weatherInfo: WeatherInfo[] = [];
  Weather;
  today;
  Info;
  weatherAppear = true;
  weatherDetailsAppear = false;

  getData(latit, longti) {
    this.weatherService.getWeather(latit, longti).subscribe(data => {
      this.Weather = data;
      for (let i = 0; i < this.Weather.list.length; i += 8) {
        const temporary = new WeatherInfo(
          this.Weather.list[i].dt_txt,
          this.Weather.list[i].weather[0].icon,
          this.Weather.list[i].main.temp_min,
          this.Weather.list[i].main.temp_max,
          this.Weather.list[i].main.feels_like,
          this.Weather.list[i].main.pressure,
          this.Weather.list[i].main.temp,
          this.Weather.list[i].wind.speed
        );
        if (i === 0) {
          this.today = temporary;
        } else {
          this.weatherInfo.push(temporary);
        }
      }
      console.log(this.Weather);
    });
  }
  ngOnInit() {
    if (this.loc === undefined) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.location = pos.coords;
        const lat = this.location.latitude;
        const lng = this.location.longitude;
        this.getData(lat, lng);
      });
    } else {
      this.getData(this.loc.latitude, this.loc.longitude);
      console.log("YES");
    }
  }

  showDeatils(i) {
    i = i * 8;
    this.Info = this.Weather.list[i];
    console.log(i);
    console.log(this.Info);
    this.weatherAppear = false;
    this.weatherDetailsAppear = true;
  }
}
