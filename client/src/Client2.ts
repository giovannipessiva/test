import { Constants, ValuesEnum } from "../../common/src/Constants"

export namespace Client2 {
    export function client() {
        console.log("3 " + Constants.HttpStatus.BAD_REQUEST);
	}
	
	export function client2() {
        console.log("4 " + Constants.HttpStatus.IM_A_TEAPOT);
    }
}