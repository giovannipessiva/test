//@ts-ignore TS1192
import path from "path"
//@ts-ignore TS1192
import express from "express";

import { Constants, ValuesEnum } from "../../common/src/Constants"

let app = express();
app.set("port",5000);

// Views redirection
app.get("/", function(request: Request, response: Response) {
    console.log(Constants.HttpStatus + " ");
    console.log(ValuesEnum.DSA + " ");

});
