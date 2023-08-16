import Link from "next/link";
import illustration from "/public/illustration.png";
import website from "/public/websites.jpg";
import app from "/public/apps.jpg";

const Portfolio = () => {
  return (
    <div>
      <h2 className="text-3xl my-5">Choose a gallery</h2>
      <div className="flex gap-12">
        <Link
          href="/portfolio/illustrations"
          className="border-4 border-button-text rounded-md h-80 w-80 relative bg-cover"
          style={{
            backgroundImage: `url(${illustration.src})`,
          }}
        >
          <span className="absolute bottom-4 left-4 text-3xl font-bold">
            Illustrations
          </span>
        </Link>
        <Link
          href="/portfolio/website"
          className="border-4 border-button-text rounded-md h-80 w-80 relative bg-cover"
          style={{
            backgroundImage: `url(${website.src})`,
          }}
        >
          <span className="absolute bottom-4 left-4 text-3xl font-bold">
            Website
          </span>
        </Link>
        <Link
          href="/portfolio/applications"
          className="border-4 border-button-text rounded-md h-80 w-80 relative bg-cover"
          style={{
            backgroundImage: `url(${app.src})`,
          }}
        >
          <span className="absolute bottom-4 left-4 text-3xl font-bold">
            Applications
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
