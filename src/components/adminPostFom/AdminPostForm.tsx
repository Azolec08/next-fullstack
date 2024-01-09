"use client";
import { addPost } from "@/library/action";
import React from "react";
import { useFormState } from "react-dom";

const AdminPostForm = ({ session }: any) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <div>
      <form action={formAction}>
        <input type="text" placeholder="title" name="title" />
        <input
          type="hidden"
          placeholder="UserId"
          name="userId"
          value={session}
        />
        <input type="text" placeholder="author" name="author" />
        <input type="text" placeholder="image" name="image" />
        <input type="text" placeholder="slug" name="slug" />
        <button>Add Post</button>
        {state?.error}
      </form>
    </div>
  );
};

export default AdminPostForm;
