## Case One:

```
const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport();

```

![caseone] (file:///home/serhatoner/Pictures/case1.png)

## Case Two:

```
const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport();

```
![casetwo] (file:///home/serhatoner/Pictures/case2.png)

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
![casethree] (file:///home/serhatoner/Pictures/case3.png)

