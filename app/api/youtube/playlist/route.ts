// app/api/youtube/playlist/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { playlistId } = await req.json();

    const response = await fetch(
      `https://api.tubealfred.com/v1/youtube/playlist/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TUBEALFRED_API_KEY}`,
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch playlist" },
        { status: response.status },
      );
    }

    const result = await response.json();

    // Assuming the returned playlist items are ordered newest-first
    const newestFour = result.data.videos?.slice(-4) ?? [];

    return NextResponse.json(newestFour);
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
