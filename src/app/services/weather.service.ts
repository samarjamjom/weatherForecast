import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(lat: string, lng: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=484e0fa7b9e69f7b79c09915215e85b1`
    );
  }

  getcities(lat: string, lng: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=20&appid=484e0fa7b9e69f7b79c09915215e85b1`
    );
  }
}
