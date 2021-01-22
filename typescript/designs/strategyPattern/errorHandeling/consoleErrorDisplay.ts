import chalk, { red } from "chalk"
import { IErrorDisplayStrategy } from "./interfaces"

export class ConsoleErrorDisplayStrategy implements IErrorDisplayStrategy {
    display(title: string, body: string): void{
        console.log(`${chalk.red(title)}, ${chalk.blue(body)}`);
    }
}