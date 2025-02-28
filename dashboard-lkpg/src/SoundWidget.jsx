// Function to get an authorization token (You need to implement OAuth login flow)
const token = 'ae79924729f74508aae4926c93366e81'; // Replace with a valid token

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Ensure JSON request
    },
    method,
    body: body ? JSON.stringify(body) : null, // Avoid sending "null" as a string
  });

  if (!res.ok) {
    console.error('Error fetching data:', res.status, await res.text());
    return null;
  }

  return await res.json();
}

async function getTopTracks() {
  try {
    const response = await fetchWebApi(
      'v1/me/top/tracks?time_range=long_term&limit=5',
      'GET'
    );

    return response?.items || [];
  } catch (error) {
    console.error('Failed to fetch top tracks:', error);
    return [];
  }
}

async function displayTopTracks() {
  const topTracks = await getTopTracks();

  console.log(
    topTracks.map(
      ({ name, artists }) =>
        `${name} by ${artists.map((artist) => artist.name).join(', ')}`
    )
  );
}

displayTopTracks();
