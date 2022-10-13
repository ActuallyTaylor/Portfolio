import { Data } from '$lib/data';
import type { Project } from '$lib/models/Project';
import { error, redirect, type RequestEvent } from "@sveltejs/kit";

export async function load(event: RequestEvent) {
    if (typeof event.params.slug !== 'string') {
        throw error(400, "Invalid Project ID")
    }

    let project: Project | undefined = Data.works.find((obj: Project) => {
        return obj.id === event.params.slug;
    })

    if (project == undefined) {
        throw error(404, 'Not found');
    }

    return {
        project: project,
    };
}
