// frontend/pages/index.tsx
import PostsLists from "@/components/PostsLists";
import groq from "groq";
import client from "../client";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import BlogCarousel from "@/components/Carousel";
import { IPosts } from "@/types/types";

const Index: NextPageWithLayout = ({ posts }: any) => {
  console.log(posts);

  return (
    <>
      <h1 className="mx-6 pt-4 text-3xl font-bold">Napcat Blog</h1>
      <p className="mx-6">
        Stay up to date with the latest stories and commentary brought to you by
        Binance, the world's leading blockchain and crypto ecosystem.
      </p>
      <BlogCarousel posts={posts} />
      <div className="grid gap-8 mt-10 lg:gap-8 md:grid-cols-2 xl:grid-cols-3 px-12">
        {posts.length > 0 &&
          posts.map(
            ({ _id, title, slug, publishedAt, mainImage, snippet }: IPosts) =>
              slug && (
                <PostsLists
                  id={_id}
                  title={title}
                  slug={slug}
                  date={publishedAt}
                  image={mainImage}
                  snippet={snippet}
                  key={_id}
                />
              )
          )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
        ...,
      }
    `);
  return {
    props: {
      posts,
    },
  };
}

Index.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Index;
