export class BlogEntry {
    title: string
    slug: string
    series: string
    readingTime: string
    description: string
    author: string
    date: Date
    hex: string
    content: string

    constructor(title: string, slug: string, series: string, readingTime: string, description: string, author: string, date: Date, hex: string, content: string) {
        this.title = title
        this.slug = slug
        this.series = series
        this.readingTime = readingTime
        this.description = description
        this.author = author
        this.date = date
        this.hex = hex
        this.content = content
      }
}
