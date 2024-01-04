import React from "react";
import { mongoType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type postsPorps = {
  posts: mongoType;
};

const PostCard = ({ posts }: postsPorps) => {
  return (
    <div className="w-full flex justify-center py-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="relative h-56">
          <Image src={posts.image} alt="Shoes" fill priority={true} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{posts.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link href={`/blog/${posts.slug}`}>
              <button className="btn btn-primary">More Information</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
