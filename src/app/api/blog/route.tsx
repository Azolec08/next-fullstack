import { connectDb } from "@/library/connectdb";
import { Post } from "@/library/model";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    connectDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    throw new Error("Failed to fetch post");
  }
};
