import type { WindowReference } from "$lib/models/TAY_OS/WindowReference";
import type { MenuBarItem } from "$lib/models/TAY_OS//MenuBarItem";
import type { TayFile } from "$lib/models/TAY_OS//TayFile";

export class TaylorOS {
    id: number = 0;
    openWindows: WindowReference[] = []
    focusedWindow: (WindowReference | null) = null
    focusedFile: (TayFile | null) = null
    focusedMenuBarItem: (MenuBarItem | null) = null;

    constructor() { 
        
    }
}