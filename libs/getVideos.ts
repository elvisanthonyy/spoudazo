// libs/youtube.ts

export async function getPlaylistVideos(playlistId: string) {
  const response = await fetch(
    `https://api.tubealfred.com/v1/youtube/playlist/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TUBEALFRED_API_KEY}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`TubeAlfred error: ${response.status}`);
  }

  const result = await response.json();

  return result.data.videos?.slice(-4) ?? [];
}
