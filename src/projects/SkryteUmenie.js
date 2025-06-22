import './Project.css';
import { useState, useEffect } from 'react';

import {
  expoLogo,
  mapboxLogo,
  supabaseLogo,
  figmaLogo,
  googleMapsLogo,
  pythonLogo,
  reactnativeLogo,
  javascriptLogo
} from './figures/logo.js';


const galleryImages = [
  require('./figures/skryteUmenie/1.jpg'),
  require('./figures/skryteUmenie/2.jpg'), 
  require('./figures/skryteUmenie/3.jpg'),
  require('./figures/skryteUmenie/4.jpg'),
  require('./figures/skryteUmenie/5.jpg'),
  require('./figures/skryteUmenie/6.jpg'),
  require('./figures/skryteUmenie/7.jpg'),
];



function SkryteUmenie() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = idx => {
    setCurrentIndex(idx);
    setShowGallery(true);
  };

  const closeGallery = () => setShowGallery(false);

  const prevImage = e => {
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = e => {
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % galleryImages.length);
  };

  return (
    <div className="project-container">
      <header className="project-header">
        <h1>Skryté Umenie - Mapa košických pokladov</h1>
        {/* <h2>React Native • Expo • Mapbox • AsyncStorage</h2> */}
      </header>

      {/* Topic & Objective */}
      <section className="project-section">
        <h3>Overview</h3>
        <p>
          Košice is a city rich in history and culture with over 400 public artworks
          scattered across its streets, parks, and hidden corners. Yet many of these
          treasures remain undiscovered by residents and visitors alike. To bridge
          this gap, we partnered with Casovia Code to develop <em>Skryté Umenie</em>,
          a mobile application that transforms the exploration of Košice’s artistic
          heritage into an engaging, interactive experience.
        </p>
        <p>
          Through this app, users can effortlessly locate nearby sculptures, murals,
          and installations on an interactive map, read in-depth descriptions and
          historical contexts, and contribute their own photos and impressions.
          Designed with both tourists and local art enthusiasts in mind, the app
          encourages discovery, community-sourced storytelling, and the preservation
          of cultural landmarks—even when offline.
        </p>
        <ul>
          <li>Interactive Mapbox map showcasing geolocated artworks and artistic trails</li>
          <li>Location-based filtering and search to find specific pieces or nearby treasures</li>
          <li>User contributions: upload photos, leave comments, rate and bookmark favorites</li>
          <li>Offline-first design: cached map tiles and artwork data ensure continuity in the field</li>
        </ul>
        <p>
          Working in close collaboration with Cassovia Code as part of the Živé IT projekty initiative by Košice IT Valley, 
          our team delivered a robust mobile experience that placed us <strong>8th</strong> out of 67 competing teams in the regional competetion.
        </p>
      </section>

      {/* Technologies Used */}
      <section className="project-section used-technologies">
        <h3>Used Technologies</h3>
        <div className="tech-icons">
          <div className="icon">
            <img src={reactnativeLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>React Native</span>
          </div>
          <div className="icon">
            <img src={javascriptLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>JavaScript</span>
          </div>
          <div className="icon">
            <img src={expoLogo} alt="Expo Go" style={{width: '2em', height: '2em'}} />
            <span>Expo Go</span>
          </div>
          <div className="icon">
            <img src={mapboxLogo} alt="Mapbox" style={{width: '2em', height: '2em'}} />
            <span>Mapbox</span>
          </div>
          <div className="icon">
            <img src={supabaseLogo} alt="Supabase" style={{width: '2em', height: '2em'}} />
            <span>Supabase</span>
          </div>
          <div className="icon">
            <img src={figmaLogo} alt="Figma" style={{width: '2em', height: '2em'}} />
            <span>Figma</span>
          </div>
          <div className="icon">
            <img src={googleMapsLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>Google Maps</span>
          </div>
          <div className="icon">
            <img src={pythonLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>Python</span>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="project-section">
        <h3>System Architecture</h3>
        <p>The app is built on a modular, offline-first architecture:</p>
        <ul>
          <li>
            <strong>UI / Presentation:</strong> Expo-managed React Native screens,
            custom Map and List components
          </li>
          <li>
            <strong>State Management:</strong> Redux slices for artworks, user actions, and connectivity
          </li>
          <li>
            <strong>Data Layer:</strong> REST client for fetching city-provided artwork dataset;
            AsyncStorage for caching
          </li>
          <li>
            <strong>Offline Support:</strong> background sync to reconcile new comments/photos
          </li>
        </ul>
      </section>

      {/* Implementation Highlights */}
      <section className="project-section">
        <h3>Implementation Highlights</h3>
        <ul>
          <li>Clustering and fast-loading of map markers for smooth map interactions</li>
          <li>Geolocation tracking to update user's position and nearby points of interest</li>
          <li>Photo upload flow with camera roll integration and offline queueing</li>
          <li>Gamified badges awarded for discovering new artworks</li>
        </ul>
      </section>

      {/* Development Process */}
      <section className="project-section">
        <h3>Development Process</h3>
        <ol>
          <li>Imported and normalized real artwork dataset provided by the City of Košice</li>
          <li>Initialized Expo app and configured Mapbox access tokens</li>
          <li>Built Redux Toolkit slices for artwork data and user interactions</li>
          <li>Developed map and detail screens with offline tile &amp; data caching</li>
          <li>Added comment/rating forms and integrated photo uploads</li>
          <li>Tested on Android &amp; iOS devices; optimized performance for low-end phones</li>
        </ol>
      </section>

      <section className="project-section">
        <h3>Links</h3>
        <div className="icons">
          <a href="">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </section>

      <section className="project-section">
        <h3>Gallery</h3>
        <div className="gallery-thumbnails">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Skryté Umenie screenshot ${idx + 1}`}
              className="gallery-thumb"
              onClick={() => openGallery(idx)}
            />
          ))}
        </div>
      </section>

      {/* Modal Gallery */}
      {showGallery && (
        <div className="gallery-modal" onClick={closeGallery}>
          <button className="gallery-close" onClick={closeGallery}>&times;</button>
          <button className="gallery-prev" onClick={prevImage}>&lt;</button>
          <img
            src={galleryImages[currentIndex]}
            alt={`Full size ${currentIndex + 1}`}
            className="gallery-full"
            onClick={e => e.stopPropagation()}
          />
          <button className="gallery-next" onClick={nextImage}>&gt;</button>
        </div>
      )}
    </div>
  );
}

export default SkryteUmenie;