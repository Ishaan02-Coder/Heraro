import { useEffect, useState } from 'react'
import SEO from './components/SEO'
import Preloader from './components/Preloader'
import TopBar from './components/TopBar'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import HeraroLogo from './assets/images/Heraro.jpg'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/responsive.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`page-shell ${loading ? 'is-loading' : ''}`}>
      <SEO />
      <Preloader active={loading} />
      <TopBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'home' ? (
        <HomePage setCurrentPage={setCurrentPage} />
      ) : (
        <ContactPage setCurrentPage={setCurrentPage} />
      )}

      <footer className="site-footer">
        <div className="footer-top">
          <div className="brand-wrap footer-brand">
            <img src={HeraroLogo} alt="Heraro logo" className="brand-logo" />
          </div>

          <div className="footer-links">
            <button type="button" onClick={() => setCurrentPage('home')}>Home</button>
            <button type="button" onClick={() => setCurrentPage('contact')}>Contact</button>
            <a className="footer-link" href="mailto:hello@heraro.ai">hello@heraro.ai</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>AI consulting for ambitious organizations.</p>
          <p>© 2026 Heraro</p>
        </div>
      </footer>
    </div>
  )
}

export default App
