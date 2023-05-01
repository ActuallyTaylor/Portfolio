export class TayFile {
    name: string;
    description: string;
    windowToOpen: string;
    isSelected: boolean = false;

    constructor(name: string, description: string, windowToOpen: string,) {
        this.name = name;
        this.windowToOpen = windowToOpen;
        this.description = description;
    }
}