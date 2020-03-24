//@ts-ignore TS1192
import express from "express";
import { Request, Response } from "express-serve-static-core";

import { Constants, ValuesEnum } from "../../common/src/Constants"

let app = express();
app.set("port",5000);

// Views redirection
app.get("/", function(request: Request, response: Response) {
    console.log(Constants.HttpStatus + " ");
    console.log(ValuesEnum.DSA + " ");

    let file = process.cwd() + "/client/test.html";
    response.sendFile(
        file,
        {
            dotfiles: "deny",
            headers: {
                "x-timestamp": Date.now(),
                "x-sent": true
            }
        },
        function(err: Error | any) {
            console.warn("utils.sendFile - " + err);
        }
    );
});

console.log("Finish");