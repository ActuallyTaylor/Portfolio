import type { Project } from "$lib/models/Project";
import type { WebPage } from "$lib/models/WebPage/WebPage";

export interface ProjectPageData {
    project: Project
    webpage: WebPage
}