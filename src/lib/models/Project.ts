import type { WebPage } from "./WebPage/WebPage"

export class Project {
    name: string
    subtitle: string
    id: string
    category: string

    constructor(name: string, subtitle: string, id: string, category: string) {
        this.name = name
        this.subtitle = subtitle
        this.id = id
        this.category = category
      }  
}
