"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const util_1 = require("util");
/* eslint-disable  @typescript-eslint/no-explicit-any */
function hasErrorStatus(error) {
    return typeof error.status === 'number';
}
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    return String(error);
}
async function run() {
    try {
        const inputs = {
            clientPayload: core_1.default.getInput('client-payload'),
        };
        core_1.default.debug(`Inputs: ${(0, util_1.inspect)(inputs)}`);
    }
    catch (error) {
        core_1.default.debug((0, util_1.inspect)(error));
        if (hasErrorStatus(error) && error.status == 404) {
            core_1.default.setFailed('Repository not found, OR token has insufficient permissions.');
        }
        else {
            core_1.default.setFailed(getErrorMessage(error));
        }
    }
}
run();
//# sourceMappingURL=index.js.map