import Vue from "vue"
import { Client2 } from "./Client2"

export function client() {
	console.log("1 " + Client2.client());
	console.log("2 " + Client2.client2());
}

export function testVue(){
	var app = new Vue({
		el: '#app',
		data: {
		  message: 'Hello Vue!'
		}
	  })
}