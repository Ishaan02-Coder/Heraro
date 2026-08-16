import { Helmet } from 'react-helmet-async'

function SEO() {
  return (
    <Helmet>
      <title>Heraro AI Consulting | Strategy, Transformation & AI Execution</title>
      <meta
        name="description"
        content="Heraro is an AI consulting company helping enterprises design strategy, transformation programs, and measurable AI execution outcomes."
      />
      <meta
        name="keywords"
        content="AI consulting, enterprise AI strategy, business transformation, digital innovation, AI advisory, AI execution"
      />
      <meta property="og:title" content="Heraro AI Consulting" />
      <meta
        property="og:description"
        content="Turn ambitious AI initiatives into measurable business growth with Heraro."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/Heraro.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#071b33" />
    </Helmet>
  )
}

export default SEO
