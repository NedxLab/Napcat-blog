// [slug].tsx
import Image from "next/image";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      console.log(value);

      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      );
    },
  },
};

const Post = ({ post }) => {
  console.log(post);

  const {
    title = "Napcat News",
    _createdAt,
    mainImage,
    authorImage,
    body = [],
  } = post;
  return (
    <article>
      <h1 className="text-4xl font-bold">{title}</h1>

      {_createdAt}
      {mainImage && (
        <Image
          src={urlFor(mainImage).url()}
          alt={`${title}'s picture`}
          height={300}
          width={600}
          className="min-h-full min-w-full p-12"
        />
      )}
      <PortableText value={body} components={ptComponents} />
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
 ...,
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
