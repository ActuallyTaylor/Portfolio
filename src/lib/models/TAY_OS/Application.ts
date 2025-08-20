import type { MenuBarItem } from "./MenuBarItem"
import { TayFS_File } from "./FileSystem"

export class Application {
    name: string
    description: string
    icon: string
    menuBarItems: MenuBarItem[]

    file: TayFS_File

    constructor(name: string, description: string, icon: string, menuBarItems: MenuBarItem[]) {
        this.name = name
        this.icon = icon
        this.description = description
        this.menuBarItems = menuBarItems
        
        this.file = new TayFS_File(name, description, icon, this)
    }
}