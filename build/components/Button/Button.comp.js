var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "react-dom"], function (require, exports, React, react_dom_1) {
    "use strict";
    var target;
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            return _super.apply(this, arguments) || this;
        }
        Button.prototype.loadModule = function (e) {
            require(['../../blade/Blade1/Blade1.blade'], function (Blade1) {
                if (!target) {
                    target = document.createElement('div');
                    document.getElementById('app').appendChild(target);
                }
                react_dom_1.render(React.createElement(Blade1["default"], null), target);
            });
        };
        Button.prototype.render = function () {
            return (React.createElement("button", { onClick: this.loadModule }, " Click to load a module on demand"));
        };
        return Button;
    }(React.Component));
    exports.__esModule = true;
    exports["default"] = Button;
});
//# sourceMappingURL=Button.comp.js.map