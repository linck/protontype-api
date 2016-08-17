"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Middleware_1 = require("./Middleware");
var bodyParser = require('body-parser');
var Config_1 = require("../libs/Config");
/**
 * @author Humberto Machado
 */
var DefaultMiddleware = (function (_super) {
    __extends(DefaultMiddleware, _super);
    function DefaultMiddleware() {
        _super.apply(this, arguments);
        this.port = Config_1.Config.port;
        this.jsonSpaces = 2;
    }
    DefaultMiddleware.prototype.configMiddlewares = function () {
        this.express.set("port", this.port);
        this.express.set("json spaces", this.jsonSpaces);
        this.express.use(bodyParser.json());
        this.express.use(function (req, res, next) {
            delete req.body.id;
            next();
        });
    };
    return DefaultMiddleware;
}(Middleware_1.Middleware));
exports.DefaultMiddleware = DefaultMiddleware;
//# sourceMappingURL=DefaultMiddleware.js.map