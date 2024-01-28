import { dbConnect } from '../../lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ message: 'Successfully connected to MongoDB' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred while connecting to MongoDB' });
  }
}

