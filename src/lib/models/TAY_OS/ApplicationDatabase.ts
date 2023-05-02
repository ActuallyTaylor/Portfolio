import { Application } from "$lib/models/TAY_OS/Application";
import { MenuBarItem } from "./MenuBarItem";

export class Data {
    static works: Application[] = [
        new Application("Babel", "Babel is the file explorer that comes with Taylor OS. It's name is a homage to the Library of Babel, known as the infinite library.", "taybot.svg", [
            new MenuBarItem("About Babel")
        ])
    ];
}

