import React from "react";
import { getAllUsers } from "@/library/utils";
import Image from "next/image";
import { deletePost } from "@/library/action";
const AdminPost = async () => {
  const users = await getAllUsers();

  return (
    <div>
      {users.map((posts) => {
        return (
          <div className="p-2" key={posts.id}>
            <div className="card w-72 bg-base-100 shadow-xl image-full">
              <figure>
                <Image src={posts.image || "/nonImage.jpg"} alt="Shoes" fill />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{posts.userName}</h2>
                <p>{}</p>
                <form action={deletePost} className="card-actions justify-end">
                  <button className="btn btn-primary">Delete</button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminPost;
