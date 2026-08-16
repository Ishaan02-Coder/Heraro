function ContactPage({ setCurrentPage }) {
  return (
    <main className="contact-page-shell">
      <section className="contact-hero reveal-card">
        <div className="contact-copy">
          <span className="eyebrow">Start the conversation</span>
          <h1>Build the next wave of value with Heraro.</h1>
          <p>
            Whether you are piloting AI or scaling a company-wide transformation, we help you move from possibility to measurable business performance.
          </p>
          <button type="button" className="secondary-btn" onClick={() => setCurrentPage('home')}>
            Back to overview
          </button>
        </div>

        <div className="contact-card reveal-card">
          <h2>Book a consultation</h2>
          <form className="contact-form">
            <label>
              Full name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Work email
              <input type="email" placeholder="you@company.com" />
            </label>
            <label>
              Company
              <input type="text" placeholder="Your company" />
            </label>
            <label>
              Project focus
              <textarea rows="4" placeholder="Tell us about your AI opportunity or challenge" />
            </label>
            <button type="submit" className="primary-btn contact-submit">Send enquiry</button>
          </form>
        </div>
      </section>

      <section className="contact-details-grid">
        <article className="detail-card reveal-card">
          <span className="detail-label">Email</span>
          <a href="mailto:hello@heraro.ai">hello@heraro.ai</a>
        </article>
        <article className="detail-card reveal-card">
          <span className="detail-label">Office</span>
          <p>Singapore • London • New York</p>
        </article>
        <article className="detail-card reveal-card">
          <span className="detail-label">Response time</span>
          <p>Within 1 business day</p>
        </article>
      </section>
    </main>
  )
}

export default ContactPage
