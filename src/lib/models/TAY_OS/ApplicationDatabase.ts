import { Application } from "$lib/models/TAY_OS/Application"

export class ApplicationDatabase {
    static babel = new Application("Babel", "Babel is the file explorer that comes with Taylor OS. It's name is a homage to the Library of Babel, known as the infinite library.", "taybot.svg", [])
    static about = new Application("About", "About allows you to see information about any app in Taylor OS!", "taybot.svg", [])

    static applications: Application[] = [
        ApplicationDatabase.babel
    ]
}

