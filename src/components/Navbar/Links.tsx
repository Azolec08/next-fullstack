import Link from "next/link";
import React from "react";
import { linkProps } from "@/types";
type dataProps = {
  datas: linkProps;
};

const Links = ({ datas }: dataProps) => {
  return (
    <div className={datas.style}>
      <Link href={datas.path}>{datas.title}</Link>
    </div>
  );
};

export default Links;
