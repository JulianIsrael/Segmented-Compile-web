var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            return _super.apply(this, arguments) || this;
        }
        Button.prototype.loadModule = function (e) {
            console.log(e);
        };
        Button.prototype.render = function () {
            return (React.createElement("button", { onClick: this.loadModule }, " Click to load a module on demand"));
        };
        return Button;
    }(React.Component));
    exports.__esModule = true;
    exports["default"] = Button;
});
//# sourceMappingURL=Botton.comp.js.map