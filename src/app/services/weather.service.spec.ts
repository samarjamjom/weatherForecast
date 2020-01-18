import { TestBed } from "@angular/core/testing";

import { WeatherServiceE } from "./weather.service";

describe("WeatherService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: WeatherServiceE = TestBed.get(WeatherServiceE);
    expect(service).toBeTruthy();
  });
});
