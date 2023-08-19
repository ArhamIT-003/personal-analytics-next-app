import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Form from "@/models/Contact"; // Check the path to this model

export const POST = async (request) => {
  const data = await request.json();

  const contactData = new Form(data);
  try {
    await connect();
    await contactData.save(); // Save the data to the database
    return new NextResponse("Form Submitted.", { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, { status: 502 });
  }
};
