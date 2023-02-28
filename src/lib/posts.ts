import { readdirSync, readFileSync } from 'fs';
import fm from "front-matter"
import type { BlogEntry } from './models/BlogEntry';

export function readPosts(): BlogEntry[] {
    let blogs: BlogEntry[] = []

    readdirSync("./static/posts/").forEach((file) => {
        let readFile = readFileSync(`./static/posts/${file}`)
        let frontmatter = fm(readFile.toString());
        let attributes = frontmatter.attributes
        let title = attributes.title;
        let slug = attributes.slug;
        let description = attributes.description;
        let author = attributes.author;
        let date = new Date(attributes.date);
        let hex = `#${attributes.hex}`
        let content = frontmatter.body
        
        blogs.push({title, slug, description, author, date, hex, content})
    });      

    blogs.sort(function(a,b): any{
            return (b.date.getTime() - a.date.getTime());
    });

    return blogs
}

export function createRSSFeed(): string {
    const title = escapeXml("Zachary Lineman");
    const description = escapeXml("Zachary Lineman's Blog");
    const siteURL = escapeXml("https://actuallyzach.com");

    let feedItems = "";

    readPosts().forEach(element => {
        feedItems += `
    <item>
        <title>${escapeXml(element.title)}</title>
        <description>${escapeXml(element.description)}</description>
        <pubDate>${element.date.toUTCString()}</pubDate>
        <link>${siteURL}/blog/${escapeXml(element.slug)}</link>
        <guid isPermaLink="true">${siteURL}/blog/${escapeXml(element.slug)}</guid>
    </item>
        `
    });

    let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel>
<title>${title}</title>
<description>${description}</description>  
<link>${siteURL}/blog/rss</link>
<atom:link href="${siteURL}/blog/rss" rel="self" type="application/rss+xml" />
${feedItems}
</channel>
</rss>
`

    return rss
}

function escapeXml(unsafe: string) {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}
