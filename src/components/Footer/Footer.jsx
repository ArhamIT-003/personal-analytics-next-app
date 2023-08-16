import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-between h-10 items-center">
      <div className="text-sm">© 2023 Maklytics. All Rights Reserved.</div>
      <div className="flex space-x-4">
        <Image
          className="cursor-pointer opacity-60"
          src="/1.png"
          width={20}
          height={20}
          alt="facebook-icon"
        />
        <Image
          className="cursor-pointer opacity-60"
          src="/2.png"
          width={20}
          height={20}
          alt="instagram-icon"
        />
        <Image
          className="cursor-pointer opacity-60"
          src="/3.png"
          width={20}
          height={20}
          alt="twitter-icon"
        />
        <Image
          className="cursor-pointer opacity-60"
          src="/4.png"
          width={20}
          height={20}
          alt="youtube-icon"
        />
      </div>
    </div>
  );
};

export default Footer;
