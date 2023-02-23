import imageUrlBuilder from "@sanity/image-url";
import client from "@/client";

export default function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}
