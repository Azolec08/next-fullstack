import { Suspense } from "react";
import { getPost } from "@/library/utils";
import { PostUser } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import "./style.scss";

const getMyPost = async (slug: any) => {
  const data = await fetch(`${process.env.POST}/${slug}`);

  if (!data.ok) {
    throw new Error("Semething went wrong");
  }

  return data.json();
};

const Page = async ({ params }: any) => {
  const { slug } = params;
  const post = await getMyPost(slug);
  return (
    <section className="w-full p-5 flex items-center justify-center">
      <div className={` show-left card w-96 bg-base-100 shadow-xl`}>
        <figure>
          <Image
            className="transition-opacity"
            src={post?.image}
            alt="heroImg"
            width="500"
            height="500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </figure>
        <div>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} created={post.createdAt} />
            </Suspense>
          )}
        </div>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link href="/">
              <button className="btn btn-primary">Go Back to page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
