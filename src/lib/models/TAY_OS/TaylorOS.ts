import type { WindowReference } from "$lib/models/TAY_OS/WindowReference";
import type { MenuBarItem } from "$lib/models/TAY_OS//MenuBarItem";
import type { TayFile } from "$lib/models/TAY_OS//TayFile";
import type { Application } from "$lib/models/TAY_OS/Application";
import { ApplicationDatabase } from "./ApplicationDatabase";

export class TaylorOS {
    id: number = 0;
    openWindows: WindowReference[] = []
    focusedWindow: (WindowReference | null) = null
    focusedFile: (TayFile | null) = null
    focusedMenuBarItem: (MenuBarItem | null) = null;
    currentlyFocusedApp: Application = ApplicationDatabase.applications[0]

    constructor() { 
        
    }

    public getApplicationByName(name: string): Application {
        const index = ApplicationDatabase.applications.findIndex(app => {
            app.name == name
        })

        if (index == -1) {
            return ApplicationDatabase.applications[0]
        }

        return ApplicationDatabase.applications[index]
    }
}