import { type RequestEvent, error } from '@sveltejs/kit'

import { works } from "#lib/data.js"
import { Project } from "#lib/models/Project.js"

export async function load(event: RequestEvent) {
    const id = "solarexplorer"

    let project: Project | undefined = works.find((obj: Project) => {
        return obj.id == id
    })

    if (project === undefined) {
        error(404, 'Project not found');
    }

    return project;
}
