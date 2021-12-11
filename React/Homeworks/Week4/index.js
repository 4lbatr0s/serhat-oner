import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);
    //If a serie has been watched
    if (serie.isWatched) {
      // Update the count of watched series: "numberOfWatched"
      this.numberOfWatched += 1;
      // Check for "lastSerie" property, set if we don't.
      if (!this.lastSerie) {
        this.lastSerie = serie;
        // Check for "lastSerie"'s finishedDate, if the serie's "finishedDate" prop is greater,
        // set "lastSerie" prop to "serie" object.
      } else {
        if (this.lastSerie.finishedDate < serie.finishedDate) {
          this.lastSerie = serie;
        }
      }
      // If a serie hasn't been watched:
    } else {
      // set the .currentSerie property, set the .nextSerie property.
      this.numberOfUnWatched += 1;
      // Check if serie has "isCurrent" prop
      if (serie.isCurrent) {
        // Check if we have a "currentSerie" property. Set if we don't.
        if (!this.currentSerie) {
          this.currentSerie = serie;
        }
        // Check if we have a "nextSerie" property as well - if we didn't
      }
      if (!this.nextSerie) {
        this.nextSerie = serie;
      }
    }
  };

  //check to see if we have series to process
  if (series.length > 0) {
    //Loop through all of the series in the "series" argument
    //Use the .add function to handle adding series, so we keep counts updated.
    series.forEach((serie) => {
      this.add(serie);
    });
  }

  this.finishSerie = function () {
    // find and update currently watching serie in "this.series" array
    this.series.forEach((serie) => {
      // update "lastSerie" with the finished one
      if (serie === this.currentSerie) {
        serie.isWatched = true;
        serie.isCurrent = false;
        let date = new Date();
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        date = day + "." + month + "." + year;
        serie.finishedDate = date;
        this.lastSerie = serie;
        // update "numberOfWatched" and "numberOfUnWatched" props
        this.numberOfWatched += 1;
        this.numberOfUnWatched -= 1;
      }
      // set "currentSerie" with the next one
      if (serie === this.nextSerie) {
        this.currentSerie = serie;
        serie.isCurrent = true;
      }
      // set new nextSerie value with the next one which has not been watched.
      if (this.nextSerie === this.currentSerie) {
        if (!serie.isWatched && !serie.isCurrent) {
          this.nextSerie = serie;
        }
      }
    });
  };

  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}

// Case 1
// -------------------------------------------------

// Case 2
// -------------------------------------------------

// Case 3
// -------------------------------------------------

const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport();
