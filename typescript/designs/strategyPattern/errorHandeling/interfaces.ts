export interface IErrorLoggingStrategy {
    log(err: Error): Promise<any>
}

export interface IErrorDisplayStrategy {
    display(title: string, body: string): void;
}