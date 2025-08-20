export class MenuBarItem {
    name: string | null
    icon: string | null

    constructor(name: string | null, icon: string | null) {
        this.name = name
        this.icon = icon
    }
}