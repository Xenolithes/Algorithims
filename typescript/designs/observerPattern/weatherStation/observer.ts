import { IObserver, IObserverable } from "./interfaces"
import chalk from "chalk"

export class WeatherStation implements IObserverable{
    temperature: number;
    observers: IObserver[];
    constructor(){
        this.temperature = 30;
        this.observers = [];
    }
    add(observer: IObserver){
        this.observers.push(observer);
    }
    remove(observer: IObserver){
        for(let i = 0; i < this.observers.length; i+=1){
            if(observer === this.observers[i]){
                this.observers.splice(i, 1);
                break;
            }
        }
    }
    notify(){
        this.observers.forEach(observer => {
            observer.update();
        })
    }

    setTemperature(temp: number){
        this.temperature = temp;
        this.log();
        this.notify();
    }

    getTemperature(): number{
        return this.temperature;
    }

    log(): void{
        console.log(`The temperature is ${this.temperature}`)
    }
}

export class TemperatureDisplay implements IObserver {
    observerable: WeatherStation;
    currentTemperature: number;
    constructor(observerable: WeatherStation){
        this.observerable = observerable
        this.currentTemperature = observerable.getTemperature();
    }

    update(){
        this.currentTemperature = this.observerable.getTemperature();
        this.log();
    }

    log(){
        console.log(`The new temperature is ${chalk.blue(this.currentTemperature)}`)
    }
}