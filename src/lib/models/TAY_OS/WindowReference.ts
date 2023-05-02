import type { Application } from "./Application";

export class WindowReference {
    name: string
    id: number
    application: Application
    sourceFile: (File | null)
    
    constructor(name: string, id: number, application: Application, sourceFile: (File | null)) {
        this.name = name;
        this.id = id;
        this.application = application;
        this.sourceFile = sourceFile
    }
}