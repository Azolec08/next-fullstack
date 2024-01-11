"use server";
import { revalidatePath } from "next/cache";
import { connectDb } from "./connectdb";
import { Post, User } from "./model";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const myDeletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDb();
    await Post.findByIdAndDelete(id);
    console.log("Your post has been deleted");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return "something went wrong";
  }
};

export const deletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDb();
    await Post.findByIdAndDelete(id);
    console.log("Your post has been deleted");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return "something went wrong";
  }
};

//add users

export const deleteUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("Your post has been deleted");
    revalidatePath("/admin");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return "something went wrong";
  }
};

//add User

export const addUser = async (previousState: any, formData: any) => {
  //   const title = formData.get("title");
  //   const author = formData.get("author");
  //   const imageLink = formData.get("imageLink");
  //   const userId = formData.get("userId");
  //   const slug = formData.get("slug");

  // console.log(title, author, imageLink, userId, slug);

  const { userName, password, email, image } = Object.fromEntries(formData);

  try {
    connectDb();
    const newUser = new User({
      userName,
      password,
      email,
      image,
    });

    await newUser.save();
    console.log("Your post has been saved to db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return "something went wrong";
  }
};

export const addPost = async ({ previuosState, formData }: any) => {
  //   const title = formData.get("title");
  //   const author = formData.get("author");
  //   const imageLink = formData.get("imageLink");
  //   const userId = formData.get("userId");
  //   const slug = formData.get("slug");

  // console.log(title, author, imageLink, userId, slug);

  const { title, author, image, userId, slug } = Object.fromEntries(formData);

  try {
    connectDb();
    const newPost = new Post({
      title,
      author,
      image,
      userId,
      slug,
    });

    await newPost.save();
    console.log("Your post has been saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

//login

export const handleLogin = async () => {
  await signIn("github");
};

//logout
export const handleLogout = async () => {
  await signOut();
  console.log("You have been Logout");
};

//Register

export const register = async (previousState: any, formData: any) => {
  const { userName, email, password, image, passwordRepeat } =
    Object.fromEntries(formData);

  const user = await User.findOne({ userName });

  if (user) {
    return { error: "Username already exist" };
  }

  if (password !== passwordRepeat) {
    return { error: "passwords matching failed" };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connectDb();
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      image,
    });

    await newUser.save();

    return { success: true };
  } catch (err) {
    console.log(err);
    return { err: "Something went wrong" };
  }
};

//Login Account

export const login = async (previousState: any, formData: any) => {
  const { userName, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { userName, password });
  } catch (err: any) {
    console.log(err);
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
