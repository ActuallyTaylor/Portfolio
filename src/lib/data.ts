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

    static roevwadePhotos: string[] = ["/assets/images/roevwade/DSC_0045.jpeg", "/assets/images/roevwade/DSC_0046.jpeg", "/assets/images/roevwade/DSC_0047.jpeg", "/assets/images/roevwade/DSC_0052.jpeg", "/assets/images/roevwade/DSC_0056.jpeg", "/assets/images/roevwade/DSC_0063.jpeg", "/assets/images/roevwade/DSC_0066.jpeg", "/assets/images/roevwade/DSC_0070.jpeg", "/assets/images/roevwade/DSC_0071.jpeg", "/assets/images/roevwade/DSC_0072.jpeg", "/assets/images/roevwade/DSC_0073.jpeg", "/assets/images/roevwade/DSC_0074.jpeg", "/assets/images/roevwade/DSC_0080.jpeg", "/assets/images/roevwade/DSC_0081.jpeg", "/assets/images/roevwade/DSC_0082.jpeg", "/assets/images/roevwade/DSC_0092.jpeg", "/assets/images/roevwade/DSC_0094.jpeg", "/assets/images/roevwade/DSC_0098.jpeg", "/assets/images/roevwade/DSC_0100.jpeg", "/assets/images/roevwade/DSC_0102.jpeg", "/assets/images/roevwade/DSC_0105.jpeg", "/assets/images/roevwade/DSC_0106.jpeg", "/assets/images/roevwade/DSC_0109.jpeg", "/assets/images/roevwade/DSC_0111.jpeg", "/assets/images/roevwade/DSC_0112.jpeg", "/assets/images/roevwade/DSC_0115.jpeg", "/assets/images/roevwade/DSC_0117.jpeg", "/assets/images/roevwade/DSC_0121.jpeg", "/assets/images/roevwade/DSC_0124.jpeg", "/assets/images/roevwade/DSC_0125.jpeg", "/assets/images/roevwade/DSC_0128.jpeg", "/assets/images/roevwade/DSC_0129.jpeg", "/assets/images/roevwade/DSC_0131.jpeg", "/assets/images/roevwade/DSC_0132.jpeg", "/assets/images/roevwade/DSC_0135.jpeg", "/assets/images/roevwade/DSC_0137.jpeg", "/assets/images/roevwade/DSC_0139.jpeg", "/assets/images/roevwade/DSC_0146.jpeg", "/assets/images/roevwade/DSC_0153.jpeg"]

}

