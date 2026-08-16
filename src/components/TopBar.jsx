function TopBar({ currentPage, setCurrentPage }) {
  return (
    <header className="topbar">
      {/* <div className="topbar-spacer" aria-hidden="true" /> */}

      <button type="button" className="brand-button" onClick={() => setCurrentPage('home')}>
        <img src="/Heraro.jpg" alt="Heraro logo" className="brand-logo" />
      </button>

      <nav className="main-nav" aria-label="Primary navigation">
        <button type="button" className={currentPage === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setCurrentPage('home')}>
          Home
        </button>
        <button type="button" className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'} onClick={() => setCurrentPage('contact')}>
          Contact
        </button>
      </nav>
    </header>
  )
}

export default TopBar
