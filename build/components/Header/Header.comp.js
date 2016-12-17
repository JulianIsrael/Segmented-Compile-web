var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var Header = (function (_super) {
        __extends(Header, _super);
        function Header() {
            return _super.apply(this, arguments) || this;
        }
        Header.prototype.render = function () {
            return (React.createElement("h2", null, " I'm the Header "));
        };
        return Header;
    }(React.Component));
    exports.__esModule = true;
    exports["default"] = Header;
});
//# sourceMappingURL=Header.comp.js.map