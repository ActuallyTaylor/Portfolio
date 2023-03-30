---
title: Porting Doom (Part 1)
slug: portingDoomP1
description: Doom runs on anything, right?
author: Taylor Lineman
date: 2023-03-13T22:03:56.356-04:00
hex: db4436
---
![Doom.png](/assets/blogs/portingDoomP1/Doom.png)
> It's not pretty but it is a fully ported version of Doom!

## The Backstory
For as long as I can remember I have been interested in computers. Some of my favorite interests growing up were retro games. I have to credit these interests to my Dad, who grew up with an Atari, and programming on floppy drives. When I was a kid, he taught me how to program in Microsoft Visual Basic, which sparked my interest in programming. The next spark in the fuse that led me to where I am was Minecraft red stone and command blocks. The basic programing available using red stone and command blocks created the building blocks for my interest in computer science. 

> Sorry for the recipe website backstory there... Let's get back to the topic 

I assume that through your adventures on the internet you have heard, read or seen the statement that "Doom can run on anything" or the question posed whenever an interesting new device is released "Can it run Doom?". Well the answer to these questions is usually Yes! Because Doom 1993 was written in C and is a fairly light game with a low bar for hardware. The ingredients needed for a device to run doom are: something you can compile C code for, a way to give the user information about what's on screen, and a way for the user to control the game

BOOM! That's it, that is really all that a device needs to do to run a Doom Port.

## The Adventure Starts
Throughout my entire time on the internet, I have always seen the statement that "Doom can run on anything". This definitive statement has always interested me, I have always wanted to be in the position where I have a weird platform in front of me, one that hasn't had doom run on it yet.

Well recently I fell right into that position. While working on the [RIT-EVT](https://rit-evt.com) Team I have had the pleasure of working on our Dirt Electric Vehicle One's (DEV 1) Heads Up Display and Lighting unit (HUDL). This device is a **128 x 64 pixel 2 bit display** that shows data to the rider of the motorcycle while they are operating the vehicle.

This is what the HUDL v1.1 looks like:

![HUDLv1_1.jpg](/assets/blogs/portingDoomP1/HUDLv1_1.jpg)

The HUDL internally runs on an STM32F334K8U6, not a super powerful chip but it is perfectly good for everything that we do on RIT-EVT. The display has a ST7565 chip, and an NHD-C12864A1Z display. These all combine together to make the Heads up display for DEV 1.

### What work did I do on the HUDL?
The meat of the code that I wrote for the HUDL is a display driver and graphics library (kinda) for the ST7565 chip, and the NHD-C12864A1Z display. The code that I wrote manages display bitmaps, text, and sections to the screen. The majority of the heavy lifting is done in display bitmaps, which is how the majority of things are displayed on the screen. All text characters come from a 4x6 pixel bitmap font that is then rendered onto the screen however the user wants. If you want to check out this code you can see [LCD.hpp](https://github.com/RIT-EVT/EVT-core/blob/main/include/EVT/dev/LCD.hpp) and [LCD.cpp](https://github.com/RIT-EVT/EVT-core/blob/main/src/dev/LCD.cpp) on the EVT-Core repository. 

#### Getting the display ready for DOOM
Now, even though I had working code for all of the purposes that EVT needs on the bike, I still needed a little bit more to get Doom running. Specifically, I needed the ability to control each and every pixel on the display. Something that the display does not natively support. To accomplish this I used a little bit shifting magic to set specific bits in the display's Bitmap based on the (X, Y) coordinates I provide it.

#### The HUDL-Emulator (⚠️ DISCLAIMER ⚠️)
Before we get started, there is one quick thing we have too talk about. That is the **HUDL Emulator**. This piece of software emulates the operation of the ST7565 chip, and an NHD-C12864A1Z display, allowing members of RIT-EVT to mess around with HUDL display code without a physical HUDL. 

Because I do not have a physical HUDL, this part of the blog post takes place completely on the **HUDL Emulator**. Once I get back to Rochester and have a physical HUDL, I will work on getting this code to run on an STM32 completely with no help from the computer. However this may take a bit as I still have a lot of hardware bringup to complete before I can justify messing around with Doom.

### Now where does DOOM show up?
**Doom shows up right here!** 

Throughout my time working on the HUDL I have been joking about running Doom on it. Recently I brought this up, and a bunch of people loved it. They thought it would be one of best things we could put onto the HUDL. This inspired me to actually port Doom, however we were currently in Hardware Bringup mode (making sure that all of our brand new boards work completely with the board). 

This meant, there was really no time for me to work on Doom for the HUDL. However, it happens to be spring break for RIT this week, and I am away from all of the hardware I need to do hardware bringup. That means, I have no homework and no EVT work. Which happens to be the perfect ingredients for a boredom and childhood fantasy inspired Doom port!

## Porting Doom (The fun? part)
Now we start the actual fun part of the article, porting Doom 1993!

### Finding the Doom source code
The first step in any new project is going to google and just pasting in exactly what you are trying to do. For me this was simple, I just typed "porting doom", boom 🤯 the second result is exactly what we want. [Doomgeneric](https://github.com/ozkl/doomgeneric) is a Source Port of the [original Doom code released by ID software](https://github.com/id-Software/DOOM). This repository can trace its fork lineage through a couple projects that clean up the original Doom source code and make it more portable. 

The reason this repository shows up so prominently is for it's glorious work in making Doom porting super easy, this wok boils down into 6 functions that you need to implement. Once these 6 functions are implemented, you have yourself a fully working port of Doom on any platform. The five functions that need to be implemented are below.
| Functions         | Description                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| DG_Init           | Initialize your platfrom (create window, framebuffer, etc...).                      |
| DG_DrawFrame      | Frame is ready in DG_ScreenBuffer. Copy it to your platform's screen.               |
| DG_SleepMs        | Sleep in milliseconds.                                                              |
| DG_GetTicksMs     | The ticks passed since launch in milliseconds.                                      |
| DG_GetKey         | Provide keyboard events.                                                            |
| DG_SetWindowTitle | Not required. This is for setting the window title as Doom sets this from WAD file. |
> This table is from the `README` of [Doomgeneric](https://github.com/ozkl/doomgeneric)

### Getting the Project Setup
Getting the project setup, was harder than I expected. A majority of my time was spent trying to figure out how to get the C and C++ code to correctly link. Compiling was as easy as adding all of my files into my CMakeLists.txt file. That worked perfectly, compiling the entirety of Doom with almost no hitches. The hitches that were there, seemed like a simple fix but proved to be difficult.

#### The Big Error
The first error I was received, was expected. I had not yet implemented any of the required functions , so obviously nothing would compile.
```
Undefined symbols for architecture arm64:
  "_DG_DrawFrame", referenced from:
      _I_FinishUpdate in i_video.c.o
  "_DG_GetKey", referenced from:
      _I_GetEvent in i_input.c.o
  "_DG_GetTicksMs", referenced from:
      _I_GetTicks in i_timer.c.o
  "_DG_Init", referenced from:
      _dg_Create in doomgeneric.c.o
  "_DG_SetWindowTitle", referenced from:
      _I_SetWindowTitle in i_video.c.o
  "_DG_SleepMs", referenced from:
      _I_Sleep in i_timer.c.o
```
After adding simple implementations for these 6 functions in my `.cpp` file at the root of my HUDL-Emulator code I received the following message 
```
declaration of 'DG_DrawFrame' has a different language linkage
declaration of 'DG_GetTicksMs' has a different language linkage
declaration of 'DG_Init' has a different language linkage
declaration of 'DG_SetWindowTitle' has a different language linkage
declaration of '_DG_SleepMs' has a different language linkage
```
Uh-oh, well that is an issue. All of my HUDL code is written in C++ and now I can't write any of my code in a C++ file? That was going to be an issue.

#### Solving the Language Linkage Problem
After searching for quite some time, I found the following snippet of code that would be my saving light `extern "C"`. These two keywords saved this entire project, from the brink of doom (pun intended).

After adding an `extern "C"` block surrounding my bare-bones implementations of the 6 functions, I hit compile and run and hoped for the best 🤞... However once you think you have solved a problem it is never that easy. I once again got the exact same error. 

```
declaration of 'DG_DrawFrame' has a different language linkage
...
```

What the heck! I thought that I had just told the C++ compiler this should all be C, so shouldn't it be happy? Well it turns out that there was one more crucial step that I needed for this to work completely. That step was wrapping the original function declarations in `doomgeneric.h` in a CPP compiler check. This looked like the following:
```c
#ifdef __cplusplus  
extern "C" {
void DG_Init();
void DG_DrawFrame();
void DG_SleepMs(uint32_t ms);
uint32_t DG_GetTicksMs();
int DG_GetKey(int* pressed, unsigned char* key);
void DG_SetWindowTitle(const char * title);};
#else  
void DG_Init();  
void DG_DrawFrame();  
void DG_SleepMs(uint32_t ms);  
uint32_t DG_GetTicksMs();  
int DG_GetKey(int* pressed, unsigned char* key);  
void DG_SetWindowTitle(const char * title);  
#endif
```

Now we hit compile and run and wait 🤞... It compiled! No errors and no complaining about missing symbols. Perfect! Now I could finally move forward with my port.

##### What is `extern "C"`?
`extern "C"`, allows you to tell the C++ compiler that the following code you are about to write is going to be an odd mix of C and C++ and should be accessible to C libraries. This means that the C++ compiler will not make its Symbol name changes to any functions either declared with `extern "C"` or wrapped in an `extern "C"` block. Th

### Learning Doom and implementing it
The next step of the project was looking through the Doom source code and all of the changes made by [Doomgeneric](https://github.com/ozkl/doomgeneric).

The most vital part to my Doom port would be actually displaying the game, so I started there. I looked through the rendering code for the game, until I found the implementation for `DG_ScreenBuffer`.  The part that matters the most to us is the line below. 
```c
/** 
 * i_video.c line 253
 */
void I_FinishUpdate (void)  
{  
	...
	line_out = (unsigned char *) DG_ScreenBuffer;
	...
    line_out += (SCREENWIDTH * fb_scaling * (s_Fb.bits_per_pixel/8)) + x_offset_end;  
	...  
	DG_DrawFrame();  
}
```
This line copies the view rendered by Doom into the `DG_ScreenBuffer` variable. It then calls `DG_DrawFrame` which you will recognize as one of the functions we need to implement. 

This meant that the majority of the work I would need to do centers around `DG_DrawFrame`, with most of that being translating this massive *320x200 pixels 32 bit per pixel screen* buffer into my measly *128x64 2 bit per pixel display* buffer.

### Implementing `DG_DrawFrame`
`DG_DrawFrame`, is by far the most important function in this entire Doom port. In my setup, I created two supporting functions for `DG_DrawFrame` to actually function, those two functions are `update` and `compressPixel`. I will go into depth below in what each function actually does.

```c++
uint8_t compressPixel(uint32_t pixel) {  
    uint8_t red = pixel >> 16;  
    uint8_t green = pixel >> 8;  
    uint8_t blue = pixel >> 0;  
    uint8_t transp = pixel >> 24;  
  
    return (blue + green  + red) / 3;  
}  
  
void update() {  
    int x = 0;  
    int y = 0;  
  
    for (int i = 1; i < DOOMGENERIC_RESY - 1; i++) {  
        if (i % pixelSize == 0) {  
            for (int j =  1; j < DOOMGENERIC_RESX - 1; j++) {  
                if (j % pixelSize == 0) {  
                    if (y < LCD::screenSizeY && x < LCD::screenSizeX) {  
                        uint32_t currentFlatIndex = i * DOOMGENERIC_RESX + j;  

                        uint32_t centerPixel = DG_ScreenBuffer[currentFlatIndex];  
                        uint8_t centerPixelValue = compressPixel(centerPixel);  
  
                        if (centerPixelValue < pixelCutoff) {  
                            lcd.setPixel(x, y, false);  
                        } else {  
                            lcd.setPixel(x, y, true);  
                        }  
  
                        x ++;  
                    }  
                }
            }
            y ++;  
            x = 0;  
        }  
    }  
}

void DG_DrawFrame() {  
    update();  
    lcd.updateDisplay();  
  
    // Can be removed for actual HUDL.  
    imguiProcess();  
    mainWindow.process();  
}
```

#### Compress Pixel
This subroutine function is used to compress a 32 bit pixel into an 8 bit grayscale pixel. It does this by taking the RGB values of the pixel and averaging them. At one point I did have an optional value to weight the different color values. But this was removed because it did not add that much to the quality of the display.

#### Update
This is where the biggest chunk of compression code is. In the future I would love to turn this function into a bilinear sampler to actually get a much better representation of the screen. However for now it is a very rudimentary linear sampler that takes the pixels every `pixelSize` and compresses them. This works surprisingly well for what we need it to do.

#### DG_DrawFrame
This is the main function that is called by the actual doom source. As you can see this function mostly acts as a dispatcher. calling out to the update function and the display update function. Below those two functions however, you can see the `imguiProcess` and `mainWindow.process()` functions. These are used for showing an [Dear Imgui](https://github.com/ocornut/imgui) editor window for altering display variables as the game plays, and running the actual OpenGL code used to display the emulator on screen.

## The Results!
Now what you have all been waiting for, some actual results. 

> Here is a demo of Doom running on the HUDL emulator with keyboard input showing the actual gameplay and how it looks running around.

<video controls>
    <source src="/assets/blogs/portingDoomP1/PlayableDoom.mov" type="video/mp4" alt="Demo of Doom Running">
</video>

> The graphics editor in action, which was used for fine tuning all of the individual settings for the cutoff level of the grayscale.

<video controls>
    <source src="/assets/blogs/portingDoomP1/GraphicsEditor.mov" type="video/mp4" alt="Realtime variable editing.">
</video>

> The first time the game was actually displayed!

<video controls>
    <source src="/assets/blogs/portingDoomP1/FirstDisplay.mov" type="video/mp4" alt="First time the game is displayed!">
</video>

> This is me not understanding pointers completely and actually just displaying the games memory. I think it looks pretty cool.

<video controls>
    <source src="/assets/blogs/portingDoomP1/OddMemory.mov" type="video/mp4" alt="Odd Pointer Stuff">
</video>

## In The End
This was a super fun project, I really enjoyed getting to complete one of my childhood dreams of porting doom to a really weird computer. I am super excited to get this running on the real HUDL once I get back up to Rochester. 

Make sure to watch for a Part 2 of this article that will document this process!

For now I will just leave you with these great messages from the RIT-EVT slack after I posted my success

![Response.png](/assets/blogs/portingDoomP1/Response.png)