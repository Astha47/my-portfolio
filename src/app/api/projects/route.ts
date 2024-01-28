import { dbConnect } from '../../lib/db'
import { NextResponse } from 'next/server'
const { Projects } = require("../../../lib/schema/Projects");

export async function GET() {
  try {
    await dbConnect();

    const projectsData = await Projects.find()
    return NextResponse.json(projectsData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred while connecting to MongoDB' });
  }
}

