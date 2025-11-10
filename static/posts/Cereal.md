---
title: Cereal
slug: cereal
description: Writing a serial console for macOS.
author: Taylor Lineman
date: 2025-03-27T00:00:00.000Z
hex: ea7ca4
readingTime: 2 min read
series: misc
---
## Motivation
[Cereal](https://github.com/ActuallyTaylor/cereal) is an idea that I have had for a couple of years now. The idea started while I was working on my first project at RIT EVT. We use UART to connect to all of our devices for debug and information printing. On macOS, this means that you use *[screen](https://www.gnu.org/software/screen/manual/screen.html)* to view the serial connection.

Using screen on macOS requires two commands: the first is to list the open serial ports, the second is running screen itself:
```bash
ls /dev/tty.* &&
ls /dev/*modem*

screen /dev/tty.usbmodem2103
```

In reality, two commands are not a problem; it takes about 30 seconds to run the entire combination. The relative non-problem that screen causes was just not a big enough deal, so I put off working on this program for a couple of years.

During the Spring 2025 semester, I took a class on embedded software engineering. Many of the assignments required receiving UART output from our Nucleo-L476RG. This brought up the same issues I was having at EVT. This class was the tipping point; after a month of using screen, I got the free time needed to write my serial console.

## First Iteration: Screen Improved
Originally, *cereal* was called *screen-improved*. The plan was to write a wrapper around screen that would add `ctrl-c` to quit and a picker for the serial port.

After fully implementing *screen-improved*, I found that fundamentally it was flawed. Launching screen in a subprocess did not let me intercept `ctrl-c` in the manner I wanted.

I sat on this issue while running errands for the next hour or so. Eventually, I decided that if I can just use a library like [ORSSerialPort](https://github.com/armadsen/ORSSerialPort) to read the serial connection, I can implement the serial console directly without the need to run screen as a subprocess!

## Second Iteration: Cereal
### Writing Cereal
*Cereal* came to life fairly quickly; it took less than two hours to implement [ORSSerialPort](https://github.com/armadsen/ORSSerialPort). There were no real hitches until I had to implement proper exit behavior. Capturing the SIGINT sent by hitting `ctrl-c` was straightforward, but actually quitting the program proved to be difficult.

Since I was using [Swift Argument Parser's](https://github.com/apple/swift-argument-parser) `ParsableCommand`, I had to exit using the functions they provide. Right off the bat, I had trouble calling exit. It turns out that I could not rely on the default `exit()` function; rather, I had to run `ParsableCommand.exit(withError:)`. This really tripped me up; it took me a while to wrap my head around how to properly call the exit function and get the exit codes I wanted.

### The Outcome
![cereal sample image](/assets/blogs/cereal_sample.png)
Cereal came out looking really nice. It uses pickers styled after [clack](https://www.clack.cc/). It also works really well. I tested it with multiple projects with different UART communication implementations, and it worked flawlessly.

## Conclusion
Writing *cereal* was quick and fun. I set out to solve a problem, and I think what came out of it is a great solution. I will keep using and improving *cereal* for as long as I write embedded software.

I have some plans for the future of *cereal*, so work on it is not done yet. I will continue to improve the program as I find more features that I want to add!

## Links
- cereal: https://github.com/ActuallyTaylor/cereal
- screen: https://www.gnu.org/software/screen/manual/screen.html
- Swift Argument Parser: https://github.com/apple/swift-argument-parser
- ORSSerialPort: https://github.com/armadsen/ORSSerialPort
