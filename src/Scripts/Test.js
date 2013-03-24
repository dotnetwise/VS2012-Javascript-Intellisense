/// <reference path="../lib/_vs2012.intallisense.js" />
/// <reference path="jquery-1.9.1.js" />
var Namespace = namespace("Namespace");

var Color = new Enum({ Red: 1, Yellow: 2, White: 3 });
Color.Red.__enum = true;

var A = function () {
	this.thisUndefined = undefined;
	this.thisNumber = 1;
	this.thisString = "";
	this.thisBoolean = true;
	this.thisNull = null;
	this.thisObject = {};
	this.thisFunction = function () { };
	this.thisRegExp = /a/g;
	this.thisDomElement = document.body;
	this.thisClass = Enumerator;
	this.thisClassInstance = new Enumerator();
	this.thisNamespace = Namespace;
	this.thisEnum = Color.Red;
}
A.prototype.protoMethod = function () { };
A.prototype.protoFieldObject = {};
A.prototype.protoFieldBool = false;
var a = new A();
A.__class = true;
a.hasOwnProperty("protoMethod");

a.