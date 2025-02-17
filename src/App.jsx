import { useState , useEffect } from 'react'
import ArtGallery from './components/ArtGallery';
import ArtPieceDetails from './components/ArtPieceDetails';

import './App.css'

function App() {
  
  const [artPieces, setArtPieces] = useState([]);
  const [selectedArtPiece, setSelectedArtPiece] = useState(null);

  const API_Key= 'https://api.artic.edu/api/v1/artworks';
  const API_URL = `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,thumbnail&limit=100&key=${API_Key}`;

  useEffect(() => {
    
  },[]);

  return (
    <>
      <h1>Art Gallery of Chicago</h1>
      <ArtGallery />
      <ArtPieceDetails />
    </>
  )
}

export default App
