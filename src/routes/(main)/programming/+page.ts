import type { RequestEvent } from '@sveltejs/kit'
import { works, openSource } from "$lib/data"

export async function load(event: RequestEvent) {
    let currentProjects = works.filter((project) => {
        return project.category == "current";
    });

    let currentTeamProjects = works.filter((project) => {
        return project.category == "currentTeam";
    });

    let pastProjects = works.filter((project) => {
        return project.category == "past";
    });

    let currentOpenSource = openSource.filter((project) => {
        return project.category == "current";
    });

    let pastOpenSource = openSource.filter((project) => {
        return project.category == "past";
    });

    return {
        currentProjects,
        currentTeamProjects,
        pastProjects,
        currentOpenSource,
        pastOpenSource
    }
}
