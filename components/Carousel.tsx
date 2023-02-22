import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import client from "@/client";
import imageUrlBuilder from "@sanity/image-url";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const BlogCarousel = ({ posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < posts.length - 1 ? currentSlide + 1 : 0
      );
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <div className="flex items-center justify-center m-7">
        <div className=" carousel  my-0 mx-auto overflow-hidden ">
          <div
            className="carousel-inner flex flex-row  whitespace-nowrap transition duration-700 ease-out hover:ease-in"
            style={{ transform: `translateX(${-currentSlide * 100}vw)` }}
          >
            {posts.length > 0 &&
              posts.map(
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
                        className="col-start-2 w-screen min-w-[95vw] msd:w-[40vw] msd:max-w-[40vw] msd:min-w-[40vw] h-60 "
                      />
                      <h1 className="text-5xl p-5 capitalize font-semibold msd:col-start-8">
                        {title}
                      </h1>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
      <div className="carousel-indicators  flex flex-row justify-center items-center z-10">
        {posts.map((posts, index) => (
          <button
            className={`carousel-indicator-item w-4 h-0.5 border-none   m-1 cursor-pointer ${
              currentSlide === index
                ? " bg-rose-800 opacity-100"
                : "bg-slate-300 opacity-50"
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
