import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '3x', label: 'Faster decision cycles' },
  { value: '42%', label: 'Average efficiency uplift' },
  { value: '12 weeks', label: 'To meaningful pilot ROI' },
]

const services = [
  {
    title: 'AI Strategy',
    text: 'Executive-level roadmaps that turn AI potential into business priorities, operating decisions, and measurable value.',
  },
  {
    title: 'Transformation Design',
    text: 'Practical redesign of workflows, teams, data foundations, and governance for adoption that lasts beyond the pilot.',
  },
  {
    title: 'AI Product Delivery',
    text: 'From concept and prototyping to deployment, we help teams launch intelligent products that customers trust and teams use.',
  },
]

const approach = [
  {
    step: '01',
    title: 'Diagnose the opportunity',
    text: 'We map your business model, automation hotspots, and data readiness to uncover the highest-value AI moves.',
  },
  {
    step: '02',
    title: 'Design the operating model',
    text: 'We build the governance, metrics, tooling, and talent layers required for sustainable AI adoption at scale.',
  },
  {
    step: '03',
    title: 'Deliver measurable impact',
    text: 'With iterative delivery and ROI tracking, we help teams ship quickly, learn faster, and outperform the status quo.',
  },
]

const results = [
  { value: '$120M+', label: 'AI-enabled value created' },
  { value: '28', label: 'Programs delivered' },
  { value: '96%', label: 'Client retention' },
]

const partners = ['Finance', 'Healthcare', 'Retail', 'Logistics', 'Energy', 'Enterprise SaaS']
const signalBars = [22, 32, 46, 58, 72, 64, 81, 68, 94, 76, 88, 98]

function HomePage({ setCurrentPage }) {
  useEffect(() => {
    const revealElements = gsap.utils.toArray('.reveal-card, .section-heading, .partner-list span, .proof-item')

    gsap.set(revealElements, { opacity: 0, y: 28 })

    revealElements.forEach((element) => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 82%',
          once: true,
        },
      })
    })
  }, [])

  return (
    <main>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">AI strategy • transformation • execution</span>
          <h1>Turn intelligent ambition into enterprise advantage.</h1>
          <p className="hero-text">
            Heraro helps leadership teams move from experimentation to value — crafting the strategy,
            operating model, and delivery engine needed to scale AI with confidence.
          </p>

          <div className="cta-row">
            <button type="button" className="primary-btn" onClick={() => setCurrentPage('contact')}>
              Book a strategy call
            </button>
            <button type="button" className="secondary-btn" onClick={() => setCurrentPage('home')}>
              See our approach
            </button>
          </div>

          <div className="proof-row" aria-label="Key business metrics">
            {stats.map((stat) => (
              <div key={stat.label} className="proof-item reveal-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="AI consulting dashboard preview">
          <div className="signal-shell reveal-card">
            <div className="signal-header">
              <span className="status-dot" />
              <span>AI Opportunity Index</span>
            </div>

            <div className="signal-figure" aria-label="Opportunity graph">
              <div className="signal-grid" aria-hidden="true">
                {signalBars.map((value, index) => (
                  <div key={`${value}-${index}`} className="signal-bar-wrap">
                    <span className="signal-bar" style={{ height: `${value}%` }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="metric-row">
              <span className="metric-label">Portfolio value</span>
              <strong>$48.6M</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-strip" aria-label="Industry focus areas">
        <p>Trusted by leaders in high-growth and regulated industries</p>
        <div className="partner-list">
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </section>

      <section id="services" className="content-section">
        <div className="section-heading">
          <span className="eyebrow">What we do</span>
          <h2>Strategy that is practical, measurable, and built for execution.</h2>
        </div>

        <div className="card-grid three-up">
          {services.map((service) => (
            <article key={service.title} className="info-card reveal-card">
              <div className="card-kicker">Heraro</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <button type="button" className="text-link" onClick={() => setCurrentPage('contact')}>
                Explore service
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="content-section approach-section">
        <div className="section-heading narrow">
          <span className="eyebrow">Our approach</span>
          <h2>From strategy to impact, with governance built in.</h2>
        </div>

        <div className="steps-grid">
          {approach.map((item) => (
            <div key={item.step} className="step-card reveal-card">
              <span className="step-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="results" className="content-section results-section">
        <div className="section-heading narrow">
          <span className="eyebrow">Results</span>
          <h2>We turn AI momentum into durable business value.</h2>
        </div>

        <div className="results-grid">
          {results.map((result) => (
            <div key={result.label} className="result-card reveal-card">
              <strong>{result.value}</strong>
              <span>{result.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial-band reveal-card">
        <blockquote>
          “Heraro translated AI from a boardroom conversation into a disciplined transformation engine with clear ROI and rapid adoption.”
        </blockquote>
        <div className="quote-meta">
          <strong>Chief Strategy Officer</strong>
          <span>Global operations company</span>
        </div>
      </section>

      <section className="cta-panel reveal-card">
        <div>
          <span className="eyebrow">Let’s build your next move</span>
          <h2>Define where AI creates the most strategic value for your business.</h2>
        </div>
        <button type="button" className="primary-btn" onClick={() => setCurrentPage('contact')}>
          hello@heraro.ai
        </button>
      </section>
    </main>
  )
}

export default HomePage
