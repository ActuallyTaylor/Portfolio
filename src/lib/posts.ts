import {create} from 'xmlbuilder2';
import {readdirSync, readFileSync} from "fs";
import fm from "front-matter";
import type {BlogEntry} from "./models/BlogEntry";

export function readPosts(): BlogEntry[] {
    let blogs: BlogEntry[] = [];

    readdirSync("./static/posts/").forEach((file) => {
        if (file.includes(".md")) {
            let readFile = readFileSync(`./static/posts/${file}`);
            let frontmatter = fm(readFile.toString());
            let attributes = frontmatter.attributes;

            //@ts-ignore
            let {title, slug, description, author, readingTime, series} = attributes;

            //@ts-ignore
            let date = new Date(attributes.date);

            //@ts-ignore
            let hex = `#${attributes.hex}`;

            let content = frontmatter.body;

            blogs.push({
                title,
                slug,
                series,
                readingTime,
                description,
                author,
                date,
                hex,
                content,
            });
        }
    });

    blogs.sort(function (a, b): any {
        return b.date.getTime() - a.date.getTime();
    });

    return blogs;
}

export function createRSSFeed(): string {
    const title = "Taylor Lineman";
    const siteURL = "https://actuallytaylor.com";

    const root = create({version: '1.0'})
        .ele('rss', {
            version: '2.0',
            'xmlns:atom': 'http://www.w3.org/2005/Atom',
            'xmlns:dc': 'http://purl.org/dc/elements/1.1/'
        })
        .ele('channel')
        .ele('title').txt(title).up()
        .ele('description').txt("Taylor's ramblings and development updates.").up()
        .ele('link').txt(siteURL + '/blog/rss').up()
        .ele('atom:link', {href: siteURL + '/blog/rss', rel: 'self', type: 'application/rss+xml'}).up();

    readPosts().forEach((element) => {
        root.ele('item')
            .ele('title').txt(element.title).up()
            .ele('description').txt(element.description).up()
            .ele('pubDate').txt(element.date.toUTCString()).up()
            .ele('link').txt(siteURL + '/blog/' + element.slug).up()
            .ele('guid', {isPermaLink: 'true'}).txt(siteURL + '/blog/' + element.slug).up()
    })

    return root.end({prettyPrint: true});
}
