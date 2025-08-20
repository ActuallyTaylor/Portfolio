import type { WindowReference } from "$lib/models/TAY_OS/WindowReference"
import type { Application } from "$lib/models/TAY_OS/Application"
import { ApplicationDatabase } from "./ApplicationDatabase"
import { TayFS, TayFS_Datatype, TayFS_Directory, TayFS_File, TayFS_Program } from "./FileSystem"
import type { OSAlert } from "$lib/models/TAY_OS//OSAlert"

export class TaylorOS {
    id: number = 0
    fileSystem: TayFS = new TayFS()
    openWindows: WindowReference[] = []
    focusedWindow: (WindowReference | null) = null
    currentlyFocusedApp: Application = ApplicationDatabase.applications[0]
    background = "/assets/images/backgrounds/bg_1.jpg"

    alerts: OSAlert[] = []

    constructor() {
        let rootDirectory = new TayFS_Directory("TaylorOS", "The root directory for Taylor OS", "taybot.svg")
        this.fileSystem.addUnit(rootDirectory)

        // MARK: Documents
        let documentsDirectory = new TayFS_Directory("Documents", "All of the documents that live within my site!", "folder.png")
        rootDirectory.addUnit(documentsDirectory)

        // Projects
        let myProjectsDirectory = new TayFS_Directory("My Projects", "The storage space for all of my projects!", "folder.png")
        documentsDirectory.addUnit(myProjectsDirectory)

        let jellycuts = new TayFS_File("Jellycuts", "Jellycuts is an IDE for iOS shortcuts.", "jellycuts.png", ApplicationDatabase.netsplorer, "./jellycuts", TayFS_Datatype.url)
        myProjectsDirectory.addUnit(jellycuts)

        let scumMap = new TayFS_File("SCUM Map", "SCUM Map is a map for the SCUM video game!", "scummap.png", ApplicationDatabase.netsplorer, "./scum", TayFS_Datatype.url)
        myProjectsDirectory.addUnit(scumMap)

        let manny = new TayFS_File("Manny for Mastodon", "Manny for Mastodon is a sleek and simple Mastodon client for iOS and macoS!", "manny.png", ApplicationDatabase.netsplorer, "./manny", TayFS_Datatype.url)
        myProjectsDirectory.addUnit(manny)

        let firefly = new TayFS_File("Firefly", "Firefly is a syntax highlighter for iOS and macOS", "manny.png", ApplicationDatabase.netsplorer, "./firefly", TayFS_Datatype.url)
        myProjectsDirectory.addUnit(firefly)

        let hephaestus = new TayFS_File("Hephaestus", "Hephaestus is my senior project in high school, it is a C++ and OpenGL game engine", "hephaestus.png", ApplicationDatabase.netsplorer, "./hephaestus", TayFS_Datatype.url)
        myProjectsDirectory.addUnit(hephaestus)

        let solarExplorer = new TayFS_File("Solar Explorer", "Solar Explorer is my 2022 submission to Apple's WWDC Swift Student Challenge", "solarexplorer.png", ApplicationDatabase.netsplorer, "./solarexplorer", TayFS_Datatype.url)
        myProjectsDirectory.addUnit(solarExplorer)
        
        let tia = new TayFS_File("T.I.A", "T.I.A is my 2021 submission to Apple's WWDC Swift Student Challenge", "tia.png", ApplicationDatabase.netsplorer, "./tia", TayFS_Datatype.url)
        myProjectsDirectory.addUnit(tia)

        let dungoenOfEpsilon = new TayFS_File("Dungeon of Epsilon", "The Dungeon of Epsilon is my 2020 submission to Apple's WWDC Swift Student Challenge", "dungoenofepsilon.png", ApplicationDatabase.netsplorer, "./dungoenofepsilon", TayFS_Datatype.url)
        myProjectsDirectory.addUnit(dungoenOfEpsilon)

        
        // // Photography
        // let photographyDirectory = new TayFS_Directory("Photography", "View all of my photo galleries and download any that you want!", "folder.png")
        // documentsDirectory.addUnit(photographyDirectory)

        // // Blog Posts
        // let blogPostsDirectory = new TayFS_Directory("Blog Posts", "View and read all of my blog posts!", "folder.png")
        // documentsDirectory.addUnit(blogPostsDirectory)

        // // Passes
        // let passesDirectory = new TayFS_Directory("Wallet Passes", "View and download my Apple World Wide Developer Conference passes!", "folder.png")
        // documentsDirectory.addUnit(passesDirectory)        

        // MARK: Applications
        let applicationsDirectory = new TayFS_Directory("Applications", "The applications folder, containing all of the applications available to Taylor OS", "folder.png")
        rootDirectory.addUnit(applicationsDirectory)

        // Babel Application
        let babelApp = new TayFS_Program("Babel", "Babel is the file browser packaged with Taylor OS", "taybot.svg", ApplicationDatabase.babel, true)
        applicationsDirectory.addUnit(babelApp);

        // About Application
        let aboutApp = new TayFS_Program("About", "The about application that generates about information for all applications", "file.png", ApplicationDatabase.about, true)
        applicationsDirectory.addUnit(aboutApp);

        // About Application
        let netsplorer = new TayFS_Program("Netsplorer", "Netsplorer is TayOS's built in browser 🤯", "netsplorer.svg", ApplicationDatabase.netsplorer, true)
        applicationsDirectory.addUnit(netsplorer);
    }

    public getApplicationByName(name: string): Application {
        const index = ApplicationDatabase.applications.findIndex(app => {
            return app.name == name
        })

        console.log(index)
        if (index == -1) {
            return ApplicationDatabase.applications[0]
        }

        return ApplicationDatabase.applications[index]
    }

    public addAlert(alert: OSAlert) {
        this.alerts.push(alert)
    }
}