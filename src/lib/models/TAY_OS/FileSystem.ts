import type { Application } from "./Application";
import { ApplicationDatabase } from "./ApplicationDatabase";

export class TayFS {
    static idCounter: number = 0;
    units: TayFS_Unit[] = []

    constructor() { }

    public addUnit(unit: TayFS_Unit) {
        unit.path = "/" + unit.name
        unit.id = TayFS.idCounter
        TayFS.idCounter += 1
        this.units.push(unit)        
    }

    public deleteUnit(unit: TayFS_Unit): boolean {
        let index = this.units.indexOf(unit)
        if (index == -1) {
            return false
        }

        this.units.splice(index, 1)
        return true
    }
}

export enum TayFS_Filetype {
    directory,
    file
}

export class TayFS_Unit {
    id: number
    name: string
    description: string | null
    icon: string
    path!: string
    fileType: TayFS_Filetype
    handlingApplication: Application

    constructor(id: number, name: string, description: string | null, icon: string, type: TayFS_Filetype, handlingApplication: Application) {
        this.id = id
        this.description = description
        this.name = name
        this.icon = icon
        this.fileType = type
        this.handlingApplication = handlingApplication
    }
}

export class TayFS_File extends TayFS_Unit {
    constructor(name: string, description: string | null, icon: string, handlingApplication: Application) {
        super(0, name, description, icon, TayFS_Filetype.file, handlingApplication)
    }

}

export class TayFS_Directory extends TayFS_Unit {
    units: TayFS_Unit[] = []

    constructor(name: string, description: string | null, icon: string) {
        super(0, name, description, icon, TayFS_Filetype.directory, ApplicationDatabase.babel)
    }

    public addUnit(unit: TayFS_Unit) {
        unit.id = TayFS.idCounter
        unit.path = this.path + "/" + unit.name
        TayFS.idCounter += 1
        this.units.push(unit)        
    }

    public deleteUnit(unit: TayFS_File): boolean {
        let index = this.units.indexOf(unit)
        if (index == -1) {
            return false
        }

        this.units.splice(index, 1)
        return true
    }
}