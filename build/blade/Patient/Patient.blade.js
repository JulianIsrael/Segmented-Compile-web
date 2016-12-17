var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var Patient = (function (_super) {
        __extends(Patient, _super);
        function Patient() {
            return _super.apply(this, arguments) || this;
        }
        Patient.prototype.render = function () {
            return (React.createElement("h2", null, " Complex Blade that would recieve permisions to know if it should be present "));
        };
        return Patient;
    }(React.Component));
    exports.__esModule = true;
    exports["default"] = Patient;
});
//# sourceMappingURL=Patient.blade.js.map