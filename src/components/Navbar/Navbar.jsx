"use client";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useSession, signOut } from "next-auth/react";

const navbar = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Portfolio",
    url: "/portfolio",
  },
];
const Navbar = () => {
  const session = useSession();

  return (
    <div className="h-24 flex items-center justify-between">
      <div className=" text-lg font-bold">
        <Link href="/">Maklytics</Link>
      </div>
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        {navbar.map((list) => (
          <Link key={list.id} href={list.url} className="text-sm">
            {list.title}
          </Link>
        ))}

        {session.status === "authenticated" && (
          <button
            className="cursor-pointer bg-button-bg text-button-text p-2 rounded-md border-none max-w-max text-xs"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
