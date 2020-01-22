import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { combineAll } from "rxjs/operators";
import { CityWeatherComponent } from "./components/city-weather/city-weather.component";
import { NearCitiesComponent } from "./components/near-cities/near-cities.component";
import { HomeComponent } from "./components/home/home.component";
import { WeatherDetailsComponent } from "./components/weather-details/weather-details.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cityWeather", component: CityWeatherComponent },
  { path: "nearCities", component: NearCitiesComponent },
  { path: "home", component: HomeComponent },
  { path: "weatherDetail", component: WeatherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponent = [
  CityWeatherComponent,
  NearCitiesComponent,
  HomeComponent,
  WeatherDetailsComponent
];
