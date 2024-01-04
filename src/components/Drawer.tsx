import React from "react";
import { NavList } from "@/constants";
import Link from "next/link";
Link;

const Drawer = () => {
  return (
    <div>
      <div className="drawer z-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="bg-red-500 btn-primary px-2 py-3 rounded-md cursor-pointer text-xs "
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {NavList.map((list) => {
              return (
                <li key={list.title} className="font-semibold ">
                  <Link href={list.path}>{list.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
