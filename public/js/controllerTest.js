"use strict";

(function() {


	var app = angular.module("controllerTest", []);

	 app.controller("CartController", function() {

        this.items = [];

        this.newItem = {
        	quanity: 1
        };

        this.addItem = function() {
        	this.items.push(this.newItem);
        	this.newItem = {
        		quanity: 1
        	};

    });

})();