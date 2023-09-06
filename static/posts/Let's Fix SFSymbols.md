---
title: Let's Fix SFSymbols
slug: fixSFSymbols
description: Using SFSymbols in code can be annoying, let's fix that.
author: Taylor Lineman
date: 2023-06-20T22:06:72.672-08:00
hex: f48d55
readingTime: 4 min read
---
During Apple Platform development, you are going to use [SFSymbols](https://developer.apple.com/sf-symbols/). They are an amazing tool that provides you with so many beautiful icons. However, using them can be a little annoying...

Let's look at how you normally use an SFSymbol in SwiftUI:

```swift
Image(systemName: "star")
```
This is all well in good until you start searching for the right symbol. If you want to look for the symbol you need, the first step is to open the [SFSymbols App](https://developer.apple.com/sf-symbols/), and then search for your symbol. You then need to copy the symbol name and paste it **as a string** into your code.

Don't get me wrong, this entire process is super easy, but we like Swift here, so let's swiftify SFSymbols!

> TLDR: If you want to jump right to the repository here is the link!
> https://github.com/ActuallyTaylor/SFSymbols

## Getting Started
The first step to Swiftifing something like this is to look at how we deal with large sets of strings we like to pick through.

The first option is to make all of these symbols a static member of an `SFSymbol struct`. This is an option but not what we want.

The next option is to create an `SFSymbol enum`. This is the perfect choice for what we want! It allows us to have a single enumeration that contains all 5000+ SFSymbols with access to all of them inline. We can also easily add variables and functions that we need to the enumeration. An enumeration also allows us to store small amounts of data using parameters within enumeration cases. This is perfect for when we have a custom symbol that needs to store its name.

## Where I ended up
### Enumeration
The following code is pulled directly from the [SFSymbol Enumeration](https://github.com/ActuallyTaylor/SFSymbols/blob/main/Sources/SFSymbols/SFSymbol.swift). It is a fairly simple enum when you look at the SFSymbols Version 4 section, however, once you reach the SFSymbols Version 5, there are 4 extra lines needed to add some availability checks.

> These could be condensed into a single `@available(iOS 17, macOS 15, watchOS 15, tvOS 17)` check, however, that would lose the ability to add an availability message.

```swift
public enum SFSymbol: Equatable {
    case custom(_ named: String)

    // Version 4
    case square_and_arrow_up
    case square_and_arrow_up_fill
    case square_and_arrow_up_circle
	...
	// Version 5
	@available(iOS, introduced: 17, message: "This symbol is only available in iOS 17")
	@available(macOS, introduced: 15, message: "This symbol is only available in macOS 15")
	@available(watchOS, introduced: 10, message: "This symbol is only available in watchOS 10")
	@available(tvOS, introduced: 17, message: "This symbol is only available in tvOS 15")
	case chineseyuanrenminbisign_square_fill
	...
}
```

### Using in SwiftUI
Now for the actual important part, using the library with SwiftUI!

It is really quite simple, you just create a SwiftUI Image and then use the dot notation for whichever symbol you want. The library will handle the rest! There is no need to remember strings or any other information about the symbols you want to use.
```swift
import SFSymbols // Import SFSymbols

Image(.hammer) // Boom 💥, it is that simple.
```

If you want to use a custom symbol, it is also super easy. You just use the `.custum(named:_)` case of the `SFSymbol` enumeration and the library will automatically detect it and grab the symbol from your Asset catalog instead of Apple's System Images.

```swift
import SFSymbols

Image(.custom("spaceship")) // Will use a custom symbol file located in your assets folder!
```
## Using in your projects!
Including the package in your projects is super easy, you just need to add the following to your SPM modules.
```
https://github.com/ActuallyTaylor/SFSymbols
```
If you are adding this as a dependency to a Swift Package you can add the following code to your dependencies list:
```swift
.package(url: "https://github.com/ActuallyTaylor/SFSymbols", branch: "main")
```
