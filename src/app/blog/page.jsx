import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("API Request failed. Try again!");
  }
  return res.json();
};

export const metadata = {
  title: "All Blogs",
  description: "This is the all blogs page",
};

const Blog = async () => {
  const data = await getData();

  return (
    <div className="flex flex-col gap-10">
      {/*Container*/}

      {/*Blog Post 1*/}

      {data.map((item) => (
        <>
          <Link
            key={item._id}
            href={`/blog/${item._id}`}
            className="flex gap-10 my-10 items-center"
          >
            {/*image Container*/}
            <div className="flex-none">
              <Image
                src={item.image}
                alt="blog-img"
                width={400}
                height={160}
                className=" object-contain"
              />
            </div>
            {/*text Container*/}
            <div className="flex-initial flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold mb-2">{item.title}</h2>
              <p className=" text-sm">{item.desc}</p>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Blog;
