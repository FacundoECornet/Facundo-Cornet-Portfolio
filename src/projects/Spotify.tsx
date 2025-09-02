import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const clientId = '890303e486444c84969b0d89d829c9d4';
const clientSecret = '4ecd81960e7d454785de2bf67c596a73';

interface Album {
  id: string;
  name: string;
  release_date: string;
  images: { url: string }[];
  external_urls: { spotify: string };
}

export default function Spotify() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const authParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    };

    fetch('https://accounts.spotify.com/api/token', authParams)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  async function search() {
    if (!searchInput.trim()) return;

    const artistParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };

    const artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
      artistParams,
    )
      .then((res) => res.json())
      .then((data) => data.artists.items[0]?.id);

    if (!artistID) return;

    await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`,
      artistParams,
    )
      .then((res) => res.json())
      .then((data) => setAlbums(data.items));
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 relative">
      {/* Botón de volver */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-semibold transition-colors"
      >
        ← Volver
      </button>

      {/* Barra de búsqueda */}
      <div className="flex justify-center mb-12 mt-12">
        <input
          type="text"
          placeholder="Search for Artist..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && search()}
          className="w-72 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none mr-3"
        />
        <button
          onClick={search}
          className="px-5 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition-all"
        >
          Search
        </button>
      </div>

      {/* Grid de álbumes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            <img src={album.images[0]?.url} alt={album.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-400 truncate">{album.name}</h3>
              <p className="text-sm text-gray-400 mt-1">Release Date: {album.release_date}</p>
              <a
                href={album.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block w-full text-center bg-green-600 hover:bg-green-500 py-2 rounded-md font-semibold transition-colors"
              >
                Open in Spotify
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
