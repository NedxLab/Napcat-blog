import { FaPhotoVideo } from "react-icons/fa";
import Link from "next/link";
import { format } from "date-fns";
import urlFor from "@/utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { IPosts } from "@/types/types";

const PostsLists = ({ id, title, slug, date, image, snippet }: IPosts) => {
  return (
    <>
      <div className="cursor-pointer group ">
        <div
          className={
            "relative h-40 w-[80vw] overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105 md:w-80 "
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
              className="  capitalize   bg-gradient-to-r from-green-200 to-indigo-400
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

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time className="text-sm" dateTime={date}>
            {format(new Date(date), "yyyy-MM-dd")}
          </time>
        </div>
      </div>
    </>
  );
};
export default PostsLists;
