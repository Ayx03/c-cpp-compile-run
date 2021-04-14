import * as vscode from "vscode";

class OutputChannel implements vscode.Disposable {
    private readonly channel: vscode.OutputChannel = vscode.window.createOutputChannel("C/C++ Compile Run");

    public appendLine(message: any, title?: string): void {
        if (title) {
            const simplifiedTime: string = (new Date()).toISOString().replace(/[zt]/gi, " ").trim(); // YYYY-MM-DD HH:mm:ss.sss
            const highlightingTitle = `[${title} ${simplifiedTime}]`;
            this.channel.appendLine(highlightingTitle);
        }
        this.channel.appendLine(message);
    }
    public show(): void {
        this.channel.show();
    }

    public dispose(): void {
        this.channel.dispose();
    }
}

export const outputChannel: OutputChannel = new OutputChannel();
