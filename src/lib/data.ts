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
            new WebPageSection(WebPageSectionType.description, 
                "What is Jellycuts?", "Jellycuts is an IDE for iOS shortcuts that allows you to create complex shortcuts quickly and easily. You can create a shortcut in the Jelly language, a full programming language for iOS Shortcuts. Jellycuts then takes your code and converts it into shortcuts that are runnable in the shortcuts app.", 
                undefined,
                undefined),
            new WebPageSection(WebPageSectionType.leftAlignedDescription, 
                "iOS App", "Jellycuts offers both an iOS and iPad OS app! These apps can be used to directly intereact with Shortcuts on iOS and iPadOS devices. It uses both SwiftUI and UIKit as UI framework, and my custom text editor <a href='https://github.com/ActuallyZach/Firefly'>Firefly</a>. The iOS app has been in development for almost 3 years with 2 years on the app store and 11 months in testflight.", 
                "/assets/images/jellycuts/Screenshot.png",
                `
                <a href="https://apps.apple.com/us/app/jellycuts/id1522625245" target="_blank">
                    <img alt="iOS AppStore Badge" srcset="/assets/badges/appBadge.png 1x, /assets/badges/appBadge@2x.png 2x" class="appstoreButton" />
                </a>
                `)
        ]),
        new WebPage("scum", "SCUM Map", "Know the game", "#D1FFCA", [
            new WebPageSection(WebPageSectionType.rightAlignedDescription, 
                "Scum MAP App", "Scum map is a map app for the game Scum. It has a modern and sleek design that allows for multiple sets of pins across the map and user-added fully customizable pins. User added pins can shared between you and your squadmates. Pins sync instantly between you and your mates, making sure that you never miss a change in plans.", 
                "/assets/images/scum/Screenshot.png",
                `
                <a href="https://apps.apple.com/us/app/id1515805855" target="_blank">
                    <img alt="Scum AppStore Badge" srcset="/assets/badges/appBadge.png 1x, /assets/badges/appBadge@2x.png 2x" class="appstoreButton" />
                </a>
                `)
        ])

    ]
}

