import { BlogEntry } from "./models/BlogEntry";
import { Project } from "./models/Project";

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
}

