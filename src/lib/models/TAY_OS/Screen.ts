import type { WindowReference } from "$lib/models/TAY_OS/WindowReference";

export class Screen {
    id: number = 0;
    openWindows: WindowReference[] = []
    focusedWindow: (WindowReference | null) = null
    
    constructor() { 
        
    }
}