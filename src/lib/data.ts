import { BlogEntry } from "./models/BlogEntry";
import { Project } from "./models/Project";
import { WebPage, WebPageSection, WebPageSectionType } from "./models/WebPage/WebPage";

export class Data {
    static works: Project[] = [
        new Project("Jellycuts", "iOS App", "jellycuts", "ios"),
        new Project("SCUM Map", "iOS App", "scum", "ios"),
        new Project("Firefly", "iOS Framework", "firefly", "ios"),
        new Project("Hephaestus", "Game Engine", "hephaestus", "software"),
        new Project("Solar Explorer", "Simulation", "solarexplorer", "simulations"),
        new Project("T.I.A", "Simulation", "tia", "simulations"),
        new Project("Dungeon <br>of Epsilon", "Game", "dungoenofepsilon", "software")
    ];
    static interests: Project[] = [
        new Project("Roe v. Wade", "Protest", "roevwade", "photography"),
        new Project("R.I.T", "Infrared", "ritinfrared", "infraredPhotography"),
        new Project("Wonder", "Place", "wonderspace", "photography"),
        new Project("Misc", "Infrared", "miscinfrared", "infraredPhotography"),
    ];

    static blogs: BlogEntry[]= [
        new BlogEntry("helloWorld", "Hello World!", "Tuesday September 7th", `
            Welcome to my new website! I have been working on this site for quite some time now.
        `)
    ];
}

