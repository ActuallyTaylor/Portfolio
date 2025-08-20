import { readdirSync, readFileSync } from "fs";
import path from "path";
import type { Photo } from "./models/Photo";

export function readPhotos(): Photo[] {
  const metadataPath = "./static/photos/metadata.json";
  const metadata = JSON.parse(readFileSync(metadataPath, "utf-8"));

  return metadata.map((item: any) => ({
    gallery_path: `/photos/gallery/${item.filename}`,
    caption: item.caption,
  }));
}
