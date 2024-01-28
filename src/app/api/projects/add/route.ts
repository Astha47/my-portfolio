import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import { dbConnect } from "@/app/lib/db";

const { Projects } = require("../../../lib/schema/Projects");


export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();

    const data = await req.json();
    const {title, status, type, imgurl, desc, repo, url} = data;

    if (!title || !status || !type ){
      NextResponse.json({message: "Invali input, some missing value"},{
        status: 422
      });
      return;
    }

    const newData = {
      ...data,
      date: new Date()
    };

    try {
      await Projects.create(newData);
      console.log("Project data posted")
      return NextResponse.json({message : "Project posted"}, {
        status: 201,
      })
    } catch (error) {
      console.log("Post error", error)
      return NextResponse.json({message: "Error data upload", error}, {
        status: 500
      })
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred while connecting to MongoDB' });
  }
}