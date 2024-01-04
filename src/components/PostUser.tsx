import React from "react";
import { getUser } from "@/library/utils";
import Image from "next/image";

const PostUser = async ({ userId }: any) => {
  const user = await getUser(userId);
  return (
    <section className="flex items-center gap-3 p-3">
      <div className="relative w-9 h-9">
        <Image className="rounded-full" src={user.image} alt="userImg" fill />
      </div>
      <h1 className="font-semibold">{user.userName}</h1>
    </section>
  );
};

export default PostUser;
