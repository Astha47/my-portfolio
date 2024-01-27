import { NextResponse } from "next/server"


export async function GET() {

  try {

    const data = {
      "title":"Asthabooks V1 Vanilla Js",
      "status":"Discontinued",
      "type":"Personal",
      "imgurl":"sasa",
      "desc":"saasas",
      "repo":"",
      "url":"",
    }

    return NextResponse.json({
      status:"connected"
    })
  } catch (error) {
    return new NextResponse("Error in fetching projects data " + error, {status: 500})
  }
}