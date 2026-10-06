// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { BlogEntry } from "#lib/models/BlogEntry.js";
import type { Project } from "#lib/models/Project.js";

// and what to do when importing types
declare namespace App {
	// interface Locals {}
	interface PageData {
        id: string,
    }

	// interface Error {}
	// interface Platform {}
}
