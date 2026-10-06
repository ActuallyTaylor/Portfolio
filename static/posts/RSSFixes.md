---
title: Fixing my RSS feed 
slug: fixingRSSFeed
description: A quick set of updates to my RSS feed.
author: Taylor Lineman
date: 2026-10-05T22:45:00.000Z
series: misc
memoji: kpop_heart
memojiBackground: light_blue
---

I was messing around with [Reeder](https://reederapp.com/) recently and found that my blog did not parse correctly. This was surprising to me, since I already matched the [RSS 2.0 Specification](https://www.rssboard.org/rss-specification#ltcategorygtSubelementOfLtitemgt).

To try and figure out what was wrong, I started downloading other blogs that worked in Reeder. I found that they either embedded the entire html content into the `description` tag, or used the `content:encoded` tag. I had never heard of the encoded content field; it isn't in the RSS 2.0 spec...

Well, it turns out RSS uses [namespaces](https://www.w3.org/TR/REC-xml-names/) for extending functionality. The `content:encoded` tag is a part of the popular [Content Namespace Extension](https://www.feedforall.com/content.html). So one quick addition later, and my blog now properly renders in feed readers!

## Extras
While I was at it, I also spruced up the channel description by adding some more optional tags: `webMaster`, `lastBuildDate`, `language`, and `docs`.

## Other Blogs
1. https://www.caseyliss.com/rss
2. https://sixcolors.com/rss/
3. https://hypercritical.co/feeds/main