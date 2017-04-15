"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const MiddlewareConfig_1 = require("./../decorators/MiddlewareConfig");
const ProtonMiddleware_1 = require("./ProtonMiddleware");
const bodyParser = require("body-parser");
class JsonContentMiddleware extends ProtonMiddleware_1.ProtonMiddleware {
    jsonContentMiddlewareFunc(params) {
        params.app.getExpress().set("json spaces", 2);
        params.app.getExpress().use(bodyParser.json());
        params.app.getExpress().use((req, res, next) => {
            delete req.body.id;
            next();
        });
        params.next();
    }
}
__decorate([
    MiddlewareConfig_1.Middleware(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JsonContentMiddleware.prototype, "jsonContentMiddlewareFunc", null);
exports.JsonContentMiddleware = JsonContentMiddleware;
//# sourceMappingURL=JsonContentMiddleware.js.map