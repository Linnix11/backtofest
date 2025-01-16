import { useState } from 'react';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('main');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };


  const MainContent = () => (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Rap Revolution</title>
      <link rel="stylesheet" href="css/styles.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link rel="icon" href="public/logo2.png" type="image/x-icon" />

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="public/logo.png" alt="Logo" className="logo" />
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Accueil</a>
            <a href="#packages" className="nav-link">Packages</a>
            <a href="#experience" className="nav-link">Practical</a>
            <a href="#destination" className="nav-link">Destination</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <video className="hero-video" autoPlay muted loop>
          <source src="public/video.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>Rap Revolution</h1>
          <h2>16-23 November 2025</h2>
          <p className="hero-location">ALPE D'HUEZ • FRENCH ALPS</p>
          <div className="hero-buttons">
            <a href="#packages" className="button-primary">
              Book Now
            </a>
            <a href="#aftermovie" className="button-secondary">
              Watch Aftermovie
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to Discover</span>
          <div className="scroll-arrow" />
        </div>
      </header>

{/* Packages Section */}
<section className="packages" id="packages">
        <div className="section-header">
          <h2>CHOOSE YOUR MAGICAL EXPERIENCE</h2>
          <p>Discover our exclusive packages for an unforgettable winter journey</p>
        </div>
        <div className="packages-grid">
          <article className="package-card">
            <div className="package-image">
              <img src="public/pass7.png" alt="7 Day Package" />
              <div className="package-overlay">
                <span>FROM €825</span>
              </div>
            </div>
            <div className="package-content">
              <h3>7 Day Package</h3>
              <p>16-23 March 2025</p>
              <ul className="package-features">
                <li>Festival Pass</li>
                <li>Lodging</li>
                <li>Ski Pass</li>
              </ul>
              <a href="#book" className="button-primary">
                Book Package
              </a>
            </div>
          </article>
          <article className="package-card">
            <div className="package-image">
              <img src="public/pass4.png" alt="4 Day Package" />
              <div className="package-overlay">
                <span>FROM €625</span>
              </div>
            </div>
            <div className="package-content">
              <h3>4 Day Package</h3>
              <p>19-23 March 2025</p>
              <ul className="package-features">
                <li>Festival Pass</li>
                <li>Lodging</li>
                <li>Ski Pass</li>
              </ul>
              <a href="#book" className="button-primary">
                Book Package
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <div className="experience-header">
          <h2 className="glow-title">THE EXPERIENCE</h2>
          <p className="experience-subtitle">
            Un festival unique mêlant rap et culture urbaine
          </p>
        </div>
        <div className="experience-container">
          <div className="experience-showcase">
            <div className="showcase-main">
              <div className="video-wrapper">
               
                <img src="outstage.png" alt="Panorama" />                
                <div className="video-overlay" />
              </div>
            </div>
            <div className="showcase-grid">
              <div className="showcase-item">
                <img src="public/mstage.webp" alt="Concert" />
                <div className="item-content">
                  <h3>MAIN STAGE</h3>
                  <p>Une scène impressionnante avec effets spéciaux</p>
                </div>
              </div>
              <div className="showcase-item">
                <img src="public/vip.webp" alt="VIP Area" />
                <div className="item-content">
                  <h3>VIP EXPERIENCE</h3>
                  <p>Accès exclusifs et vue imprenable</p>
                </div>
              </div>
              <div className="showcase-item">
                <img src="public/resto.webp" alt="Food Court" />
                <div className="item-content">
                  <h3>FOOD & DRINKS</h3>
                  <p>Une sélection gastronomique variée</p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-features">
            <div className="features-stats">
              <div className="stat-block">
                <div className="stat-value-wrapper">
                  <span className="stat-value counter">4</span>
                  <span className="stat-unit">Day</span>
                </div>
                <div className="stat-ring" />
                <p className="stat-desc">Non-stop</p>
              </div>
              <div className="stat-block">
                <div className="stat-value-wrapper">
                  <span className="stat-value counter">50</span>
                  <span className="stat-unit">ARTISTES</span>
                </div>
                <div className="stat-ring" />
                <p className="stat-desc">3 differents stage</p>
              </div>
              <div className="stat-block">
                <div className="stat-value-wrapper">
                  <span className="stat-value counter">20K</span>
                  <span className="stat-unit">FESTIVALIERS</span>
                </div>
                <div className="stat-ring" />
                <p className="stat-desc">Every day</p>
              </div>
            </div>
            <div className="experience-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">🎵</div>
                <div className="highlight-content">
                  <h3>Programmation Exclusive</h3>
                  <p>Les plus grands noms du rap français et international</p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🎪</div>
                <div className="highlight-content">
                  <h3>Villages Thématiques</h3>
                  <p>Street art, culture urbaine, sports et animations</p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">✨</div>
                <div className="highlight-content">
                  <h3>Shows Spectaculaires</h3>
                  <p>Effets visuels, pyrotechnie et performances uniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Artists Section */}
<section className="artists-section" id="artists">
        <div className="section-header">
          <h2 className="glow-text">PREMIERS ARTISTES ANNONCÉS</h2>
          <p>Plus d'artistes seront dévoilés prochainement...</p>
        </div>
        <div className="artists-grid">
          <div className="artist-card">
            <div className="artist-image">
              <img src="public/booba.jpeg" alt="Artiste 1" />
              <div className="artist-overlay">
                <div className="artist-date">16 NOV</div>
              </div>
            </div>
            <div className="artist-info">
              <h3>BOOBA</h3>
              <p className="artist-genre">RAP FR</p>
              <div className="artist-social">
                <a
                  href="https://open.spotify.com/intl-fr/artist/58wXmynHaAWI5hwlPZP3qL?si=jiSu6dlqRVG7YCGsppl20w"
                  className="social-icon"
                >
                  SPOTIFY
                </a>
                <a
                  href="https://www.instagram.com/boobamedia/"
                  className="social-icon"
                >
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
          <div className="artist-card">
            <div className="artist-image">
              <img src="public/damso.jpeg" alt="Artiste 2" />
              <div className="artist-overlay">
                <div className="artist-date">17 NOV</div>
              </div>
            </div>
            <div className="artist-info">
              <h3>DAMSO</h3>
              <p className="artist-genre">RAP FR</p>
              <div className="artist-social">
                <a href="#" className="social-icon">
                  SPOTIFY
                </a>
                <a href="#" className="social-icon">
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
          <div className="artist-card">
            <div className="artist-image">
              <img src="public/sch.jpeg" alt="Artiste 3" />
              <div className="artist-overlay">
                <div className="artist-date">18 NOV</div>
              </div>
            </div>
            <div className="artist-info">
              <h3>SCH</h3>
              <p className="artist-genre">RAP FR</p>
              <div className="artist-social">
                <a href="#" className="social-icon">
                  SPOTIFY
                </a>
                <a href="#" className="social-icon">
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
          <div className="artist-card">
            <div className="artist-image">
              <img src="public/ninho.jpeg" alt="Artiste 4" />
              <div className="artist-overlay">
                <div className="artist-date">19 NOV</div>
              </div>
            </div>
            <div className="artist-info">
              <h3>NINHO</h3>
              <p className="artist-genre">RAP FR</p>
              <div className="artist-social">
                <a href="#" className="social-icon">
                  SPOTIFY
                </a>
                <a href="#" className="social-icon">
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Section */}
      <section className="destination" id="destination">
        <div className="destination-header">
          <h2 className="destination-title">ALPE D'HUEZ</h2>
          <div className="destination-subtitle">
            Le plus grand festival de rap en altitude
          </div>
        </div>
        <div className="destination-container">
          <div className="destination-info">
            <div className="destination-stats-wrapper">
              <div className="destination-stat">
                <div className="stat-circle">
                  <span className="stat-value">3330</span>
                  <span className="stat-unit">m</span>
                </div>
                <span className="stat-label">Altitude</span>
              </div>
              <div className="destination-stat">
                <div className="stat-circle">
                  <span className="stat-value">250</span>
                  <span className="stat-unit">km</span>
                </div>
                <span className="stat-label">Pistes</span>
              </div>
              <div className="destination-stat">
                <div className="stat-circle">
                  <span className="stat-value">300</span>
                  <span className="stat-unit">j</span>
                </div>
                <span className="stat-label">Soleil/An</span>
              </div>
            </div>
            <div className="destination-features">
              <div className="feature-card">
                <div className="feature-icon">🏔️</div>
                <h3>Domaine Skiable</h3>
                <p>Un des plus grands domaines skiables d'Europe</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏂</div>
                <h3>Activités</h3>
                <p>Ski, snowboard, et sports d'hiver</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎵</div>
                <h3>Scènes</h3>
                <p>3 scènes extérieures avec vue panoramique</p>
              </div>
            </div>
          </div>
          <div className="destination-gallery">
            <div className="gallery-main">
              <img src="public/pano.png" alt="Vue panoramique Alpe d'Huez" />
              <div className="gallery-overlay">
                <div className="gallery-text">
                  <h3>ALPE D'HUEZ</h3>
                  <p>Le festival qui mixe rap et sports d'hiver</p>
                </div>
              </div>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="public/piste.jpeg" alt="Station de ski" />
                <div className="item-overlay">Station</div>
              </div>
              <div className="gallery-item">
                <img src="public/stage2.webp" alt="Scène principale" />
                <div className="item-overlay">Main Stage</div>
              </div>
              <div className="gallery-item">
                <img src="public/ski.jpeg" alt="Vue des pistes" />
                <div className="item-overlay">Pistes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section className="register" id="register">
        <div className="register-content">
          <h2>REGISTER NOW</h2>
          <p>Be the first to get access to packages</p>
          <form className="register-form">
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="button-primary">
              <span className="button-text">Register</span>
              <span className="button-loader" />
            </button>
          </form>
          <div className="form-message" />
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>info@rap-revolution.com</p>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Arthur Champagne-Forterre. All rights reserved.</p>
          <p>Made By Epitech Digital School</p>
        </div>
      </footer>
    </>
  );

  return (
    <>
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'register' && <RegisterPage />}
      {currentPage === 'main' && <MainContent />}
    </>
  );
}

export default App;