import { type RequestEvent, error } from '@sveltejs/kit'

import { works } from "$lib/data"
import { Project } from "$lib/models/Project"

export async function load(event: RequestEvent) {
    const id = "scum"

    let project: Project | undefined = works.find((obj: Project) => {
        return obj.id == id
    })

    if (project === undefined) {
        error(404, 'Project not found');
    }

    return project;
}
