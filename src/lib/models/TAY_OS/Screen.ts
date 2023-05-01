import type { WindowReference } from "$lib/models/TAY_OS/WindowReference";
import type { TayFile } from "./TayFile";

export class Screen {
    id: number = 0;
    openWindows: WindowReference[] = []
    focusedWindow: (WindowReference | null) = null
    focusedFile: (TayFile | null) = null
    
    constructor() { 
        
    }
}