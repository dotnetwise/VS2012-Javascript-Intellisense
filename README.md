# VS2012 Javascript Intellisense 

This project aims to help your `Visual Studio 2012 intellisense` by providing much better
icons for your code members.

## What's in the box?

* [Namespaces](VS2012-Javascript-Intellisense#namespaces)
* [Classes](VS2012-Javascript-Intellisense#classes)
* [Enums](VS2012-Javascript-Intellisense#enums)

## Namespaces

In order to define a namespace we simply set on an object `__namespace = true`

We can also define a namespace with the helper function `namespace` or shortland `ns` as below:
```javascript
namespace("Demo.controllers")
ns("mvvm/knockout", Demo, "/") //place the namespace in an existing namespace and use a custom separator
```

For example
```javascript
$.extend(Demo, {
	Class: Class,
	colors: colors,
	IUser: IUser,
	map: map,
	fieldFunction: function () {},
	fieldBoolean: false,
	fieldString: "",
	fieldNumber: 1,
});
```
When we'll write `Demo.` the intellisense would look like:
<div class="issues-list">
    <table>
        <tr>
            <th>Before</th>
            <th>After</th>
            <th></th>
        </tr>
        <tr>
            <td>
                <a href="../../wiki/images/OldNamespace.png" target="_blank">
                    <img src="../../wiki/images/OldNamespace.png" alt="Old Namespace">
                </a>
            </td>
            <td>
                <a href="../../wiki/images/NamespaceValues.png" target="_blank">
                    <img src="../../wiki/images/NamespaceValues.png" alt="New Namespace">
                </a>
            </td>
            <td>
                <ul>
                    <li title="All functions with first Upper-case letter and those with __class=true">
                        <img src="../../wiki/images/icons/Class.png" alt="Class"><code>Class</code>-like function and
                        <code>constructor</code> icon</li>
                    <li title="Objects with __namespace == true">
                        <img src="../../wiki/images/icons/Namespace.png" alt="namespace" /><code>namespaces</code> icon,
                        including nested ones</li>
                    <li title="functions or objects with __enum == true">
                        <img src="../../wiki/images/icons/Enum.png" alt="Enum" /><code>Enum</code> icon
                    </li>
                    <li><code>fields</code> by their initialized <code>type</code>
                        <ul>
                            <li title="Boolean Field">
                                <img src="../../wiki/images/icons/Boolean.png" alt="Boolean Field">Boolean
                            </li>
                            <li title="Number Field">
                                <img src="../../wiki/images/icons/Number.png" alt="Number Field">Number
                            </li>
                            <li title="String Field">
                                <img src="../../wiki/images/icons/String.png" alt="String Field">String
                            </li>
                        </ul>
                    </li>
                    <li title="functions or objects with __interface == true">
                        <img src="../../wiki/images/icons/Interface.png" alt="Interface" /><code>Interface</code> icon
                    </li>
                    <li title="functions or objects with __map == true"><code>map</code>-like objects icon</li>
                    <li title="Although they are still accessible, intellisese just hides them">Automcatically hide
                        Object.prototype methods in namespaces</li>
                </ul>
            </td>
        </tr>
    </table>
</div>

## Classes
Although javascript doesn't support `classes` it does support `constructor functions`<br />
VS2012 by default only uses two icons to render properties and methods.
```javascript
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
```
When we'll write `c.` the intellisense would look like:
<div class="issues-list">
    <table>
        <tr>
            <th>Before</th>
            <th>After</th>
            <th></th>
        </tr>
        <tr>
            <td>
                <a href="../../wiki/images/OldClass.png" target="_blank">
                    <img src="../../wiki/images/OldClass.png" alt="Old Class">
                </a>
            </td>
            <td>
                <a href="../../wiki/images/ClassValues.png" target="_blank">
                    <img src="../../wiki/images/ClassValues.png" alt="New Class">
                </a>
            </td>
            <td>
                <ul>
                    <li title="All functions with first Upper-case letter and those with __class=true">
                        <img src="../../wiki/images/icons/Class.png" alt="Class"><code>Class</code>-like function and
                        <code>constructor</code> icon</li>
                    <li title="Typically functions defined within Constructor fuction i.e. this.method = function() {}">
                        <img src="../../wiki/images/icons/Method.png" alt="Method">Distinct <code>function</code> icon
                        for <b>instance</b> methods</li>
                    <li title="Typically functions defined via Constructor.prototype i.e. Constructor.prototype.someMethod = function() {}. This includes all chanining prototypes except functions from Object.prototype">
                        <img src="../../wiki/images/icons/PrototypeMethod.png" alt="Prototype method">Distinct <code>function</code>
                        icon for <b>prototype's</b> methods</li>
                    <li title="All functions defined on Object.prototype">
                        <img src="../../wiki/images/icons/ObjectPrototypeMethod.png" alt="Object.prototype">Distinct
                        icons
                        for <code>Object.prototype</code>'s methods</li>
                    <li title="This is shown only on functions and is not present in the left image">
                        <img src="../../wiki/images/icons/Prototype.png" alt="prototype"><code>prototype</code>
                        custom icon</li>
                    <li title="All fields starting with on">
                        <img src="../../wiki/images/icons/Event.png" alt="event"><code>events</code> icon</li>
                    <li><code>fields</code> by their initialized <code>type</code>
                        <ul>
                            <li title="Boolean Field">
                                <img src="../../wiki/images/icons/Boolean.png" alt="Boolean Field">Boolean
                            </li>
                            <li title="Number Field">
                                <img src="../../wiki/images/icons/Number.png" alt="Number Field">Number
                            </li>
                            <li title="String Field">
                                <img src="../../wiki/images/icons/String.png" alt="String Field">String
                            </li>
                            <li title="Object Field, Local Variable, Predefined Global Variable">
                                <img src="../../wiki/images/icons/String.png" alt="String Field">Object</li>
                            <li title="RegExp - regular expression">
                                <img src="../../wiki/images/icons/RegExp.png" alt="RegExp">RegExp</li>
                            <li title="null value and null keyword">
                                <img src="../../wiki/images/icons/Null.png" alt="null">null</li>
                            <li title="undefined value and undefined keyword">
                                <img src="../../wiki/images/icons/Undefined.png" alt="undefined">undefined</li>
                        </ul>
                    </li>
                    <li title="Not show in image">
                        <img src="../../wiki/images/icons/DOMElement.png" alt="undefined">Distinct <code>DOM elements</code>
                        icon</li>
                </ul>
            </td>
        </tr>
    </table>
</div>

## Enums
Although javascript doesn't support `enums` in the .NET sense, it can be very simple achived
as we can defined as an object<br />
To enable the feature either use the `Enum` function or manually set `__enum = true` on your
object.
```javascript
Color = new Enum({ Red: 1, Yellow: 2, White: 3 });
```
<div class="issues-list">
    <table>
        <tr>
            <th>Before</th>
            <th>After</th>
            <th></th>
        </tr>
        <tr>
            <td>
                <a href="../../wiki/images/OldEnum.png" target="_blank">
                    <img src="../../wiki/images/OldEnum.png" alt="Old Enum">
                </a>
            </td>
            <td>
                <a href="../../wiki/images/EnumMembers.png" target="_blank">
                    <img src="../../wiki/images/EnumMembers.png" alt="New Enum">
                </a>
            </td>
            <td>
                <ul>
                    <li title="functions or objects with __enum == true">
                        <img src="../../wiki/images/icons/Enum.png" alt="Enum" /><code>Enum</code> icon
                    </li>
                    <li title="The enum members are shown as fields based on their value type">
                        <img src="../../wiki/images/icons/Number.png" alt="Enum Member"><code>Enum members</code> based
                        on thier value type</li>
                    <li title="Although they are still accessible, intellisese just hides them">Automcatically hide
                        Object.prototype methods in enums</li>
                </ul>
            </td>
        </tr>
    </table>
</div>

# Usage
## Explicit options
You can set any of these on your objects/functions accordingly: 
* ![](../../wiki/images/icons/Namespace.png)`__namespace = true` - makes an object to look like a namespace
* ![](../../wiki/images/icons/Class.png)`__class = true` - makes an function to look like a class
* ![](../../wiki/images/icons/Enum.png)`__enum = true` - makes an object to look like an enum
* ![](../../wiki/images/icons/Interface.png)`__interface = true` - makes a function to look like an interface
* ![](../../wiki/images/icons/Map.png)`__map = true` - makes an object to look like a dictionary
* ![](../../wiki/images/icons/Const.png)`__const = true` - makes an object to look like a constant
* ![](../../wiki/images/icons/Event.png)`__event = true` - makes an object to look like an event
* ![](../../wiki/images/icons/Delegate.png)`__delegate = true` - makes a function to look like a delegate

## Implicit options
Besides the explicit setting of the above options, following rules apply:
* ![](../../wiki/images/icons/Event.png)Anything named `on****` will be considered an event
* ![](../../wiki/images/icons/Class.png)Anything named with an `Uppercase` letter will be considered a Class
* Fields will automatically be declared by their current value type i.e.   
 * ![](../../wiki/images/icons/Number.png)`Number`
 * ![](../../wiki/images/icons/Boolean.png)`Boolean`
 * ![](../../wiki/images/icons/String.png)`String`
 * ![](../../wiki/images/icons/RegExp.png)`RegExp`
 * ![](../../wiki/images/icons/Null.png)`null`
 * ![](../../wiki/images/icons/Undefined.png)`undefined`
* ![](../../wiki/images/icons/Class.png)Anything named `constructor` is always considered a Class
* ![](../../wiki/images/icons/ObjectPrototypeMethod.png)Methods defined on `Object.prototype` have specific glyph icon
* ![](../../wiki/images/icons/PrototypeMethod.png)Methods defined on custom `.prototype` have specific glyph icon (like an external method)
* ![](../../wiki/images/icons/Prototype.png)Keyword `prototype` has a specific glyph icon
* ![](../../wiki/images/icons/DOMElement.png)Any `DOM element` will be automatically detected and have specific glyph icon

## Did you find a bug or added some cool stuff? 
Please post an [issue](issues), fork or edit the code!

## Did you enjoy it? 
We would love to share your experience with us by [editing this page](wiki/Feedback)

# What's next?
See [Wiki Home](../../wiki) for more details
