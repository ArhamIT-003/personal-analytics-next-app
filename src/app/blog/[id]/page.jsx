import Image from "next/image";
import blog4 from "/public/blog4.jpg";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("API Request failed. Try again!");
  }

  return res.json();
};

const BlogId = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div>
      {/*top Container*/}
      <div className="flex space-x-5 my-5">
        {/*text Container*/}
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-3xl font-extrabold">{data.title}</h2>
          <p className="my-5">{data.desc}</p>
          <div className="flex items-center gap-5">
            <Image
              src={blog4}
              alt="new-img"
              width={60}
              height={60}
              className="object-cover rounded-full"
            />
            <span className="font-extralight">Arham Khan</span>
          </div>
        </div>
        {/*img container */}
        <div className="flex-1 flex items-end relative w-80 h-72">
          <Image
            src={data.image}
            alt="blog-id-img"
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
      {/*bottom Container*/}
      <div className="mb-5">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogId;
