export class Project {
    name: string
    description: string
    id: string
    category: string
    url: string

    constructor(name: string, description: string, id: string, category: string) {
        this.name = name
        this.description = description
        this.id = id
        this.category = category
        this.url = `./${id}`
    }
}
