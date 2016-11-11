"use strict";
/**
 * @author Humberto Machado
 */
(function (Method) {
    Method[Method["GET"] = 0] = "GET";
    Method[Method["PUT"] = 1] = "PUT";
    Method[Method["POST"] = 2] = "POST";
    Method[Method["DELETE"] = 3] = "DELETE";
    Method[Method["PATCH"] = 4] = "PATCH";
    Method[Method["OPTIONS"] = 5] = "OPTIONS";
    Method[Method["HEAD"] = 6] = "HEAD";
})(exports.Method || (exports.Method = {}));
var Method = exports.Method;
//# sourceMappingURL=Method.js.map