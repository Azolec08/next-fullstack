import { connectDb } from "@/library/connectdb";
import { Post } from "@/library/model";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: any) => {
  const { slug } = params;
  try {
    connectDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    throw new Error("Something went Wrong on your post");
  }
};

export const DELETE = async (req: any, { params }: any) => {
  const { slug } = params;
  try {
    connectDb();
    const post = await Post.deleteOne({ slug });
    return NextResponse.json("Post Deleted");
  } catch (err) {
    throw new Error("Something went Wrong on your post");
  }
};
