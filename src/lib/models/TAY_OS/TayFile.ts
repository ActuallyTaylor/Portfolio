export class TayFile {
    name: string;
    description: string;
    windowToOpen: string;
    icon: string;

    constructor(name: string, description: string, windowToOpen: string, icon: string = "file") {
        this.name = name;
        this.windowToOpen = windowToOpen;
        this.description = description;
        this.icon = icon
    }
}