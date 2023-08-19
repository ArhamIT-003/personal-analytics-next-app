import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");
  try {
    await connect();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPosts = new Post(body);

  try {
    await connect();
    await newPosts.save();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database error", { status: 500 });
  }
};

// pages/api/posts.js

// export const DELETE = async (request, { params }) => {
//   const { id } = params;
//   try {
//     await connect();
//     const posts = await Post.removeById(id);
//     return new NextResponse(JSON.stringify(posts), { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database error", { status: 500 });
//   }
// };
