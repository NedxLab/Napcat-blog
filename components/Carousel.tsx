import Image from "next/image";
import client from "@/client";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { format } from "date-fns";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const BlogCarousel = ({ posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < posts.slice(2, 8).length - 1 ? currentSlide + 1 : 0
      );
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <div className="flex items-center justify-center m-7">
        <div className=" carousel  my-0 mx-auto overflow-hidden ">
          <div
            className={`carousel-inner flex flex-row  whitespace-nowrap transition duration-700 ease-out hover:ease-in ${
              currentSlide === 0 ? "animate-begin" : " "
            }`}
            style={{ transform: `translateX(${-currentSlide * 100}vw)` }}
          >
            {posts.length > 0 &&
              posts.slice(2, 8).map(
                ({
                  _id,
                  title = "",
                  slug = "",
                  publishedAt = "",
                  mainImage = "",
                  snippet = "",
                }) =>
                  slug && (
                    <div
                      className="carousel-item group  msd:grid msd:grid-cols-12 min-w-[100vw] max-w-[100vw] w-screen"
                      key={_id}
                    >
                      <Image
                        src={urlFor(mainImage).url()}
                        alt={`${title}'s picture`}
                        height={200}
                        width={400}
                        className="col-start-1 w-[95vw] min-w-[95vw] msd:w-[40vw] msd:max-w-[40vw] msd:min-w-[40vw] h-60 "
                      />
                      <div className="msd:col-start-6 msd:col-end-13 px-3">
                        <h1 className="text-2xl whitespace-pre-wrap py-5 px-7 mr-6 capitalize font-semibold sm:text-5xl">
                          {title}
                        </h1>
                        <h1 className="text-lg px-7 capitalize font-semibold ">
                          {format(new Date(publishedAt), "yyyy-MM-dd")}
                        </h1>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
      <div className="carousel-indicators  flex flex-row justify-center items-center z-10">
        {posts.slice(2, 8).map((posts, index) => (
          <button
            className={`carousel-indicator-item h-0.5 border-none   m-1 cursor-pointer ${
              currentSlide === index
                ? " bg-black w-6 opacity-100"
                : "bg-slate-400 w-4 opacity-50"
            }`}
            key={index}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default BlogCarousel;
