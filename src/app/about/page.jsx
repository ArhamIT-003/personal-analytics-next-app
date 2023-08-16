import Image from "next/image";
import AboutUs from "/public/about-us.jpeg";

const About = () => {
  return (
    <div>
      {/* Image Container */}
      <div className=" w-full h-72 relative">
        <Image
          src={AboutUs}
          alt="about-us"
          fill={true}
          className=" object-cover grayscale"
        />
        <div className="absolute bg-button-bg text-white bottom-5 left-5 p-1">
          <h1 className="text-3xl font-extrabold">Digital Storytellers</h1>
          <h2 className="text-xl">
            Handcrafting award winning digital experience
          </h2>
        </div>
      </div>
      {/* Text Container */}
      <div className="flex space-x-20 my-10">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-2">Who Are We?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            corporis nihil quod.
            <br />
            <br />
            Omnis molestiae aperiam quod! Illo hic iusto aliquam, tempora sit
            laudantium nobis vel eligendi enim debitis dolor voluptas?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit.
            <br />
            <br />
            Sit corporis nihil quod. Omnis molestiae aperiam quod! Illo hic
            iusto aliquam, tempora sit laudantium nobis vel eligendi enim
            debitis dolor voluptas?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Sit corporis nihil quod.
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-2">Who Are We?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            corporis nihil quod. Omnis molestiae aperiam quod! Illo hic iusto
            aliquam, tempora sit laudantium nobis vel eligendi enim debitis
            dolor voluptas?Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Sit corporis nihil quod.
            <br />
            <br />
            - Creative illustrations
            <br />
            <br />
            - Dynamic Website
            <br />
            <br />- Fast and handy mobile apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
