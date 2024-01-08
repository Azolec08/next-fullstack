import { addPost, deletePost } from "@/library/action";
import React from "react";

const ActionTest = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="author" name="author" />
        <input type="text" placeholder="imageLink" name="image" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="userId" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ActionTest;
