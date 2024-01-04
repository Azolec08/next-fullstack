"use client";
import { NavList } from "@/constants";
import Links from "./Links";
import style from "./style.module.css";
import { usePathname } from "next/navigation";
import Drawer from "../Drawer";
const Navbar = () => {
  const pathName = usePathname();
  const isAdmin = true;
  const session = true;
  return (
    <header className="w-full p-2">
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
          {session ? (
            <div className="flex">
              {isAdmin && (
                <>
                  <Links
                    datas={{ title: "Admin", path: "/admin", style: "p-2" }}
                  />
                  <button className="px-2 py-2 text-xs rounded-md bg-blue-500 text-white">
                    Logout
                  </button>
                </>
              )}
            </div>
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

export default Navbar;
