export class Project {
    name: string
    subtitle: string
    id: string
    category: string
    url: string

    constructor(name: string, subtitle: string, id: string, category: string) {
        this.name = name
        this.subtitle = subtitle
        this.id = id
        this.category = category
        this.url = `./${id}`
    }
}
