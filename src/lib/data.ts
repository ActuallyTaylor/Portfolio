import type { Project } from "./models/Project";
import worksJSON from "./data/works.json";
import openSourceJSON from "./data/openSource.json";

export let works: Project[] = worksJSON;
export let openSource: Project[] = openSourceJSON;
