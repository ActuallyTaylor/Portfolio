import type { Application } from "./Application";
import type { TayFS_Unit } from "./FileSystem";

export class WindowReference {
    name: string
    id: number
    application: Application
    sourceFile: (TayFS_Unit | null)
    
    constructor(name: string, id: number, application: Application, sourceFile: (TayFS_Unit | null)) {
        this.name = name;
        this.id = id;
        this.application = application;
        this.sourceFile = sourceFile
    }
}