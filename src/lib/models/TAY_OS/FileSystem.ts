import type { Application } from "./Application";

export class TayFS {
    files: TayFS_Unit[]
}

class TayFS_Unit {
    id: number
    name: string
    icon: string
    path: string
    
    constructor(id: number, name: string, icon: string, path: string) {
        this.id = id
        this.name = name
        this.icon = icon
        this.path = path
    }
}

class TayFS_File extends TayFS_Unit {
    handlingApplication: Application

    constructor(id: number, name: string, icon: string, path: string, handlingApplication: Application) {
        super(id, name, icon, path)
        this.handlingApplication = handlingApplication
    }

}

class TayFS_Folder extends TayFS_Unit {

}


export class TayFile {
    name: string
    description: string
    icon: string
    path: String
    handlingApplication: Application

    constructor(name: string, description: string, path: string, handlingApplication: Application, icon: string = "file.png") {
        this.name = name
        this.handlingApplication = handlingApplication
        this.description = description
        this.path = path
        this.icon = icon
    }
}