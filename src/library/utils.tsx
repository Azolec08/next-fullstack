import { connectDb } from "./connectdb";
import { User, Post } from "./model";
import { unstable_noStore as noStore } from "next/cache";

//getPost
export const getPosts = async () => {
  try {
    connectDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Post");
  }
};

export const getPost = async (slug: any) => {
  try {
    connectDb();
    const posts = await Post.findOne({ slug });
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Post");
  }
};

export const getUser = async (id: any) => {
  noStore();
  try {
    connectDb();
    const appUser = await User.findById(id);
    return appUser;
  } catch (error) {
    console.log(error);
    throw new Error("Error App User");
  }
};

export const getAllUsers = async () => {
  try {
    connectDb();
    const appUser = await User.find();
    return appUser;
  } catch (error) {
    console.log(error);
    throw new Error("Error Connecting from user");
  }
};
