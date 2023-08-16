import Link from "next/link";
import Button from "../Button/button";

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
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="text-lg font-bold">
        <Link href="/">Maklytics</Link>
      </div>
      <div className="flex items-center space-x-4">
        {navbar.map((list) => (
          <Link key={list.id} href={list.url}>
            {list.title}
          </Link>
        ))}
        <Button title="logout" url="/" />
      </div>
    </div>
  );
};

export default Navbar;
