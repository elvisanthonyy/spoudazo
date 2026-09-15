import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { videoId } = await req.json();

  const response = await fetch(
    `https://api.tubealfred.com/v1/youtube/video/${videoId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TUBEALFRED_API_KEY}`,
      },
    },
  );

  const data = await response.json();

  return NextResponse.json(data);
}
