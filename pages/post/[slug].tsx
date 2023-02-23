// [slug].tsx
import Image from "next/image";
import groq from "groq";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import { format } from "date-fns";
import urlFor from "@/utils";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { IPosts } from "@/types/types";

interface IParams extends ParsedUrlQuery {
  slug: string;
}
const Post: React.FC<{ post: IPosts }> = ({ post }) => {
  const { title = "Napcat News", _createdAt, mainImage, body = [] } = post;
  return (
    <article>
      <h1 className="text-4xl px-12 pt-12 font-bold">{title}</h1>

      <p className="px-12">{format(new Date(_createdAt), "yyyy-MM-dd")}</p>
      {mainImage && (
        <Image
          src={urlFor(mainImage).url()}
          alt={`${title}'s picture`}
          height={300}
          width={600}
          className="min-h-full min-w-full p-16"
        />
      )}
      <div className="p-12">
        {" "}
        <PortableText value={body} />
      </div>
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
 ...,
}`;
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params as IParams;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
};
export default Post;
