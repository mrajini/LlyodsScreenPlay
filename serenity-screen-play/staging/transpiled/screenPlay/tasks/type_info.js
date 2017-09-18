"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeInfo = (function () {
    function TypeInfo(actorEmail) {
        this.actorEmail = actorEmail;
    }
    TypeInfo.called = function (actorEmail) {
        return new TypeInfo(actorEmail);
    };
    TypeInfo.prototype.performAs = function (actor) {
        return actor.attemptsTo();
    };
    return TypeInfo;
}());
exports.TypeInfo = TypeInfo;
//# sourceMappingURL=type_info.js.map