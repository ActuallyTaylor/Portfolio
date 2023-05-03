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

        let jellycuts = new TayFS_File("Jellycuts", "Jellycuts is an IDE for iOS shortcuts that allows you to create complex shortcuts quickly and easily. You can create a shortcut in the Jelly language, a full programming language for iOS Shortcuts. Jellycuts then takes your code and converts it into shortcuts that are runnable in the shortcuts app.", "jellycuts.png", ApplicationDatabase.netsplorer, "./jellycuts", TayFS_Datatype.url)
        myProjectsDirectory.addUnit(jellycuts)

        // Photography
        let photographyDirectory = new TayFS_Directory("Photography", "View all of my photo galleries and download any that you want!", "folder.png")
        documentsDirectory.addUnit(photographyDirectory)

        // Blog Posts
        let blogPostsDirectory = new TayFS_Directory("Blog Posts", "View and read all of my blog posts!", "folder.png")
        documentsDirectory.addUnit(blogPostsDirectory)

        // Passes
        let passesDirectory = new TayFS_Directory("Wallet Passes", "View and download my Apple World Wide Developer Conference passes!", "folder.png")
        documentsDirectory.addUnit(passesDirectory)        

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
            app.name == name
        })

        if (index == -1) {
            return ApplicationDatabase.applications[0]
        }

        return ApplicationDatabase.applications[index]
    }

    public addAlert(alert: OSAlert) {
        this.alerts.push(alert)
    }
}