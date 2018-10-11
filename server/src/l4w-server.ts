//@ts-ignore TS1192
import path from "path"
//@ts-ignore TS1192
import express from "express";

import { Constants } from "../../common/src/Constants2"
import * as utils2 from "./utils"

//TODO import.meta require target=esnext and module=esnext
// see also: https://github.com/Microsoft/TypeScript/issues/24082
//let dirname = path.dirname(new URL(import.meta.url).pathname);
let dirname = process.cwd() + path.sep + "server" + path.sep;

let app = express();
app.set("port",(process.env.PORT || 5000));

// Views redirection
app.get("/", function(request: Request, response: Response) {
    

    
});
