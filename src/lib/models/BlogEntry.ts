import {CircleColor, type Memoji} from "$lib/memoji";

export class BlogEntry {
    title: string
    slug: string
    series: string
    readingTime: string
    description: string
    author: string
    date: Date
    content: string
    memoji: Memoji
    memojiBackground: CircleColor

    constructor(title: string, slug: string, series: string, readingTime: string, description: string, author: string, date: Date, content: string, memoji: Memoji, memojiBackground: CircleColor) {
        this.title = title
        this.slug = slug
        this.series = series
        this.readingTime = readingTime
        this.description = description
        this.author = author
        this.date = date
        this.content = content
        this.memoji = memoji
        this.memojiBackground = memojiBackground
    }
}
