export class Photo {
    gallery_path: string;
    large_path: string;
    caption: string;

    constructor(gallery_path: string, large_path: string, caption: string) {
        this.gallery_path = gallery_path;
        this.large_path = large_path;
        this.caption = caption;
    }
}
