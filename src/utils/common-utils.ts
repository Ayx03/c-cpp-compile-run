import find = require("find-process");
import { lookpath } from "lookpath";
import { isStringNullOrWhiteSpace } from "./string-utils";

export async function commandExists(command: string): Promise<boolean> {
    const result = await lookpath(command);
    return isStringNullOrWhiteSpace(result);
}

export async function isProcessRunning(process: string): Promise<boolean> {
    const list = await find("name", process, true);
    return list.length > 0;
}
