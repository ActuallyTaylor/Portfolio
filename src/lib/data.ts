import { BlogEntry } from "./models/BlogEntry";
import { Project } from "./models/Project";
import { WebPage, WebPageSection, WebPageSectionType } from "./models/WebPage/WebPage";

export class Data {
    static works: Project[] = [
        new Project("Jellycuts", "iOS App", "jellycuts", "ios"),
        new Project("SCUM Map", "iOS App", "scum", "ios"),
        new Project("Firefly", "iOS App", "firefly", "ios"),
        new Project("Hephaestus", "Game Engine", "hephaestus", "software"),
        new Project("Solar Explorer", "Simulation", "solarexplorer", "simulations"),
        new Project("T.I.A", "Simulation", "tia", "simulations"),
        new Project("Dungeon <br/>of Epsilon", "Game", "dungoenofepsilon", "software")
    ];
    static interests: Project[] = [
        new Project("Roe v. Wade", "Event", "roevwade", "photography"),
        new Project("R.I.T", "Infared", "ritinfared", "infaredPhotography"),
        new Project("Wonder", "Place", "wonderspace", "photography"),
        new Project("Misc", "Infared", "miscinfared", "infaredPhotography"),
    ];

    static blogs: BlogEntry[]= [
        new BlogEntry("helloWorld", "Hello World!", "Tuesday September 7th", `
            Welcome to my new website! I have been working on this site for quite some time now.
        `)
    ];

    static pages: WebPage[] = [
        new WebPage("jellycuts", "Jellycuts", "Supercharge your Shortcuts", "#EECAFF", [
            new WebPageSection(WebPageSectionType.description, "Powerful Shortcuts", "Create extremely powerful shortcuts with Jellycuts. Jellycuts is an IDE for iOS shortcuts that allows you to create complex shortcuts quickly and easily. You can create a shortcut in the Jelly language, a full language for iOS Shortcuts. Jellycuts takes your code and converts it into shortcuts that are runnable in the shortcuts app.", undefined),
            new WebPageSection(WebPageSectionType.leftAlignedDescription, "iOS App", "Jellycuts offers both an iOS and iPad OS app! These apps can be used to directly intereact with Shortcuts on iOS and iPadOS devices. It uses both SwiftUI and UIKit as UI framework, and my custom text editor Firefly.", "/assets/icon.png")
        ])
    ]
}

