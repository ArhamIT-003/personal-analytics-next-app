"use client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();

  {
    /* for finding the blog the main user add the blog*/
  }
  const userFind = session?.data?.user?.name;
  const url = `/api/posts?username=${userFind}`;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(url, fetcher);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const info = {
      title: e.target[0].value,
      desc: e.target[1].value,
      image: e.target[2].value,
      content: e.target[3].value,
      username: session?.data?.user?.name,
    };

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...info }),
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (session.status === "loading") {
    return <div>loading...</div>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/register");
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex gap-16 my-20 justify-center">
      <div className="flex-1 flex flex-col gap-10">
        {isLoading
          ? "Loading..."
          : data.map((post) => (
              <div className="flex items-center gap-16" key={post._id}>
                <div className="flex-1 relative w-60 h-32 flex border-2">
                  <Image
                    src={post.image}
                    alt="add-blog"
                    fill={true}
                    className=" object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className=" text-2xl font-extrabold">{post.title}</h2>
                </div>
                <div className="flex-1">
                  <span
                    className="text-sm cursor-pointer"
                    onClick={() => {
                      handleDelete(post._id);
                    }}
                  >
                    ❌
                  </span>
                </div>
              </div>
            ))}
      </div>

      <form className="flex-1 flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-transparent border-2 p-2 rounded-md w-full mb-6"
          placeholder="Title"
          name="title"
        />
        <input
          type="text"
          className="bg-transparent border-2 p-2 rounded-md w-full mb-6"
          placeholder="Desc"
          name="desc"
        />
        <input
          type="url"
          className="bg-transparent border-2 p-2 rounded-md w-full mb-6"
          placeholder="Image URL"
          name="image"
        />
        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          className="bg-transparent border-2 p-2 rounded-md w-full mb-6"
          placeholder="Content"
        ></textarea>
        <button className="cursor-pointer bg-button-bg text-button-text w-full px-4 py-2 rounded-md border-none text-sm">
          Register
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
