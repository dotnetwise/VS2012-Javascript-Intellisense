# VS2012 Javascript Intellisense 
This project aims to help your `Visual Studio 2012 intellisense` by providing much better
icons for your members.


## Namespaces

All icons look the same for properties and methods. Also all methods of `Object.prtotype` are shown,
although they are not very useful on a `namespace`

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
                        <img src="../../wiki/images/icons/ObjectPrototypeMethod.png" alt="Object.prototype">Distinct icons
                        for <code>Object.prototype</code>'s methods</li>
                    <li title="This is shown only on functions and is not present in the image"><code>prototype</code>
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

