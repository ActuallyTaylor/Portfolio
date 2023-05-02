import type { Application } from "./Application";

export class TayFile {
    name: string;
    description: string;
    icon: string;
    path: String
    handlingApplication: Application

    constructor(name: string, description: string, path: string, handlingApplication: Application, icon: string = "file.png") {
        this.name = name;
        this.handlingApplication = handlingApplication;
        this.description = description;
        this.path = path
        this.icon = icon
    }
}