## Case One:

```
const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport();

```

![image](https://user-images.githubusercontent.com/82971869/143129713-aa22e172-a88d-4f12-b49e-cfd534d7cdf6.png)

## Case Two:

```
const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport();

```
![image](https://user-images.githubusercontent.com/82971869/143129904-308fc324-2e11-4a98-872f-7b64bede0a08.png)
## Case Three: 

```
const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport();

```
![image](https://user-images.githubusercontent.com/82971869/143129940-d94738cc-5b21-4f79-ac8e-fcebf4be70de.png)
