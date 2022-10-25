import { BlogEntry } from "./models/BlogEntry";
import { Project } from "./models/Project";

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

    static roevwadePhotos: string[] = ["/assets/images/roevwade/compressed/DSC_0045.jpeg", "/assets/images/roevwade/compressed/DSC_0046.jpeg", "/assets/images/roevwade/compressed/DSC_0047.jpeg", "/assets/images/roevwade/compressed/DSC_0052.jpeg", "/assets/images/roevwade/compressed/DSC_0056.jpeg", "/assets/images/roevwade/compressed/DSC_0063.jpeg", "/assets/images/roevwade/compressed/DSC_0066.jpeg", "/assets/images/roevwade/compressed/DSC_0070.jpeg", "/assets/images/roevwade/compressed/DSC_0071.jpeg", "/assets/images/roevwade/compressed/DSC_0072.jpeg", "/assets/images/roevwade/compressed/DSC_0073.jpeg", "/assets/images/roevwade/compressed/DSC_0074.jpeg", "/assets/images/roevwade/compressed/DSC_0080.jpeg", "/assets/images/roevwade/compressed/DSC_0081.jpeg", "/assets/images/roevwade/compressed/DSC_0082.jpeg", "/assets/images/roevwade/compressed/DSC_0092.jpeg", "/assets/images/roevwade/compressed/DSC_0094.jpeg", "/assets/images/roevwade/compressed/DSC_0098.jpeg", "/assets/images/roevwade/compressed/DSC_0100.jpeg", "/assets/images/roevwade/compressed/DSC_0102.jpeg", "/assets/images/roevwade/compressed/DSC_0105.jpeg", "/assets/images/roevwade/compressed/DSC_0106.jpeg", "/assets/images/roevwade/compressed/DSC_0109.jpeg", "/assets/images/roevwade/compressed/DSC_0111.jpeg", "/assets/images/roevwade/compressed/DSC_0112.jpeg", "/assets/images/roevwade/compressed/DSC_0115.jpeg", "/assets/images/roevwade/compressed/DSC_0117.jpeg", "/assets/images/roevwade/compressed/DSC_0121.jpeg", "/assets/images/roevwade/compressed/DSC_0124.jpeg", "/assets/images/roevwade/compressed/DSC_0125.jpeg", "/assets/images/roevwade/compressed/DSC_0128.jpeg", "/assets/images/roevwade/compressed/DSC_0129.jpeg", "/assets/images/roevwade/compressed/DSC_0131.jpeg", "/assets/images/roevwade/compressed/DSC_0132.jpeg", "/assets/images/roevwade/compressed/DSC_0135.jpeg", "/assets/images/roevwade/compressed/DSC_0137.jpeg", "/assets/images/roevwade/compressed/DSC_0139.jpeg", "/assets/images/roevwade/compressed/DSC_0146.jpeg", "/assets/images/roevwade/compressed/DSC_0153.jpeg"]
    static ritinfraredPhotos: string[] = ["/assets/images/ritinfrared/compressed/DSC_0638.jpeg", "/assets/images/ritinfrared/compressed/DSC_0628.jpeg", "/assets/images/ritinfrared/compressed/DSC_0635.jpeg", "/assets/images/ritinfrared/compressed/DSC_0636.jpeg", "/assets/images/ritinfrared/compressed/DSC_0637.jpeg", "/assets/images/ritinfrared/compressed/DSC_0639.jpeg", "/assets/images/ritinfrared/compressed/DSC_0640.jpeg", "/assets/images/ritinfrared/compressed/DSC_0641.jpeg", "/assets/images/ritinfrared/compressed/DSC_0644.jpeg", "/assets/images/ritinfrared/compressed/DSC_0656.jpeg", "/assets/images/ritinfrared/compressed/DSC_0666.jpeg", "/assets/images/ritinfrared/compressed/DSC_0667.jpeg", "/assets/images/ritinfrared/compressed/DSC_0670.jpeg", "/assets/images/ritinfrared/compressed/DSC_0671.jpeg"]
    static wonderPhotos: string[] = ["assets/images/wonder/compressed/DSC_0332.jpeg", "assets/images/wonder/compressed/DSC_0329.jpeg", "assets/images/wonder/compressed/DSC_0337.jpeg", "assets/images/wonder/compressed/DSC_0302.jpeg", "assets/images/wonder/compressed/DSC_0304.jpeg", "assets/images/wonder/compressed/DSC_0306.jpeg", "assets/images/wonder/compressed/DSC_0309.jpeg", "assets/images/wonder/compressed/DSC_0310.jpeg", "assets/images/wonder/compressed/DSC_0313.jpeg", "assets/images/wonder/compressed/DSC_0316.jpeg", "assets/images/wonder/compressed/DSC_0317.jpeg", "assets/images/wonder/compressed/DSC_0322.jpeg", "assets/images/wonder/compressed/DSC_0323.jpeg", "assets/images/wonder/compressed/DSC_0328.jpeg", "assets/images/wonder/compressed/DSC_0338.jpeg", "assets/images/wonder/compressed/DSC_0341.jpeg", "assets/images/wonder/compressed/DSC_0342.jpeg", "assets/images/wonder/compressed/DSC_0367.jpeg", "assets/images/wonder/compressed/DSC_0368.jpeg", "assets/images/wonder/compressed/DSC_0373.jpeg"]
    static miscInfraredPhotos: string[] = ["assets/images/miscinfrared/compressed/DSC_0607.jpeg", "assets/images/miscinfrared/compressed/DSC_0611.jpeg"]
}

