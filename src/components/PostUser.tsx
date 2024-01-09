import React from "react";
import { getUser } from "@/library/utils";
import Image from "next/image";
import "./componentStyle.scss";

const PostUser = async ({ userId, created }: any) => {
  const user = await getUser(userId);

  return (
    <section className="flex items-center gap-3 p-3">
      <div className="relative w-9 h-9">
        <Image
          className="rounded-full"
          src={user.image ? user.image : "/nonImage.jpg"}
          alt="userImg"
          fill
        />
      </div>
      <h1 className="font-semibold">{user.userName}</h1>
      <div>{created.toString().slice(0, 10)}</div>
    </section>
  );
};

export default PostUser;
