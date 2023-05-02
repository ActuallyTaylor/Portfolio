export class MenuBarItem {
    name: string | null;
    icon: string;

    constructor(name: string | null, icon: string = "file") {
        this.name = name;
        this.icon = icon
    }
}