import { readPhotos } from '#lib/photos.js'
import type { RequestEvent } from '@sveltejs/kit'
export const prerender = true

// export async function load(event: RequestEvent) {
//     let photos = readPhotos()

//     return {
//         photos: photos
//     }
// }
