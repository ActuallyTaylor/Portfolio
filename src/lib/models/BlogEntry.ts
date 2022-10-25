export class BlogEntry {
    id: string
    name: string
    date: string
    content: string

    constructor(id: string, name: string, date: string, content: string) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.content = content;
      }  
}
