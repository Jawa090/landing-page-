import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const formContainer = document.getElementById('hubspot-form')

    // Clear any existing form content to prevent duplicates
    if (formContainer) {
      formContainer.innerHTML = ''
    }

    const ensureScript = () => new Promise((resolve) => {
      if (window.hbspt && window.hbspt.forms) {
        resolve()
        return
      }
      const existing = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]')
      if (existing) {
        existing.addEventListener('load', () => resolve())
        return
      }
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = '//js.hsforms.net/forms/embed/v2.js'
      script.onload = () => resolve()
      document.body.appendChild(script)
    })

    ensureScript().then(() => {
      try {
        // Only create form if container is empty
        if (formContainer && formContainer.innerHTML.trim() === '') {
          window.hbspt.forms.create({
            portalId: '20155995',
            formId: '760f99b9-13a5-4799-a16a-86ef81e04f86',
            region: 'na1',
            target: '#hubspot-form',
            onFormReady: (form) => {
              // Hide errors until a submit is attempted
              const container = document.querySelector('#hubspot-form')
              if (container) container.classList.remove('show-errors')
              // Remove only the Privacy Policy line, keep other notes
              try {
                const rich = form.querySelector('.hs-richtext p')
                if (rich) {
                  const em = rich.querySelector('em')
                  if (em) {
                    rich.innerHTML = ''
                    rich.appendChild(em)
                  }
                }
              } catch {}
              if (form) {
                form.addEventListener('submit', () => {
                  if (container) container.classList.add('show-errors')
                })
              }
            }
          })
        }
      } catch (e) {
        // no-op if script not fully ready; avoid crashing UI
      }
    })
  }, [])

  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <img src="/logo.png" alt="Logo" className="brand" />
          <div className="promo" role="note">
            <span className="promo-text">You are new? <strong>We have a special discount for you</strong></span>
            <a className="promo-cta" href="#hubspot-form">Get offer</a>
          </div>
        </div>
      </header>

      <main className="hero">
        <section className="hero-left">
          <h1 className="title">Win more bids with accurate, expert-driven construction estimates.</h1>
          <p className="subtitle">Streamline every process from pre-construction to closeout. Build with less risk and bigger profits.</p>
          <div className="hero-copy">
            <p>In a competitive market, a winning bid starts with a perfect estimate. We deliver detailed, trade-specific takeoffs, accurate cost estimates, and thorough damage claim reports in as little as 24-48 hours. Equip your team with the data to outbid the competition and secure your next project.</p>
            <p><strong>Ready to see how we can help you grow your business?</strong></p>
          </div>

          <div className="services-slider" aria-label="Construction management services">
            <div className="services-track">
              <span className="service"><span className="icon" aria-hidden>⚙️</span> Concrete Takeoff</span>
              <span className="service"><span className="icon" aria-hidden>🧱</span> Masonry Takeoff</span>
              <span className="service"><span className="icon" aria-hidden>🧲</span> Structural & Reinforcing Steel</span>
              <span className="service"><span className="icon" aria-hidden>🪚</span> Carpentry & Millwork</span>
              <span className="service"><span className="icon" aria-hidden>🧰</span> Drywall & Insulation</span>
              <span className="service"><span className="icon" aria-hidden>🏠</span> Roofing & Waterproofing</span>
              <span className="service"><span className="icon" aria-hidden>🧩</span> Flooring Takeoff</span>
              <span className="service"><span className="icon" aria-hidden>🚪</span> Doors, Windows & Glazing</span>
              <span className="service"><span className="icon" aria-hidden>⛏️</span> Sitework & Earthworks</span>
              <span className="service"><span className="icon" aria-hidden>📊</span> Preliminary / Budget Estimates</span>
              <span className="service"><span className="icon" aria-hidden>📋</span> Detailed Estimates</span>
              <span className="service"><span className="icon" aria-hidden>📨</span> Bid Estimates</span>
              <span className="service"><span className="icon" aria-hidden>🧠</span> Conceptual Estimating</span>
              <span className="service"><span className="icon" aria-hidden>👨‍💼</span> Dedicated Estimator</span>
              <span className="service"><span className="icon" aria-hidden>🗺️</span> Project Execution</span>
              <span className="service"><span className="icon" aria-hidden>🗓️</span> Planning & Scheduling</span>
              <span className="service"><span className="icon" aria-hidden>🏗️</span> Site Supervision</span>
              <span className="service"><span className="icon" aria-hidden>🤝</span> Subcontractor Coordination</span>
              <span className="service"><span className="icon" aria-hidden>💡</span> Technology & Innovation</span>
              <span className="service"><span className="icon" aria-hidden>🖥️</span> On-Screen Takeoff (OST)</span>
              <span className="service"><span className="icon" aria-hidden>📘</span> Bluebeam Revu</span>
              <span className="service"><span className="icon" aria-hidden>📐</span> Planswift</span>
              <span className="service"><span className="icon" aria-hidden>📈</span> RSMeans Integration</span>
              <span className="service"><span className="icon" aria-hidden>📊</span> Excel Estimating Models</span>
              <span className="service"><span className="icon" aria-hidden>🏛️</span> Government & Public Sector</span>
              <span className="service"><span className="icon" aria-hidden>🏡</span> Residential Construction</span>
              <span className="service"><span className="icon" aria-hidden>🏢</span> Commercial & Office</span>
              <span className="service"><span className="icon" aria-hidden>🛍️</span> Retail & Tenant Improvement</span>
              <span className="service"><span className="icon" aria-hidden>🏭</span> Industrial & Warehouse</span>
              <span className="service"><span className="icon" aria-hidden>🧮</span> Quantity Takeoff</span>
              {/* duplicate for seamless loop */}
              <span className="service"><span className="icon" aria-hidden>⚙️</span> Concrete Takeoff</span>
              <span className="service"><span className="icon" aria-hidden>🧱</span> Masonry Takeoff</span>
              <span className="service"><span className="icon" aria-hidden>🧲</span> Structural & Reinforcing Steel</span>
              <span className="service"><span className="icon" aria-hidden>🪚</span> Carpentry & Millwork</span>
              <span className="service"><span className="icon" aria-hidden>🧰</span> Drywall & Insulation</span>
              <span className="service"><span className="icon" aria-hidden>🏠</span> Roofing & Waterproofing</span>
              <span className="service"><span className="icon" aria-hidden>🧩</span> Flooring Takeoff</span>
              <span className="service"><span className="icon" aria-hidden>🚪</span> Doors, Windows & Glazing</span>
              <span className="service"><span className="icon" aria-hidden>⛏️</span> Sitework & Earthworks</span>
              <span className="service"><span className="icon" aria-hidden>📊</span> Preliminary / Budget Estimates</span>
              <span className="service"><span className="icon" aria-hidden>📋</span> Detailed Estimates</span>
              <span className="service"><span className="icon" aria-hidden>📨</span> Bid Estimates</span>
              <span className="service"><span className="icon" aria-hidden>🧠</span> Conceptual Estimating</span>
              <span className="service"><span className="icon" aria-hidden>👨‍💼</span> Dedicated Estimator</span>
              <span className="service"><span className="icon" aria-hidden>🗺️</span> Project Execution</span>
              <span className="service"><span className="icon" aria-hidden>🗓️</span> Planning & Scheduling</span>
              <span className="service"><span className="icon" aria-hidden>🏗️</span> Site Supervision</span>
              <span className="service"><span className="icon" aria-hidden>🤝</span> Subcontractor Coordination</span>
              <span className="service"><span className="icon" aria-hidden>💡</span> Technology & Innovation</span>
              <span className="service"><span className="icon" aria-hidden>🖥️</span> On-Screen Takeoff (OST)</span>
              <span className="service"><span className="icon" aria-hidden>📘</span> Bluebeam Revu</span>
              <span className="service"><span className="icon" aria-hidden>📐</span> Planswift</span>
              <span className="service"><span className="icon" aria-hidden>📈</span> RSMeans Integration</span>
              <span className="service"><span className="icon" aria-hidden>📊</span> Excel Estimating Models</span>
              <span className="service"><span className="icon" aria-hidden>🏛️</span> Government & Public Sector</span>
              <span className="service"><span className="icon" aria-hidden>🏡</span> Residential Construction</span>
              <span className="service"><span className="icon" aria-hidden>🏢</span> Commercial & Office</span>
              <span className="service"><span className="icon" aria-hidden>🛍️</span> Retail & Tenant Improvement</span>
              <span className="service"><span className="icon" aria-hidden>🏭</span> Industrial & Warehouse</span>
              <span className="service"><span className="icon" aria-hidden>🧮</span> Quantity Takeoff</span>
            </div>
          </div>

          <div className="features" aria-label="Why choose us">
            <div className="feature-card">
              <div className="feature-icon" aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M8 21H16M12 17V21M6 3H18V7C18 9.761 15.761 12 13 12H11C8.239 12 6 9.761 6 7V3Z" stroke="#f1b10b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Precision That Wins Bids</h3>
                <p className="feature-desc">Tired of losing bids due to delays or guesswork? Our senior estimators provide line‑item accuracy, scope notes, and alternates so your pricing is defensible and competitive—every time.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon" aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2L20 6V12C20 16.418 16.418 20 12 20C7.582 20 4 16.418 4 12V6L12 2Z" stroke="#f1b10b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Insurance-Certified Expertise</h3>
                <p className="feature-desc">Turn roadblocks into approvals with IRC‑compliant damage reports, photo logs, and quantities formatted the way adjusters expect for faster sign‑off.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon" aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 15A3 3 0 1 0 12 9A3 3 0 0 0 12 15ZM19.4 15A1.65 1.65 0 0 0 21 13.35V10.65A1.65 1.65 0 0 0 19.4 9L17.9 8.1L18.3 6.4A1.65 1.65 0 0 0 16.9 4.6L15.2 4.2L14.3 2.6A1.65 1.65 0 0 0 12.65 2H11.35A1.65 1.65 0 0 0 9.7 2.6L8.8 4.2L7.1 4.6A1.65 1.65 0 0 0 5.7 6.4L6.1 8.1L4.6 9A1.65 1.65 0 0 0 3 10.65V13.35A1.65 1.65 0 0 0 4.6 15L6.1 15.9L5.7 17.6A1.65 1.65 0 0 0 7.1 19.4L8.8 19.8L9.7 21.4A1.65 1.65 0 0 0 11.35 22H12.65A1.65 1.65 0 0 0 14.3 21.4L15.2 19.8L16.9 19.4A1.65 1.65 0 0 0 18.3 17.6L17.9 15.9L19.4 15Z" stroke="#f1b10b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Seamless Tech Integration</h3>
                <p className="feature-desc">Your tools, our expertise. Receive deliverables in Planswift, Bluebeam, and Excel with cost codes, notes, and markups ready for handoff.</p>
              </div>
            </div>
          </div>
        </section>

        <aside className="hero-right">
          <div className="form-card">
            <h2 className="form-title">Request a Demo</h2>
            <div id="hubspot-form" className="hbspt-form"></div>
          </div>
        </aside>
      </main>
      <section className="testimonials" aria-label="Clients and reviews">
        <div className="testimonials-inner">
          <h2 className="section-title">Trusted by contractors and owners</h2>

          {/* client logos removed per request */}

          <div className="reviews">
            <article className="review-card">
              <div className="review-header">
                <div className="avatar" aria-hidden>AR</div>
                <div className="person">
                  <div className="name">Alex R.</div>
                  <div className="role">Project Manager · Northstar GC</div>
                </div>
                <div className="stars" aria-hidden>
                  <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#f59e0b"><path d="M8 0l1.9 4h4.2l-3.4 2.7L12.6 12 8 9.6 3.4 12l1.3-3.3L1.3 4H5.5L8 0z"/><path d="M26 0l1.9 4h4.2l-3.4 2.7L30.6 12 26 9.6 21.4 12l1.3-3.3L19.3 4h4.2L26 0z"/><path d="M44 0l1.9 4h4.2l-3.4 2.7L48.6 12 44 9.6 39.4 12l1.3-3.3L37.3 4h4.2L44 0z"/><path d="M62 0l1.9 4h4.2l-3.4 2.7L66.6 12 62 9.6 57.4 12l1.3-3.3L55.3 4h4.2L62 0z"/><path d="M80 0l1.9 4h4.2l-3.4 2.7L84.6 12 80 9.6 75.4 12l1.3-3.3L73.3 4h4.2L80 0z"/></g></svg>
                </div>
              </div>
              <p className="review-quote">The estimate was detailed, fast, and helped us win a tight bid. Exactly what we needed.</p>
            </article>

            <article className="review-card">
              <div className="review-header">
                <div className="avatar" aria-hidden>MK</div>
                <div className="person">
                  <div className="name">Maria K.</div>
                  <div className="role">Estimator · ACME Builders</div>
                </div>
                <div className="stars" aria-hidden>
                  <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#f59e0b"><path d="M8 0l1.9 4h4.2l-3.4 2.7L12.6 12 8 9.6 3.4 12l1.3-3.3L1.3 4H5.5L8 0z"/><path d="M26 0l1.9 4h4.2l-3.4 2.7L30.6 12 26 9.6 21.4 12l1.3-3.3L19.3 4h4.2L26 0z"/><path d="M44 0l1.9 4h4.2l-3.4 2.7L48.6 12 44 9.6 39.4 12l1.3-3.3L37.3 4h4.2L44 0z"/><path d="M62 0l1.9 4h4.2l-3.4 2.7L66.6 12 62 9.6 57.4 12l1.3-3.3L55.3 4h4.2L62 0z"/><path d="M80 0l1.9 4h4.2l-3.4 2.7L84.6 12 80 9.6 75.4 12l1.3-3.3L73.3 4h4.2L80 0z"/></g></svg>
                </div>
              </div>
              <p className="review-quote">They delivered a complete takeoff in 24 hours with clear scope notes. Huge time saver.</p>
            </article>

            <article className="review-card">
              <div className="review-header">
                <div className="avatar" aria-hidden>DP</div>
                <div className="person">
                  <div className="name">Devon P.</div>
                  <div className="role">Owner Rep · Summit Homes</div>
                </div>
                <div className="stars" aria-hidden>
                  <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#f59e0b"><path d="M8 0l1.9 4h4.2l-3.4 2.7L12.6 12 8 9.6 3.4 12l1.3-3.3L1.3 4H5.5L8 0z"/><path d="M26 0l1.9 4h4.2l-3.4 2.7L30.6 12 26 9.6 21.4 12l1.3-3.3L19.3 4h4.2L26 0z"/><path d="M44 0l1.9 4h4.2l-3.4 2.7L48.6 12 44 9.6 39.4 12l1.3-3.3L37.3 4h4.2L44 0z"/><path d="M62 0l1.9 4h4.2l-3.4 2.7L66.6 12 62 9.6 57.4 12l1.3-3.3L55.3 4h4.2L62 0z"/><path d="M80 0l1.9 4h4.2l-3.4 2.7L84.6 12 80 9.6 75.4 12l1.3-3.3L73.3 4h4.2L80 0z"/></g></svg>
                </div>
              </div>
              <p className="review-quote">Insurance-ready reporting helped our claim get approved on the first pass.</p>
            </article>
          </div>
      </div>
      </section>

      <section className="capabilities" aria-label="Tools and capabilities">
        <div className="capabilities-inner">
          <h2 className="section-title">The tools you need. The power you deserve</h2>
          <p className="section-subtitle">Built by estimators for estimators. From takeoffs to final proposals, see how our workflow accelerates your team.</p>

          <div className="capability-grid">
            <article className="capability-card">
              <div className="capability-icon" aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7h18M3 12h12M3 17h8" stroke="#2f49e2" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="capability-content">
                <h3 className="capability-title">Takeoff</h3>
                <p className="capability-desc">Upload plans and perform quantity takeoffs using customizable parts, assemblies, and services. Use auto‑count and plan overlays to move faster with confidence.</p>
              </div>
            </article>

            <article className="capability-card">
              <div className="capability-icon" aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7h16M4 12h10M4 17h7" stroke="#2f49e2" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="capability-content">
                <h3 className="capability-title">Estimating</h3>
                <p className="capability-desc">Turn takeoffs into estimates instantly. Adjust material pricing, labor units, markups and profit, then export a polished, customer‑ready proposal.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How we work placed above ratings/quote */}
      <section className="social-proof" aria-label="Ratings and featured review">
        <div className="social-proof-inner">
          <section className="how-we-work" aria-label="How we work">
            <h2 className="how-title">How we work</h2>
            <div className="how-grid">
              <div className="how-card">
                <div className="how-icon" aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4V4zm3 3h10v3H7V7zm0 5h10v5H7v-5z" stroke="#2f49e2" strokeWidth="1.8"/></svg>
                </div>
                <div className="how-content">
                  <div className="how-step">1. Upload plans</div>
                  <p className="how-desc">Share drawings, specs, and any notes. We confirm scope and timelines.</p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-icon" aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16M12 4v16" stroke="#2f49e2" strokeWidth="1.8"/></svg>
                </div>
                <div className="how-content">
                  <div className="how-step">2. Expert takeoff</div>
                  <p className="how-desc">Senior estimators complete trade‑specific takeoffs with notes and alternates.</p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-icon" aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h10M4 17h7" stroke="#2f49e2" strokeWidth="1.8"/></svg>
                </div>
                <div className="how-content">
                  <div className="how-step">3. Estimate & proposal</div>
                  <p className="how-desc">We price materials and labor, apply markups, and prep a client‑ready proposal.</p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-icon" aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l4 4 10-10" stroke="#2f49e2" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </div>
                <div className="how-content">
                  <div className="how-step">4. Review & handoff</div>
                  <p className="how-desc">Quick revisions if needed, then deliverables in Bluebeam, Planswift, and Excel.</p>
                </div>
              </div>
            </div>
          </section>

          <p className="social-proof-message"><strong>Rated highly by contractors across top platforms.</strong></p>

          <article className="hero-review">
            <div className="hero-review-left">
              <blockquote>
                “Every other estimating solution we looked at was antiquated. Estimating Hub takes estimating into the 21st century.”
              </blockquote>
              <div className="reviewer">
                <img className="reviewer-avatar" src="/usman.png" alt="Usman Chahudhary" />
                <div className="reviewer-meta">
                  <div className="reviewer-name">Usman Chahudhary</div>
                  <div className="reviewer-title">CEO, Estimating Hub</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer className="site-footer" aria-label="Footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/logo.png" alt="Logo" className="footer-logo" />
            <p className="footer-tag">Accurate takeoffs. Faster bids. Better wins.</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#hubspot-form">Request a Demo</a>
            <a href="#" aria-label="Services">Services</a>
            <a href="#" aria-label="Capabilities">Capabilities</a>
            <a href="#" aria-label="Contact">Contact</a>
          </nav>

          <div className="footer-contact">
            <a href="tel:+18446920633">+1 (844) 692-0633</a>
            <a href="mailto:info@example.com">info@example.com</a>
            <div className="footer-social" aria-label="Social links">
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM9 8h4.8v2.2h.1C14.7 8.9 16.4 8 18.6 8 23.1 8 24 10.7 24 15.1V24h-5v-7.7c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4v7.9H9V8z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden><path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.7-1.5 2-2.6-.9.6-2 .9-3.1 1.2A4.7 4.7 0 0 0 16.6 3c-2.6 0-4.7 2.1-4.7 4.7 0 .4 0 .8.1 1.1C7.9 8.6 4.2 6.7 1.7 3.8c-.5.8-.7 1.6-.7 2.6 0 1.7.9 3.3 2.3 4.2-.8 0-1.6-.2-2.3-.6v.1c0 2.4 1.7 4.4 3.9 4.9-.4.1-.9.2-1.4.2-.3 0-.6 0-.9-.1.6 2 2.5 3.5 4.7 3.6A9.5 9.5 0 0 1 0 20.7 13.4 13.4 0 0 0 7.3 23c8.8 0 13.7-7.3 13.7-13.7v-.6c1-.7 1.7-1.6 2.3-2.6z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden><path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3C0 23.4.6 24 1.3 24h11.5v-9.3H9.8V11h3V8.4c0-3.1 1.9-4.8 4.6-4.8 1.3 0 2.4.1 2.7.1v3.1h-1.9c-1.5 0-1.9.7-1.9 1.8V11h3.7l-.5 3.7H16.3V24h6.4c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Estimating Hub. All rights reserved.</p>
        </div>
      </footer>
      </div>
  )
}

export default App
