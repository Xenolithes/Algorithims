import { IErrorLoggingStrategy } from "./interfaces"
import fs from 'fs'
import { errorMonitor } from "stream";

export class FileErrorLoggingStrategy implements IErrorLoggingStrategy {
    log(err:Error): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.appendFile("logs/error.log", err.message, "utf8", (err) => {
                if(err) {
                    console.error("Error Logging Fialed");
                    reject(errorMonitor);
                }else{
                    resolve("The error has been written to the file");
                }
            })
        })
    }
}