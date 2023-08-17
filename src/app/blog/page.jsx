import Link from "next/link";
import Image from "next/image";
import blog4 from "/public/blog4.jpg";

const Blog = () => {
  return (
    <div className="flex flex-col gap-10">
      {/*Container*/}

      {/*Blog Post 1*/}

      <Link href="/" className="flex">
        {/*image Container*/}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={blog4}
            alt="blog-img"
            width={400}
            height={250}
            className=" object-cover"
          />
        </div>
        {/*text Container*/}
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam
            deserunt, dolore asperiores fuga blanditiis? Sit amet ex beatae est.
            Cupiditate perspiciatis voluptatem illo dicta optio quas vero, dolor
            facere?
          </p>
        </div>
      </Link>

      {/*Blog Post 2*/}

      <Link href="/" className="flex">
        {/*image Container*/}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={blog4}
            alt="blog-img"
            width={400}
            height={250}
            className=" object-cover"
          />
        </div>
        {/*text Container*/}
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam
            deserunt, dolore asperiores fuga blanditiis? Sit amet ex beatae est.
            Cupiditate perspiciatis voluptatem illo dicta optio quas vero, dolor
            facere?
          </p>
        </div>
      </Link>

      {/*Blog Post 3*/}

      <Link href="/" className="flex gap-5">
        {/*image Container*/}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={blog4}
            alt="blog-img"
            width={400}
            height={250}
            className=" object-cover"
          />
        </div>
        {/*text Container*/}
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam
            deserunt, dolore asperiores fuga blanditiis? Sit amet ex beatae est.
            Cupiditate perspiciatis voluptatem illo dicta optio quas vero, dolor
            facere?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
