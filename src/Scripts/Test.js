/// <reference path="../content/scripts/namespacesandenumsupport.js" />
/// <reference path="../content/scripts/_vs2012.intallisense.js" />
/// <reference path="jquery-1.9.1.js" />
var Namespace = namespace("Namespace");

Color = new Enum({ Red: 1, Yellow: 2, White: 3 });



!function () {
	namespace("Demo.controllers")
	var ns = Demo;
	
	function Class() {
		this.onClick = function () { },
		this.thisUndefined = undefined;
		this.thisNumber = 1;
		this.thisString = "";
		this.thisBoolean = true;
		this.thisNull = null;
		this.thisObject = {};
		this.thisFunction = function () { };
		this.thisRegExp = /a/g;
		this.thisDomElement = document.body;
		this.thisClass = Class;
		this.thisClassInstance = new Enumerator();
		this.thisNamespace = Namespace;
		this.thisEnum = Color.Red;
	}
	Class.__class = true;
	Class.prototype.protoMethod = function () { };
	Class.prototype.protoFieldObject = {};
	Class.prototype.protoFieldBool = false;
	var c = new Class();
	function IUser() { }
	IUser.__interface = true;

	var map = {}
	map.__map = true;
	var colors = new Enum({ Red: 1, Yellow: 2, Green: 3 });
	
	$.extend(ns, {
		//a: 1,
		//b:2,
		Class: Class,
		colors: colors,
		IUser: IUser,
		map: map,
		fieldFunction: function () {

		},
		fieldBoolean: false,
		fieldString: "",
		fieldNumber: 1,
	});
	
	c.hasOwnProperty("protoMethod");
	
	
}();





