import Image from "next/image";
import blog4 from "/public/blog4.jpg";

const BlogId = () => {
  return (
    <div>
      {/*top Container*/}
      <div className="flex space-x-5 my-5">
        {/*text Container*/}
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h2>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            delectus incidunt iusto error tempore inventore. Autem placeat dicta
            architecto consequatur quos molestias, ea quo id, sint earum, libero
            officia consectetur.
          </p>
          <div className="flex items-center gap-5">
            <Image
              src={blog4}
              alt="new-img"
              width={60}
              height={60}
              className="object-none rounded-full"
            />
            <span className="font-extralight">Arham Khan</span>
          </div>
        </div>
        {/*img container */}
        <div className="flex-1 flex items-end relative w-80 h-72">
          <Image
            src={blog4}
            alt="blog-id-img"
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
      {/*bottom Container*/}
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          blanditiis quo sapiente eos molestiae iusto ex perferendis, distinctio
          omnis labore qui officiis eius commodi in veniam quas beatae
          perspiciatis nesciunt. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Repellat blanditiis quo sapiente eos molestiae iusto
          ex perferendis, distinctio omnis labore qui officiis eius commodi in
          veniam quas beatae perspiciatis nesciunt.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          voluptas harum quis quidem tempore ipsa ut placeat vel, labore animi
          explicabo maiores distinctio possimus illum quisquam facilis quaerat
          voluptatem fugiat?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          iusto harum officia inventore fugiat voluptates, deserunt id alias
          distinctio, neque aperiam quis magnam vero eius unde illo cupiditate
          ea perferendis suscipit in nemo dolor officiis, iure laudantium!
          Soluta provident distinctio optio totam natus dolorem aspernatur
          blanditiis officia expedita, quas consectetur similique dignissimos
          possimus libero, sapiente vel doloremque a.
        </p>
      </div>
    </div>
  );
};

export default BlogId;
