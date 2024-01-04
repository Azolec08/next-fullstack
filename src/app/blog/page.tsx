import type { Metadata } from "next";
import { getPosts } from "@/library/utils";
import { mongoType } from "@/types";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: " Blog",
  description: "Blog Description",
};

const Blog = async () => {
  const Posts = await getPosts();
  return (
    <section>
      <div className="flex flex-col md:grid grid-cols-2 ">
        {Posts.map((posts: mongoType) => {
          return (
            <div key={posts._id}>
              <PostCard posts={posts} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
