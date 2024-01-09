"use client";
import { NavList } from "@/constants";
import Links from "./Links";
import style from "../style.module.scss";
import { usePathname } from "next/navigation";
import { Drawer } from "@/components";
import { handleLogout } from "@/library/action";

const ComLink = ({ session }: any) => {
  const pathName = usePathname();

  return (
    <header className="w-full ">
      <div
        className="flex justify-between lg:grid
      lg:grid-cols-3 
      "
      >
        <h3 className="text-2xl">Azolec</h3>
        <ul className={`hidden lg:flex justify-around items-center`}>
          {NavList.map((data) => {
            return (
              <li
                key={data.title}
                className={`${pathName === data.path && style.active}`}
              >
                <Links datas={data} />
              </li>
            );
          })}
        </ul>
        <div className="flex justify-end items-center gap-x-2">
          {session?.user ? (
            <>
              {session.user?.isAdmin && (
                <Links
                  datas={{ title: "Admin", path: "/admin", style: "p-2" }}
                />
              )}

              <form action={handleLogout}>
                <button className="px-2 py-2 text-xs rounded-md bg-blue-500 text-white">
                  Logout
                </button>
              </form>
            </>
          ) : (
            <div>
              <Links
                datas={{ title: "Login", path: "/login", style: "p-3 bg" }}
              />
            </div>
          )}
          <div className="lg:hidden">
            <Drawer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ComLink;
