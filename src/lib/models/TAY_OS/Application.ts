import type { MenuBarItem } from "./MenuBarItem";
import { TayFile } from "./TayFile";

export class Application {
    name: string;
    description: string;
    icon: string;
    menuBarItems: MenuBarItem[];

    file: TayFile;

    constructor(name: string, description: string, icon: string, menuBarItems: MenuBarItem[]) {
        this.name = name;
        this.icon = icon;
        this.description = description;
        this.menuBarItems = menuBarItems;
        
        this.file = new TayFile(name, description, name, icon);
    }
}