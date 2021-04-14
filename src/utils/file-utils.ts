import {File} from "../models/file";
import {TextDocument} from "vscode";
import {basename, dirname, extname} from "path";
import {getFileType} from "./file-type-utils";

export function parseFile(doc: TextDocument): File {
    return {
        path: doc.fileName,
        name: basename(doc.fileName),
        title: basename(doc.fileName, extname(doc.fileName)),
        directory: dirname(doc.fileName),
        type: getFileType(doc.languageId),
        executable: process.platform === "win32"
            ? `${basename(doc.fileName, extname(doc.fileName))}.exe`
            : basename(doc.fileName, extname(doc.fileName))
    };
}
