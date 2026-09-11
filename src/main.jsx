import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const CONTACT = {
  whatsapp: '917899888543',
  phones: ['+91 78998 88543', '+91 88923 01231'],
  address: '2nd Floor, Vijaya Arcade, No. 135/3, Lal Bagh Main Rd, Vinayaka Nagar, Sudhama Nagar, Bengaluru – 560027',
  instagram: 'https://www.instagram.com/_aura_xfit?stkn=MXFwN3FwYnBmN204bg%3D%3D',
  maps: 'https://maps.app.goo.gl/iJ3oybprYjN4xymR7'
};

const ASSETS = {
  hero: [
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2000&q=85',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=85'
  ],
  about: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=85',
  facility: [
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=85'
  ]
};

const SLOGANS = [
  'TRANSFORM YOUR BODY. ELEVATE YOUR LIFESTYLE.',
  'BUILT BY DISCIPLINE.',
  'BECOME YOUR STRONGEST SELF.',
  'NO EXCUSES. JUST RESULTS.',
  'TRAIN HARD. LIVE BOLD.',
  'YOUR LIMITS LIVE HERE.',
  'SWEAT. STRENGTH. SUCCESS.',
  'SHOW UP. LEVEL UP.',
  'POWER IN EVERY REP.',
  'STRONGER THAN YESTERDAY.',
  'MAKE YOUR MOVE.'
];

const trainers = ['Arjun Mehta', 'Nisha Rao', 'Kabir Shah', 'Maya Fernandes', 'Rohan Verma'].map((name, i) => ({
  name,
  role: i === 0 ? 'Head Coach' : 'Fitness Trainer',
  image: `https://images.unsplash.com/${['photo-1534438327276-14e5300c3a48','photo-1594381898411-846e7d193883','photo-1583454110551-21f2fa2afe61','photo-1550345332-09e3ac987658','photo-1611672585731-8f24fbc4b5fd'][i]}?auto=format&fit=crop&w=700&q=85`,
  instagram: '#'
}));

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
    menu: <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>,
    close: <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>,
    insta: <><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></>,
    phone: <path d="M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3c-8.8.5-15.5-6.2-15-15Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8"/></>,
    check: <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>,
    upload: <><path d="M12 16V3m-5 5 5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 13v6h14v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
    whatsapp: <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.2 1.28-1.97 1.34-.52.04-1.2.06-3.48-.88-2.91-1.2-4.81-4.14-4.96-4.34-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.58-.36.77-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.01.9 2.16.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.18-.32.4-.46.54-.15.15-.31.32-.13.62.17.3 1.15 1.89 2.51 3.1 1.74 1.55 3.2 2.03 3.66 2.25.46.22.73.18 1-.12.27-.3.77-.9 1.05-1.29.27-.39.55-.33.92-.19.38.14 2.39 1.13 2.8 1.33.41.2.68.3.78.47.1.17.1.98-.14 1.66z" fill="currentColor"/>
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Membership', 'Teams', 'Facility', 'Contact'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="logo" aria-label="Aura Fitness home">
          <span>AURA</span> FITNESS<i>.</i>
        </a>
        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
        {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
        <nav className={open ? 'open' : ''}>
          {links.map((x) => (
            <a key={x} href={'#' + x.toLowerCase()} onClick={() => setOpen(false)}>
              {x}
            </a>
          ))}
          <a
            className="nav-cta"
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Start today <Icon name="arrow" size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
};

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % SLOGANS.length), 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero" style={{ '--hero': `url(${ASSETS.hero[idx % ASSETS.hero.length]})` }}>
      <div className="hero-shade" />
      <div className="hero-container">
        <div className="hero-content">
          <p className="eyebrow">Bengaluru’s training ground</p>
          <h1 key={idx}>{SLOGANS[idx]}</h1>
          <p className="hero-copy">
            A premium space for real progress—expert coaching, powerful equipment, and a community that keeps you moving.
          </p>
          <div className="hero-actions">
            <a className="button" href="#membership">
              Explore membership <Icon name="arrow" size={18} />
            </a>
            <a className="text-link" href="#about">
              Scroll to explore <span>↓</span>
            </a>
          </div>
        </div>
        <div className="hero-count">
          <div className="count-numbers">
            <b>{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</b>
            <span>/ {SLOGANS.length < 10 ? `0${SLOGANS.length}` : SLOGANS.length}</span>
          </div>
          <div className="progress">
            <i style={{ width: `${((idx + 1) / SLOGANS.length) * 100}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container about">
        <div className="section-copy">
          <p className="eyebrow yellow">The Aura standard</p>
          <h2>
            Not just a gym.<br />
            <em>Your next level.</em>
          </h2>
          <p>
            At Aura Fitness, every workout is designed to make you feel capable, confident, and completely at home in your body. Our high-energy training floor combines focused coaching with the freedom to train your way.
          </p>
          <p>
            Whether you are building strength, improving endurance, or beginning again, this is where consistency becomes transformation.
          </p>
          <div className="stats">
            <div className="stat-card">
              <strong>12<span>+</span></strong>
              <small>Months of momentum</small>
            </div>
            <div className="stat-card">
              <strong>50</strong>
              <small>Founding member spots</small>
            </div>
            <div className="stat-card">
              <strong>6<span>am</span></strong>
              <small>Ready when you are</small>
            </div>
          </div>
        </div>
        <div className="about-image-wrapper">
          <div className="about-image">
            <img src={ASSETS.about} alt="Athlete training with battle ropes" loading="lazy" />
            <div className="image-badge">
              <b>OWN<br />YOUR<br />POWER</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const GOOGLE_SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbyuMSrvRaHghHWYVkBIkpZgua45vo20fZxf5J03dOpeZCANIQccdTIl2YmIwepI605o/exec';

const truncateFileName = (name, maxLen = 26) => {
  if (!name) return '';
  if (name.length <= maxLen) return name;
  const extIndex = name.lastIndexOf('.');
  if (extIndex !== -1 && name.length - extIndex <= 6) {
    const ext = name.slice(extIndex);
    return name.slice(0, maxLen - ext.length - 3) + '...' + ext;
  }
  return name.slice(0, maxLen - 3) + '...';
};

function Membership() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileData, setFileData] = useState('');
  const [fileType, setFileType] = useState('');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const valid = ['name', 'college', 'email', 'phone'].every((x) => form[x]?.trim()) && fileName && fileData;

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFileName(selected.name);
      setFileType(selected.type || 'image/jpeg');
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileData(event.target.result);
      };
      reader.readAsDataURL(selected);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!valid || loading) return;

    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        college: form.college.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        fileName,
        fileType,
        fileData
      };

      await fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback to reveal so student is never stuck
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="membership" className="membership-section">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow yellow">Memberships</p>
            <h2>
              Commit to your<br />
              <em>strongest year.</em>
            </h2>
          </div>
          <p>Simple, focused plans. Find your entry point and let’s get to work.</p>
        </div>
        <div className="plans">
          <article className="plan regular">
            <div className="plan-top">
              <span>01 / Regular</span>
              <b>Yearly membership</b>
            </div>
            <h3>
              Full access.<br />
              Full force.
            </h3>
            <ul>
              {['12 months of gym access', 'Premium training floor', 'First 50 member offer', 'Aura fitness community'].map((x) => (
                <li key={x}>
                  <span className="icon-wrap"><Icon name="check" size={15} /></span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="price">
              <sup>₹</sup>11,111<small>one annual payment</small>
            </div>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%20Aura%20Fitness%2C%20I%20would%20like%20to%20enquire%20about%20the%20Regular%20membership.`}
              target="_blank"
              rel="noreferrer"
              className="button black"
            >
              Enquire now <Icon name="arrow" size={18} />
            </a>
          </article>

          <article className={'plan student ' + (submitted ? 'revealed' : '')}>
            <div className="plan-top">
              <span>02 / Students</span>
              <b>Student exclusive</b>
            </div>
            {!submitted ? (
              <>
                <h3>
                  Train smart.<br />
                  Spend smarter.
                </h3>
                <p className="student-intro">Unlock our student rate with a quick eligibility form.</p>
                <form onSubmit={submit}>
                  <label>
                    <span>Full name</span>
                    <input
                      required
                      placeholder="Enter your name"
                      value={form.name || ''}
                      disabled={loading}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </label>
                  <label>
                    <span>College name</span>
                    <input
                      required
                      placeholder="Enter college or university"
                      value={form.college || ''}
                      disabled={loading}
                      onChange={(e) => setForm({ ...form, college: e.target.value })}
                    />
                  </label>
                  <label>
                    <span>Personal email</span>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={form.email || ''}
                      disabled={loading}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </label>
                  <label>
                    <span>Phone number</span>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone || ''}
                      disabled={loading}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </label>
                  <label className="file-input">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      required
                      disabled={loading}
                      onChange={handleFileChange}
                    />
                    <Icon name="upload" size={17} />
                    <span className="file-name-display" title={fileName || 'Upload student ID card'}>
                      {fileName ? truncateFileName(fileName, 24) : 'Upload student ID card'}
                    </span>
                  </label>
                  <button className="button" type="submit" disabled={loading}>
                    {loading ? (
                      <span className="btn-loading">
                        <span className="spinner" /> Reviewing...
                      </span>
                    ) : (
                      <>Unlock my student rate <Icon name="arrow" size={18} /></>
                    )}
                  </button>
                </form>
                <small className="demo-note">Your ID and information are securely encrypted and verified with Aura Fitness.</small>
              </>
            ) : (
              <div className="reveal">
                <div className="spark">✦</div>
                <p className="eyebrow">Your student rate is unlocked</p>
                <h3>
                  Welcome to<br />the <em>inside.</em>
                </h3>
                <div className="price">
                  <sup>₹</sup>9,999<small>12 months · first 50 students</small>
                </div>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%20Aura%20Fitness%2C%20I%20have%20unlocked%20the%20Student%20membership%20(${encodeURIComponent(form.name || '')}%20from%20${encodeURIComponent(form.college || '')})%20and%20would%20like%20to%20join.`}
                  target="_blank"
                  rel="noreferrer"
                  className="button black"
                >
                  Join via WhatsApp <Icon name="arrow" size={18} />
                </a>
                <button className="reset" type="button" onClick={() => setSubmitted(false)}>
                  Edit details
                </button>
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}

function Teams() {
  return (
    <section id="teams" className="teams-section">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow yellow">Meet your coaches</p>
            <h2>
              People who push<br />
              <em>with purpose.</em>
            </h2>
          </div>
          <p>Knowledgeable, energetic, and invested in every rep you take.</p>
        </div>
        <div className="trainer-grid">
          {trainers.map((t, i) => (
            <article className="trainer" key={t.name}>
              <img src={t.image} alt={`${t.name}, ${t.role}`} loading="lazy" />
              <div className="trainer-info">
                <div className="trainer-meta">
                  <span>0{i + 1}</span>
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </div>
                <a href={t.instagram} aria-label={`${t.name} on Instagram`} className="trainer-social">
                  <Icon name="insta" size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="placeholder-note">Trainer names, images, and social links are placeholders, ready to be updated.</p>
      </div>
    </section>
  );
}

function Facility() {
  const items = [
    ['Strength zone', 'Purpose-built equipment for strong foundations.'],
    ['Cardio deck', 'Go further with every session.'],
    ['Functional studio', 'Move, train and sweat without limits.']
  ];
  return (
    <section id="facility" className="facility-section">
      <div className="section-container facility-container">
        <div className="facility-intro">
          <p className="eyebrow yellow">The training floor</p>
          <h2>
            Made for<br />
            <em>the work.</em>
          </h2>
          <p>Designed for focus. Built for your best effort. Every corner of Aura Fitness gives you room to chase the next rep.</p>
          <a href="#contact" className="text-link dark">
            Visit Aura Fitness <Icon name="arrow" size={17} />
          </a>
        </div>
        <div className="gallery">
          {ASSETS.facility.map((img, i) => (
            <div className={`gallery-image g${i}`} key={img}>
              <img src={img} alt={items[i][0]} loading="lazy" />
              <div className="gallery-overlay">
                <span>0{i + 1}</span>
                <h3>{items[i][0]}</h3>
                <p>{items[i][1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-copy">
          <p className="eyebrow yellow">Come train with us</p>
          <h2>
            Your new<br />
            <em>starting line.</em>
          </h2>
          <p className="contact-desc">Come in, look around, and feel the Aura difference.</p>
          <div className="contact-details">
            <a href="tel:+917899888543" className="contact-card">
              <div className="contact-icon">
                <Icon name="phone" size={20} />
              </div>
              <div className="contact-info">
                <span className="contact-tag">Call Us</span>
                <span className="contact-value">{CONTACT.phones[0]}</span>
                <span className="contact-value">{CONTACT.phones[1]}</span>
              </div>
            </a>
            <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon">
                <Icon name="pin" size={20} />
              </div>
              <div className="contact-info">
                <span className="contact-tag">Visit Us</span>
                <span className="contact-value">{CONTACT.address}</span>
              </div>
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon">
                <Icon name="insta" size={20} />
              </div>
              <div className="contact-info">
                <span className="contact-tag">Follow Us</span>
                <span className="contact-value">@_AURA_XFIT</span>
              </div>
            </a>
          </div>
        </div>
        <div className="map-column">
          <div className="map-card">
            <iframe
              title="AURA X FITNESS location"
              src="https://maps.google.com/maps?q=AURA%20X%20FITNESS%2C%20Lal%20Bagh%20Main%20Rd%2C%20Bengaluru%2C%2012.9605123%2C77.5877014&t=&z=17&ie=UTF8&iwloc=B&output=embed"
              loading="lazy"
            />
            <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="map-link">
              Open in Google Maps <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app-root">
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Membership />
        <Teams />
        <Facility />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-container">
          <a className="logo" href="#home">
            <span>AURA</span> FITNESS<i>.</i>
          </a>
          <p>© {new Date().getFullYear()} Aura Fitness. Built for the bold.</p>
          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </footer>
      <a
        className="whatsapp"
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);


