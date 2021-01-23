import { WeatherStation, TemperatureDisplay} from "./observer";


const station = new WeatherStation()
const displayOne = new TemperatureDisplay(station);
const displayTwo = new TemperatureDisplay(station);
const displayThree = new TemperatureDisplay(station);
station.add(displayOne);
station.add(displayTwo);
station.add(displayThree);
station.setTemperature(80);
station.remove(displayTwo);
station.setTemperature(90);
