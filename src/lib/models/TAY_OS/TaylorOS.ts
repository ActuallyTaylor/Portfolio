import type { WindowReference } from "$lib/models/TAY_OS/WindowReference"
import type { Application } from "$lib/models/TAY_OS/Application"
import { ApplicationDatabase } from "./ApplicationDatabase"
import { TayFS, TayFS_Directory } from "./FileSystem"

export class TaylorOS {
    id: number = 0
    fileSystem: TayFS = new TayFS()
    openWindows: WindowReference[] = []
    focusedWindow: (WindowReference | null) = null
    currentlyFocusedApp: Application = ApplicationDatabase.applications[0]
    background = "/assets/images/backgrounds/bg_1.jpg"

    constructor() {
        let rootDirectory = new TayFS_Directory("TaylorOS", "The root directory for Taylor OS", "taybot.svg")
        this.fileSystem.addUnit(rootDirectory)

        // MARK: Documents
        let documentsDirectory = new TayFS_Directory("Documents", "All of the documents that live within my site!", "folder.png")
        rootDirectory.addUnit(documentsDirectory)

        // Projects
        let myProjectsDirectory = new TayFS_Directory("My Projects", "The storage space for all of my projects!", "folder.png")
        documentsDirectory.addUnit(myProjectsDirectory)

        // Photography
        let photographyDirectory = new TayFS_Directory("Photography", "View all of my photo galleries and download any that you want!", "folder.png")
        documentsDirectory.addUnit(photographyDirectory)

        // Blog Posts
        let blogPostsDirectory = new TayFS_Directory("Blog Posts", "View and read all of my blog posts!", "folder.png")
        documentsDirectory.addUnit(blogPostsDirectory)

        // Passes
        let passesDirectory = new TayFS_Directory("Wallet Passes", "View and download my Apple World Wide Developer Conference passes!", "folder.png")
        documentsDirectory.addUnit(passesDirectory)
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
}