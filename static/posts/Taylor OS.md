---
title: Taylor OS
slug: tayos
description: Writing my own mock operating system for the browser!
author: Taylor Lineman
date: 2023-05-03T14:05:90.590-04:00
hex: 8BA8EF
readingTime: 3 min read
series: misc
---
Through bouts of studying for finals the past few days I have been working on something that I think is pretty cool. A mock operating system right in the browser! This website is basically a new way to check out all of the stuff on this main website, except it feels like you are exploring it using an operating system from the 90s.

> If you want to check out the site you can jump this article and see it in action [here](/os)!

The majority of the operating system is designed after old macOS versions specifically [System 6](https://infinitemac.org/1991/System%206.0.8?machine=Mac+Plus) and [System 7](https://infinitemac.org/1991/System%207.0?machine=Mac+Plus). I used a combination of [Infinite Mac](https://infinitemac.org/) and my own newly acquired Mac Pro to get the design down!

> Obligatory picture of the computer in all of it's glory! This photo is from before the cleaning so it is still stained and dirty. Since then it has been cleaned up and everything has been verified to work! (Except the k key 🫠)

![Mac Pro](/assets/blogs/Mac_Pro.jpeg)


## Getting the site up and running
It was a ton of fun to get everything written for the mock operating system. I was super impressed by [Svelte's ](https://kit.svelte.dev/) malleability and how easily it adapted to the very non-standard website environment. I was still able to use all of the features of Svelte that I use on my main site, with barely any trouble.

### The trouble
The biggest issue with writing the entire program was keeping the data up to date across the different views. Normally Svelte handle's this by passing data through the DOM when items are loaded and unloaded. However, this mock operating system is not working like a normal site. There is no page changes to load new data and you never leave the `/os` part of `actuallytalyor.com`. To get around this, I used Svelte's `createEventDispatcher`. This function basically allows you to create custom `on:{function}` actions for any Svelte component. This allows you to pass data back up the component stack. Passing back up the data stack is the only time we have to really deal with this because Svelte automagically handles passing object changes down the stack.

This is some code pulled from the [source code](https://github.com/ActuallyTaylor/Portfolio/blob/main/src/lib/components/TAY_OS/menubar/MenuBarIcon.svelte) showing off how the `createEventDispatcher` functions.
```typescript
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

function toggleFocus() {
	if (focusedMenuBarItem == item) {
		dispatch("defocusMenuItem", {
			item: item
		})
	} else {
		dispatch("focusMenuItem", {
			item: item
		})
	}
}
```
## Some plans for the future
In the future I am planning to continue development on this fun little extension to my site; albeit I am going to slow down development. I want to bring the rest of my site into it, so that would be my blogs, wallet passes, and photography. I want to add some fun little tools such as a MacPaint clone, a word processor, calculator and maybe some programming using web assembly!

## Thats all for now!
I hope you all enjoy messing around in my little mock operating system! If you have any suggestions or question you can reach my at `TaylorLineman@mastodon.social`.
