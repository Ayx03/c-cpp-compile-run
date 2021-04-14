import { window } from "vscode";

export async function promptCompiler(): Promise<string> {
    return window.showInputBox({prompt: "Compiler", placeHolder: "/usr/bin/gcc"});
}

export async function promptFlags(defaultFlags: string): Promise<string> {
    return window.showInputBox({prompt: "Flags", placeHolder: "-Wall -Wextra", value: defaultFlags});
}

export async function promptRunArguments(defaultArgs: string): Promise<string> {
    return window.showInputBox({prompt: "Arguments", value: defaultArgs});
}
