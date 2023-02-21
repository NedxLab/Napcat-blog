// frontend/pages/index.tsx
import PostsLists from "@/components/PostsLists";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import imageUrlBuilder from "@sanity/image-url";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Index: NextPageWithLayout = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <h1>Welcome to a blog!</h1>
      <div className="grid gap-8 mt-10 lg:gap-8 md:grid-cols-2 xl:grid-cols-3 px-12">
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
