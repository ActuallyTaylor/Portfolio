import type {BlogEntry} from "$lib/models/BlogEntry";
import type {OpenGraph} from "$lib/models/OpenGraph";

export interface BlogProps {
    blog: BlogEntry
    openGraph: OpenGraph
}