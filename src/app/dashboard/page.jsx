"use client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate,error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <div>loading...</div>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/register");
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <div>
  </div>;
};

export default Dashboard;
