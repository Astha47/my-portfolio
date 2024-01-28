import { dbConnect } from '../../lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ message: 'Successfully connected to MongoDB' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}
