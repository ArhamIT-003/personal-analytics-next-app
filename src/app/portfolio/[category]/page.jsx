import Button from "@/components/Button/button";
import Image from "next/image";
import illustrate from "/public/port1.jpg";
import web from "/public/port2.jpg";
import app from "/public/port3.jpg";

const PorfolioId = ({ params }) => {
  const catId = params.category;
  return (
    <div>
      {/* Container */}
      <h2 className="capitalize text-button-bg text-3xl my-5 font-bold">
        {catId}
      </h2>
      {/* 1 Content Container */}
      <div className="flex items-center justify-center gap-24 my-14">
        {/* text container */}
        <div className="flex-1 flex flex-col gap-10">
          <h2 className="text-3xl font-extrabold">Lorem ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eligendi dicta aut architecto, commodi omnis illo reiciendis, ex eum
            consectetur distinctio repellat natus delectus enim ad saepe fugiat,
            inventore accusantium?
          </p>
          <Button title="Read more" url="/about" />
        </div>
        {/* image Container */}
        <div className="flex-1 relative h-110">
          <Image
            src={illustrate}
            alt="new-img"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      {/* 2 Content Container */}
      <div className="flex items-center justify-center gap-24 my-14 flex-row-reverse">
        {/* text container */}
        <div className="flex-1 flex flex-col gap-10">
          <h2 className="text-3xl font-extrabold">Lorem ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eligendi dicta aut architecto, commodi omnis illo reiciendis, ex eum
            consectetur distinctio repellat natus delectus enim ad saepe fugiat,
            inventore accusantium?
          </p>
          <Button title="Read more" url="/about" />
        </div>
        {/* image Container */}
        <div className="flex-1 relative h-110">
          <Image
            src={web}
            alt="new-img"
            fill={true}
            className=" object-cover"
          />
        </div>
      </div>
      {/* 3 Content Container */}
      <div className="flex items-center justify-center gap-24 my-14">
        {/* text container */}
        <div className="flex-1 flex flex-col gap-10">
          <h2 className="text-3xl font-extrabold">Lorem ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eligendi dicta aut architecto, commodi omnis illo reiciendis, ex eum
            consectetur distinctio repellat natus delectus enim ad saepe fugiat,
            inventore accusantium?
          </p>
          <Button title="Read more" url="/about" />
        </div>
        {/* image Container */}
        <div className="flex-1 relative h-110">
          <Image src={app} alt="new-img" fill={true} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default PorfolioId;
