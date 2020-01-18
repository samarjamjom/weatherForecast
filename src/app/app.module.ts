import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponent } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WeatherService } from "./services/weather.service";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./components/home/home.component";
import { CityWeatherComponent } from "./components/city-weather/city-weather.component";
import { NearCitiesComponent } from "./components/near-cities/near-cities.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { WeatherDetailsComponent } from "./components/weather-details/weather-details.component";

/* import { AgmCoreModule } from "@agm/core"; */

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HomeComponent,
    CityWeatherComponent,
    NearCitiesComponent,
    SearchBarComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    /* AgmCoreModule.forRoot({
      apiKey: "AIzaSyDwvEO00ho3WZeJ_ufUDnqRYQQmTt6yU-o"
    }) */
  ],

  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
