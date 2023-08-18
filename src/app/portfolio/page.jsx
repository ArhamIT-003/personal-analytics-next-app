import Link from "next/link";
import illustration from "/public/illustration.png";
import website from "/public/websites.jpg";
import app from "/public/apps.jpg";

export const metadata = {
  title: "Portfolio",
  description: "This is the portfolio page",
};

const Portfolio = () => {
  return (
    <div>
      <h2 className="text-3xl my-5 font-bold">Choose a gallery</h2>
      <div className="flex gap-12">
        <Link
          href="/portfolio/illustrations"
          className="border-4 border-blue-900 dark:border-button-text rounded-md h-80 w-80 relative bg-cover"
          style={{
            backgroundImage: `url(${illustration.src})`,
          }}
        >
          <span className="absolute bottom-4 left-4 text-3xl font-bold text-white">
            Illustrations
          </span>
        </Link>
        <Link
          href="/portfolio/website"
          className="border-4 border-blue-900 dark:border-button-text rounded-md h-80 w-80 relative bg-cover"
          style={{
            backgroundImage: `url(${website.src})`,
          }}
        >
          <span className="absolute bottom-4 left-4 text-3xl font-bold text-white">
            Website
          </span>
        </Link>
        <Link
          href="/portfolio/applications"
          className="border-4 border-blue-900 dark:border-button-text rounded-md h-80 w-80 relative bg-cover "
          style={{
            backgroundImage: `url(${app.src})`,
          }}
        >
          <span className="absolute bottom-4 left-4 text-3xl font-bold text-white">
            Applications
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
