import { ErrorHandler } from "./errorHandler"
import { FileErrorLoggingStrategy } from "./fileErrorLogging"
import { ConsoleErrorDisplayStrategy } from "./consoleErrorDisplay"
import { createCallChain } from "typescript";

const errorHandler = new ErrorHandler( new ConsoleErrorDisplayStrategy(), new FileErrorLoggingStrategy() );

try {
    let b: any = 2
    b();
}
catch(err){
    errorHandler.handle(err, "Somthing went wrong", "Please try again later");
}