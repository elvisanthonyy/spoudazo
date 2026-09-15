const getPlaylistVideos = async (playlistId: string) => {
  const res = await fetch(`${process.env.BASE_URL}/api/youtube/playlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      playlistId: playlistId,
    }),
  });

  const data = await res.json();

  return data;
};

export default getPlaylistVideos;
