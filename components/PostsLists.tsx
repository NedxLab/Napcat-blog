import { FaPhotoVideo } from "react-icons/fa";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/client";
import Image from "next/image";
import groq from "groq";
import { PortableText } from "@portabletext/react";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const PostsLists = ({ id, title, slug, date, image, snippet }) => {
  return (
    <>
      <div className="cursor-pointer group ">
        <div
          className={
            "relative w-80 h-40 overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105 "
          }
        >
          <Link href={`/post/${encodeURIComponent(slug.current)}`}>
            {image ? (
              <Image
                src={urlFor(image).url()}
                alt={`${title}'s picture`}
                height={300}
                width={600}
                className="min-h-full min-w-full"
              />
            ) : (
              <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <FaPhotoVideo />
              </span>
            )}
          </Link>
        </div>
        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
          <Link href={`/post/${encodeURIComponent(slug.current)}`}>
            <span
              className="  capitalize   bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              {title}
            </span>
          </Link>
        </h2>
        <PortableText value={snippet} />
        {/* <div className="hidden">
          {post.excerpt && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              <Link href={`/post/${post.slug.current}`}>
                {post.excerpt}
              </Link>
            </p>
          )}
        </div> */}

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time className="text-sm" dateTime={date}>
            {format(parseISO(date), "MMMM dd, yyyy")}
          </time>
        </div>
      </div>
    </>
  );
};
export default PostsLists;
