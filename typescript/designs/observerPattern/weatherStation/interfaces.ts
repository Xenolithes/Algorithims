export interface IObserverable {
    observers: IObserver[];
    add(observer: IObserver): void;
    remove(observer: IObserver): void;
    notify(): void;
}

export interface IObserver {
    observerable: IObserverable;
    update(): void
}