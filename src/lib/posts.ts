import { readdirSync, readFileSync } from 'fs';
import fm from "front-matter"
import type { BlogEntry } from './models/BlogEntry';

export function readPosts(): BlogEntry[] {
    let blogs: BlogEntry[] = []

    // readdirSync("/posts").forEach((file) => {
    //     let readFile = readFileSync(`./static/posts/${file}`)
    //     let frontmatter = fm(readFile.toString());
    //     let attributes = frontmatter.attributes
    //     let title = attributes.title;
    //     let slug = attributes.slug;
    //     let description = attributes.description;
    //     let author = attributes.author;
    //     let date = new Date(attributes.date);
    //     let hex = `#${attributes.hex}`
    //     let content = frontmatter.body
        
    //     blogs.push({title, slug, description, author, date, hex, content})
    // });      

    return blogs
}