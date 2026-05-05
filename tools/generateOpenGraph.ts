import {readPosts} from "../src/lib/posts";
import type {BlogEntry} from "../src/lib/models/BlogEntry";
import {existsSync, mkdirSync, writeFileSync} from "node:fs";
import {CircleColor, gradientForCircleColor, Memoji} from "../src/lib/memoji";

import {createCanvas, loadImage} from 'canvas';

// https://stackoverflow.com/a/16599668/14886210
function getLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
    let words = text.split(" ");
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        let width = ctx.measureText(currentLine + " " + word).width;

        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }

    lines.push(currentLine);
    return lines;
}

export async function createMemoji(memoji: Memoji, circleColor: CircleColor, title: string, description: string, backgroundColor: string = "#2A2D3D"): Promise<Buffer> {
    const width = 1280;
    const height = 720;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d')
    ctx.patternQuality = 'best'

    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, width, height)

    // Save the pre-clip state to restore later
    ctx.save()

    const circlePositionX = width / 2;
    const circlePositionY = height / 2.7;
    const circleRadius = 178;

    // Create the clipping circle so the avatars do not have their weird flat bottoms
    ctx.ellipse(circlePositionX, circlePositionY, circleRadius, circleRadius, 0, 0, 2 * Math.PI)
    ctx.clip()

    // Create a circle to be filled by the background gradient
    ctx.ellipse(circlePositionX, circlePositionY, circleRadius, circleRadius, 0, 0, 2 * Math.PI)

    const memojiBackgroundGradient = ctx.createLinearGradient(0, 0, 0, 356);

    // Background colors are stored "color_one,color_two"
    const circleColors = gradientForCircleColor(circleColor)
    memojiBackgroundGradient.addColorStop(0, circleColors[0]);
    memojiBackgroundGradient.addColorStop(1, circleColors[1]);

    ctx.fillStyle = memojiBackgroundGradient
    ctx.fill()

    const memojiSize = 320
    const memojiYOffset = 36
    const memojiX = circlePositionX - (memojiSize / 2)
    const memojiY = circlePositionY - circleRadius + memojiYOffset

    const memojiImage = await loadImage(`./static/memoji/${memoji}.png`)

    ctx.drawImage(memojiImage, memojiX, memojiY, memojiSize, memojiSize)

    // Restore the pre-clip state
    ctx.restore()

    const titleY = height - (height / 4)
    const descriptionStartY = titleY + 50
    const descriptionLineOffsets = 40

    ctx.fillStyle = "#FFFFFF"
    ctx.font = "bold 40px Avenir Next"
    ctx.textAlign = "center"
    ctx.fillText(title, width / 2, titleY)

    const descriptionLines = getLines(ctx, description, 1200)
    let previousHeight = descriptionStartY
    ctx.fillStyle = "#CFCFCF"
    ctx.font = "32px Avenir Next"

    for (const line of descriptionLines) {
        ctx.fillText(line, width / 2, previousHeight, 1200)
        previousHeight += descriptionLineOffsets
    }


    return canvas.toBuffer("image/png")
}

const blogPosts: BlogEntry[] = readPosts()

if (!existsSync('./static/opengraph')) {
     mkdirSync('./static/opengraph')
     mkdirSync('./static/opengraph/blog/')
}

for (const blog of blogPosts) {
    const imageBuffer = await createMemoji(blog.memoji, blog.memojiBackground, blog.title, blog.description);

    writeFileSync(`./static/opengraph/blog/${blog.slug}.png`, imageBuffer)
    console.log(`Created opengraph image for ${blog.title}`)
}