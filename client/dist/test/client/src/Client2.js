import { Constants } from "../../common/src/Constants";
export var Client2;
(function (Client2) {
    function client() {
        console.log("3 " + Constants.HttpStatus.BAD_REQUEST);
    }
    Client2.client = client;
    function client2() {
        console.log("4 " + Constants.HttpStatus.IM_A_TEAPOT);
    }
    Client2.client2 = client2;
})(Client2 || (Client2 = {}));
