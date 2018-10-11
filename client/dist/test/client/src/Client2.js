import { Constants } from "../../common/src/Constants";
export var Client2;
(function (Client2) {
    function client() {
        console.log("1" + Constants.HttpStatus);
    }
    Client2.client = client;
    function client2() {
        console.log("1" + Constants.HttpStatus);
    }
    Client2.client2 = client2;
})(Client2 || (Client2 = {}));
