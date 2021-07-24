var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "knockout"], function (require, exports, knockout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    knockout_1 = __importDefault(knockout_1);
    define([], function () {
        var Accounts = /** @class */ (function () {
            function Accounts(Id) {
                this.Id = knockout_1.default.observable(Id);
            }
            return Accounts;
        }());
        return {
            Accounts: Accounts
        };
    });
});
