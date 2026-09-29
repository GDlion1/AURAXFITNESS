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
    {
      desktop: '/images/gym/hero-wide-floor.jpg',
      mobile: '/images/gym/gym-floor-wide.png',
      alt: 'Aura Fitness expansive gym floor and ambient lighting'
    },
    {
      desktop: '/images/gym/hero-wide-strength.jpg',
      mobile: '/images/gym/facility-strength-freeweights.png',
      alt: 'Respect The Equipment - Free weight strength training area'
    },
    {
      desktop: '/images/gym/hero-wide-hacksquat.jpg',
      mobile: '/images/gym/gym-hacksquat-arnold.png',
      alt: 'Heavy hack squat & leg press beneath the iconic Arnold mural'
    },
    {
      desktop: '/images/gym/hero-wide-cardio.jpg',
      mobile: '/images/gym/facility-cardio-deck.png',
      alt: 'Commercial cardio treadmill deck overlooking Bengaluru'
    }
  ],
  aboutSpots: [
    {
      id: 'mural',
      name: 'Hack Squat & Arnold Mural',
      tag: 'Heavy Floor',
      image: '/images/gym/gym-hacksquat-arnold.png',
      desc: 'Our signature heavy lifting zone featuring 45° leg press, hack squat, and the iconic Arnold wall art.'
    },
    {
      id: 'freeweights',
      name: 'Respect The Equipment',
      tag: 'Strength Zone',
      image: '/images/gym/facility-strength-freeweights.png',
      desc: 'Warm ambient backlighting, Olympic bumper plates, and barbell stations built for serious lifters.'
    },
    {
      id: 'floor',
      name: 'Main Training Arena',
      tag: 'Full Floor',
      image: '/images/gym/gym-floor-wide.png',
      desc: 'Uncluttered movement lanes, high ceilings, and shock-absorbing flooring across the full floor.'
    },
    {
      id: 'zumba',
      name: 'Zumba & Group Classes',
      tag: 'Zumba Studio',
      image: '/images/gym/facility-zumba-studio.jpg',
      desc: 'High-energy Zumba and group fitness sessions designed to make every workout dynamic, social, and fun.'
    },
    {
      id: 'icetub',
      name: 'Cold Plunge & Ice Tub (3rd Floor)',
      tag: 'Ice Tub',
      image: '/images/gym/image.png',
      desc: 'Accelerate post-workout recovery with dedicated cold plunge ice tubs located on the 3rd Floor, engineered for rapid muscle repair and inflammation reduction.'
    }
  ],
  muralBanner: '/images/gym/arnold-mural-classic.png',
  facility: [
    {
      title: '01 — Strength & Free Weights',
      desc: 'A dedicated strength zone equipped for serious training, from foundational movements to heavy compound lifts.',
      image: '/images/gym/facility-strength-freeweights.png',
      tag: 'Zone 01'
    },
    {
      title: '02 — Leg & Lower Body Zone',
      desc: 'Build lower-body strength with heavy-duty hack squat, leg press, extension and curl stations.',
      image: '/images/gym/gym-hacksquat-arnold.png',
      tag: 'Zone 02'
    },
    {
      title: '03 — Machines & Cable Zone',
      desc: 'Target every muscle with precision using pin-loaded machines, dual cables and a commercial Smith station.',
      image: '/images/gym/facility-cables-smith.png',
      tag: 'Zone 03'
    },
    {
      title: '04 — Cardio Deck',
      desc: 'Get your conditioning in with commercial treadmills, cardio equipment and a bright, open training environment.',
      image: '/images/gym/facility-cardio-deck.png',
      tag: 'Zone 04'
    },
    {
      title: '05 — Zumba & Group Classes',
      desc: 'High-energy Zumba and group fitness sessions designed to make every workout more dynamic, social and fun.',
      image: '/images/gym/facility-zumba-studio.jpg',
      tag: 'Zone 05'
    },
    {
      title: '06 — Cold Plunge & Ice Suite',
      desc: 'Dedicated commercial cold plunge ice tubs located on the 3rd Floor for elite post-workout athletic recovery, soreness relief, and rapid muscle restoration.',
      image: '/images/gym/image.png',
      tag: 'Zone 06'
    }
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

const trainers = [
  {
    name: 'Vasanth Kumar',
    role: 'Head Coach',
    image: '/images/trainer_img/Vasanth.png',
    pos: 'center 75%',
    instagram: 'https://www.instagram.com/vasanth_kumarvk?stkn=MWIweWg1MTY2aHlkdw=='
  },
  {
    name: 'Praveen',
    role: 'Strength Trainer',
    image: '/images/trainer_img/Praveen.png',
    pos: 'center 20%',
    instagram: 'https://www.instagram.com/__.praveen.__25?stkn=MThrb2ZvcGZ3eDFscA=='
  },
  {
    name: 'Charan',
    role: 'Gym Trainer',
    image: '/images/trainer_img/Charan.PNG',
    pos: 'center 20%',
    instagram: 'https://www.instagram.com/charan___6767?stkn=azhvYWw5M3huNW1k=='
  },
  {
    name: 'Angela',
    role: 'Zumba Instructor',
    image: '/images/trainer_img/Zumba.png',
    pos: 'center 25%',
    instagram: '#'
  }
];

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
    close: <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
    insta: <><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></>,
    phone: <path d="M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3c-8.8.5-15.5-6.2-15-15Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" /></>,
    check: <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
    upload: <><path d="M12 16V3m-5 5 5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 13v6h14v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
    whatsapp: <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.2 1.28-1.97 1.34-.52.04-1.2.06-3.48-.88-2.91-1.2-4.81-4.14-4.96-4.34-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.58-.36.77-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.01.9 2.16.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.18-.32.4-.46.54-.15.15-.31.32-.13.62.17.3 1.15 1.89 2.51 3.1 1.74 1.55 3.2 2.03 3.66 2.25.46.22.73.18 1-.12.27-.3.77-.9 1.05-1.29.27-.39.55-.33.92-.19.38.14 2.39 1.13 2.8 1.33.41.2.68.3.78.47.1.17.1.98-.14 1.66z" fill="currentColor" />,
    copy: <><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></>,
    cash: <><rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" /><path d="M6 12h.01M18 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
    scan: <><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" /></>,
    external: <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const Nav = ({ onNavigate }) => {
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
        <a
          href="#home"
          className="logo-brand"
          aria-label="AURA X FITNESS home"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate('home');
            }
          }}
        >
          <div className="nav-logo-lockup">
            <img
              src="/images/logo/aurax-emblem-transparent.png"
              alt="AURA X Crest"
              className="nav-logo-emblem"
              width="80"
              height="36"
            />
            <div className="nav-brand-heading">
              <span className="brand-title">AURA <span className="brand-x">X</span> FITNESS</span>
            </div>
          </div>
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
          {open && (
            <div className="mobile-drawer-brand">
              <img
                src="/images/logo/aurax-full-transparent.png"
                alt="AURA X FITNESS"
                className="mobile-drawer-logo"
              />
              <span className="mobile-drawer-tag">AURA X FITNESS • LALBAGH</span>
            </div>
          )}
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

function Hero({ onNavigate }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % SLOGANS.length), 4000);
    return () => clearInterval(id);
  }, []);

  const heroAsset = ASSETS.hero[idx % ASSETS.hero.length];

  return (
    <section
      id="home"
      className="hero"
      style={{
        '--hero-desktop': `url(${heroAsset.desktop})`,
        '--hero-mobile': `url(${heroAsset.mobile})`
      }}
    >
      <div className="hero-shade" />
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-brand-pill">
            <span className="hero-brand-text">AURA X FITNESS • LALBAGH</span>
          </div>
          <h1 key={idx}>{SLOGANS[idx]}</h1>
          <p className="hero-copy">
            A premium space for real progress—expert coaching, powerful equipment, and a community that keeps you moving.
          </p>
          <div className="hero-actions">
            <a className="button" href="#membership">
              Explore membership <Icon name="arrow" size={18} />
            </a>
            <a
              href="/day-pass"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-daypass"
            >
              One Day Pass — ₹299 <Icon name="arrow" size={18} />
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
  const [activeSpot, setActiveSpot] = useState(0);
  const spot = ASSETS.aboutSpots[activeSpot];

  return (
    <section id="about" className="about-section">
      <div className="section-container about">
        <div className="section-copy">
          <p className="eyebrow yellow">The AURA X Standard</p>
          <h2>
            Not just a gym.<br />
            <em>Your next level.</em>
          </h2>
          <p>
            At AURA X FITNESS, every workout is designed to make you feel capable, confident, and completely at home in your body. Our high-energy training floor combines focused coaching with the freedom to train your way.
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

          <div className="spot-selector" role="tablist" aria-label="Floor view selector">
            <span className="spot-selector-label">Explore Real Floor:</span>
            <div className="spot-pills">
              {ASSETS.aboutSpots.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={activeSpot === idx}
                  className={`spot-pill ${activeSpot === idx ? 'active' : ''}`}
                  onClick={() => setActiveSpot(idx)}
                >
                  {s.tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="about-image-wrapper">
          <div className="about-image">
            <img
              key={spot.image}
              src={spot.image}
              alt={spot.name}
              loading="lazy"
            />
            <div className="about-caption">
              <span className="caption-tag">{spot.tag}</span>
              <h3>{spot.name}</h3>
              <p>{spot.desc}</p>
            </div>
            <div className="image-badge">
              <b>OWN<br />YOUR<br />POWER</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeritageBanner() {
  return (
    <section id="heritage" className="heritage-section">
      <div className="heritage-container">
        <div className="heritage-card">
          <div className="heritage-image-wrap">
            <img
              src={ASSETS.muralBanner}
              alt="Arnold Schwarzenegger championship inspiration mural at AURA X FITNESS"
              loading="lazy"
            />
            <div className="heritage-glow" />
          </div>
          <div className="heritage-content">
            <div className="card-brand-watermark heritage-watermark">
              <img src="/images/logo/aurax-emblem-transparent.png" alt="" aria-hidden="true" />
            </div>
            <p className="eyebrow yellow">Gym Wall Heritage</p>
            <h2>
              Built by discipline.<br />
              <em>Inspired by legends.</em>
            </h2>
            <p>
              The iconic championship mural at AURA X FITNESS isn't just wall art—it's the daily standard for every lifter stepping onto our floor. Leave your ego at the door, respect the equipment, and train with unyielding purpose.
            </p>
            <div className="heritage-quotes">
              <span>✦ NO EGO</span>
              <span>✦ STAY HUMBLE</span>
              <span>✦ TRAIN, DON'T WORK OUT</span>
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

function Membership({ onNavigate }) {
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

        {/* One Day Pass Highlight Card */}
        <div className="daypass-membership-card">
          <div className="card-brand-watermark daypass-watermark">
            <img src="/images/logo/aurax-emblem-transparent.png" alt="" aria-hidden="true" />
          </div>
          <div className="daypass-membership-content">
            <span className="daypass-badge-pill">⚡ Single Session Access</span>
            <h3>Looking for a Single Workout? Try Our One Day Pass.</h3>
            <p>
              Experience our full 2,500+ sq.ft. floor, custom AURA X heavy dumbbells, Arnold mural hack squat deck, and cardio suite for <strong>₹299 only</strong> with all facilities included.
            </p>
            <div className="daypass-pill-tags">
              <span>✓ All 6 Zones Included</span>
              <span>✓ 6 AM – 10 PM Access</span>
              <span>✓ Zero Hidden Charges</span>
            </div>
          </div>
          <div className="daypass-membership-action">
            <div className="daypass-rate-tag">
              <sup>₹</sup>299<small>only • all facilities</small>
            </div>
            <a
              href="/day-pass"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-daypass-cta"
            >
              Get One Day Pass <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>

        <div className="plans">
          <article className="plan regular">
            <div className="plan-brand-watermark">
              <img src="/images/logo/aurax-emblem-transparent.png" alt="" aria-hidden="true" />
            </div>
            <div className="plan-top">
              <span>01 / Regular</span>
              <b>Yearly membership</b>
            </div>
            <div className="plan-content-wrap">
              <h3>
                Full access.<br />
                Full force.
              </h3>
              <ul>
                {['12 months of gym access', 'Premium training floor', 'First 50 member offer', 'AURA X FITNESS community'].map((x) => (
                  <li key={x}>
                    <span className="icon-wrap"><Icon name="check" size={15} /></span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <div className="price">
                <sup>₹</sup>11,111<small>one annual payment</small>
              </div>
            </div>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hi AURA X FITNESS, I would like to enquire about the Regular membership.')}`}
              target="_blank"
              rel="noreferrer"
              className="button black plan-btn"
            >
              Enquire now <Icon name="arrow" size={18} />
            </a>
          </article>

          <article className={'plan student ' + (submitted ? 'revealed' : '')}>
            <div className="plan-brand-watermark student-watermark">
              <img src="/images/logo/aurax-emblem-transparent.png" alt="" aria-hidden="true" />
            </div>
            <div className="plan-top">
              <span>02 / Students</span>
              <b>Student exclusive</b>
            </div>
            {!submitted ? (
              <form onSubmit={submit} className="plan-form-wrap">
                <div className="plan-content-wrap">
                  <h3>
                    Train smart.<br />
                    Spend smarter.
                  </h3>
                  <div className="student-locked-box">
                    <div className="locked-badge-pill">
                      <span className="lock-icon">🔒</span> Exclusive Rate Locked
                    </div>
                    <p className="student-intro">Enter all your details and upload your student ID photo below to reveal your discounted rate.</p>
                  </div>
                  <div className="student-fields-grid">
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
                  </div>
                  <small className="demo-note">Your ID and information are securely encrypted and verified with AURA X FITNESS.</small>
                </div>
                <button className="button plan-btn" type="submit" disabled={loading}>
                  {loading ? (
                    <span className="btn-loading">
                      <span className="spinner" /> Reviewing...
                    </span>
                  ) : (
                    <>Unlock & Reveal Rate <Icon name="arrow" size={18} /></>
                  )}
                </button>
              </form>
            ) : (
              <div className="reveal-content-wrap">
                <div className="plan-content-wrap reveal">
                  <div className="spark">✦</div>
                  <p className="eyebrow">Your student rate is unlocked</p>
                  <h3>
                    Welcome to<br />the <em>inside.</em>
                  </h3>
                  <div className="price">
                    <sup>₹</sup>9,999<small>12 months • student discount rate</small>
                  </div>
                </div>
                <div className="reveal-bottom-actions">
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi AURA X FITNESS, I have unlocked the Student membership (${form.name || ''} from ${form.college || ''}) and would like to join.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button black plan-btn"
                  >
                    Join via WhatsApp <Icon name="arrow" size={18} />
                  </a>
                  <button className="reset" type="button" onClick={() => setSubmitted(false)}>
                    Edit details
                  </button>
                </div>
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
            <p className="eyebrow">Meet your coaches</p>
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
              <img
                src={t.image}
                alt={`${t.name}, ${t.role}`}
                loading="lazy"
                style={{ objectPosition: t.pos || 'center 35%' }}
              />
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
      </div>
    </section>
  );
}

function Facility() {
  return (
    <section id="facility" className="facility-section">
      <div className="section-container facility-container">
        <div className="facility-intro">
          <p className="eyebrow yellow">The training floor</p>
          <h2>
            Made for<br />
            <em>the work.</em>
          </h2>
          <p>
            Designed for focus. Built for your best effort. Every corner of AURA X FITNESS gives you room to chase the next rep with commercial-grade bio-mechanics.
          </p>
          <div className="facility-badges">
            <span className="facility-tag">2nd Floor · Vijaya Arcade</span>
            <span className="facility-tag">Lalbagh Main Rd</span>
            <span className="facility-tag">MON - SAT (6 AM – 10 PM)</span>
            <span className="facility-tag">SUN (7 AM – 6 PM)</span>
          </div>
          <a href="#contact" className="text-link dark" style={{ marginTop: '22px' }}>
            Visit AURA X FITNESS <Icon name="arrow" size={17} />
          </a>
        </div>
        <div className="gallery-grid">
          {ASSETS.facility.map((item) => (
            <article className="gallery-card" key={item.title}>
              <div className="gallery-media">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecoveryComingSoon() {
  const tickerItems = [
    '✦ COMING SOON ON 3RD FLOOR',
    '✦ COLD PLUNGE & ICE TUB SUITE COMING SOON ON 3RD FLOOR',
    '✦ 3RD FLOOR EXPANSION COMING SOON',
    '✦ NEW AT AURA X FITNESS — COMING SOON ON 3RD FLOOR'
  ];

  return (
    <section id="recovery" className="recovery-section">
      <div className="recovery-ticker" aria-label="Upcoming updates announcement">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((txt, idx) => (
            <span key={idx} className="ticker-item">
              {txt}
            </span>
          ))}
        </div>
      </div>

      <div className="section-container recovery-container">
        <div className="recovery-card">
          <div className="recovery-media">
            <img
              src="/images/gym/image.png"
              alt="AURA X FITNESS 3rd Floor Cold Plunge and Ice Tub Suite"
              loading="lazy"
            />
            <div className="recovery-badge">
              <span className="pulse-dot" />
              <span>3RD FLOOR • COMING SOON</span>
            </div>
          </div>
          <div className="recovery-content">
            <p className="eyebrow yellow">3rd Floor Expansion Update</p>
            <h2>
              Cold Plunge &<br />
              <em>Ice Tub Suite.</em>
            </h2>
            <p className="recovery-desc">
              True athletic performance requires elite recovery. Coming soon to AURA X FITNESS: dedicated commercial cold plunge ice tubs located exclusively on our <strong>3rd Floor</strong> (directly above the main training arena). Engineered for sub-zero cryo-recovery, rapid inflammation reduction, and accelerated muscle rejuvenation.
            </p>
            <div className="recovery-highlights">
              <div className="recovery-item">
                <span className="rec-icon">❄️</span>
                <div>
                  <h3>Dedicated Cold Plunge Ice Tubs</h3>
                  <p>Commercial chilled ice tubs maintained at optimal athletic recovery temperatures (39°F / 4°C).</p>
                </div>
              </div>
              <div className="recovery-item">
                <span className="rec-icon">⚡</span>
                <div>
                  <h3>Anti-Inflammatory Muscle Repair</h3>
                  <p>Flushes lactic acid buildup, drastically reduces post-leg day DOMS, and resets your central nervous system.</p>
                </div>
              </div>
              <div className="recovery-item">
                <span className="rec-icon">📍</span>
                <div>
                  <h3>Exclusive 3rd Floor Sanctuary</h3>
                  <p>A quiet, focused athletic recovery suite situated on the 3rd Floor, Vijaya Arcade.</p>
                </div>
              </div>
            </div>
            <div className="recovery-status">
              <span className="rec-status-tag">3rd Floor • In Preparation</span>
              <span className="rec-status-text">Included for AURA X FITNESS athletes upon launch</span>
            </div>
          </div>
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
          <div className="card-brand-watermark contact-watermark">
            <img src="/images/logo/aurax-emblem-transparent.png" alt="" aria-hidden="true" />
          </div>
          <p className="eyebrow yellow">Come train with us</p>
          <h2>
            Your new<br />
            <em>starting line.</em>
          </h2>
          <p className="contact-desc">Come in, look around, and feel the Aura difference.</p>
          <div className="contact-details">
            <div className="contact-card">
              <div className="contact-icon">
                <Icon name="phone" size={20} />
              </div>
              <div className="contact-info">
                <span className="contact-tag">Call Us</span>
                <div className="contact-phone-group">
                  <a href={`tel:${CONTACT.phones[0].replace(/\s+/g, '')}`} className="contact-phone-link">
                    {CONTACT.phones[0]}
                  </a>
                  <span className="phone-dot-sep">•</span>
                  <a href={`tel:${CONTACT.phones[1].replace(/\s+/g, '')}`} className="contact-phone-link">
                    {CONTACT.phones[1]}
                  </a>
                </div>
              </div>
            </div>
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
          </div>
          <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="map-link">
            Open in Google Maps <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

const GYM_UPI = {
  id: 'MSAURAXFITNESS.eazypay@icici',
  merchantName: 'M/S AURA X FITNESS',
  amount: '299',
  qrImage: '/images/payment_qr/qr.png'
};

const DAYPASS_SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbw4FeN8BxTrzkLmzmaeRBEV5YMzSIEokLdXFGcNN0e2Sk1FRDPBQc9LI03XrFCLzK-b/exec';

function DayPassPage({ onBack }) {
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [visitDate, setVisitDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [paymentMode, setPaymentMode] = useState('online'); // 'online' | 'offline'
  const [bookingStep, setBookingStep] = useState('form'); // 'form' | 'qr_pay' | 'ticket'
  const [utrNumber, setUtrNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passData, setPassData] = useState(null);
  const [copiedToken, setCopiedToken] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];
  const phoneDigits = guestPhone.replace(/\D/g, '');
  const passSuffix = phoneDigits.slice(-4) || '8543';
  const dateSuffix = visitDate.replace(/-/g, '').slice(4);

  // Active token calculation
  const currentModePrefix = passData
    ? (passData.paymentMode.includes('Online') ? 'ONL' : 'OFF')
    : (paymentMode === 'online' ? 'ONL' : 'OFF');
  const activeToken = passData?.token || `AXP-${currentModePrefix}-${passSuffix}-${dateSuffix}`;
  const isOnlinePaid = passData ? passData.paymentMode.includes('Online') : paymentMode === 'online';
  const activeStatus = passData?.paymentStatus || (paymentMode === 'online' ? 'PAID' : 'PENDING AT DESK');

  // Dynamic UPI payment URL for scanner and 1-tap mobile intents
  const upiIntentUrl = `upi://pay?pa=${GYM_UPI.id}&pn=${encodeURIComponent(GYM_UPI.merchantName)}&am=${GYM_UPI.amount}&cu=INR&tn=${encodeURIComponent('DayPass-' + activeToken)}`;

  // Entry check-in verification QR code for ticket
  const ticketEntryQr = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&margin=4&data=${encodeURIComponent(
    `https://maps.app.goo.gl/iJ3oybprYjN4xymR7?pass=${activeToken}&athlete=${encodeURIComponent(guestName || 'Guest')}&date=${visitDate}&status=${activeStatus}`
  )}`;

  const validateInputs = () => {
    if (!guestName.trim()) {
      setErrorMsg('Please enter your full name.');
      return false;
    }
    if (phoneDigits.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return false;
    }
    if (!visitDate) {
      setErrorMsg('Please select your workout date.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleInitialProceed = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    if (paymentMode === 'online') {
      setBookingStep('qr_pay');
      document.getElementById('quick-reservation')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      completeReservation('offline', '');
    }
  };

  const completeReservation = async (mode, utr) => {
    setIsSubmitting(true);
    const token = `AXP-${mode === 'online' ? 'ONL' : 'OFF'}-${passSuffix}-${dateSuffix}`;
    const newPass = {
      token,
      name: guestName.trim(),
      phone: guestPhone.trim(),
      date: visitDate,
      paymentMode: mode === 'online' ? 'Online (UPI QR)' : 'Offline (Cash at Desk)',
      paymentStatus: mode === 'online' ? 'PAID' : 'PENDING AT DESK',
      utr: utr.trim() || (mode === 'online' ? 'Direct UPI' : 'Cash on Arrival'),
      amount: '₹299',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    setPassData(newPass);

    // Send record to dedicated Day Pass Google Sheet
    try {
      const payload = {
        action: 'daypass',
        source: 'One Day Pass Booking',
        timestamp: newPass.timestamp,
        passToken: newPass.token,
        guestName: newPass.name,
        phone: newPass.phone,
        workoutDate: newPass.date,
        paymentMode: newPass.paymentMode,
        paymentStatus: newPass.paymentStatus,
        utrNumber: newPass.utr,
        amount: newPass.amount
      };

      await fetch(DAYPASS_SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Google Sheet webhook transmission error:', err);
    } finally {
      setIsSubmitting(false);
      setBookingStep('ticket');
      setTimeout(() => {
        document.getElementById('quick-reservation')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleResetPass = () => {
    setPassData(null);
    setBookingStep('form');
    setGuestName('');
    setGuestPhone('');
    setUtrNumber('');
    setErrorMsg('');
  };

  const handleCopyToken = () => {
    if (!passData) return;
    navigator.clipboard?.writeText(passData.token);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2200);
  };

  const handleCopyUpi = () => {
    navigator.clipboard?.writeText(GYM_UPI.id);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2200);
  };

  const handleWhatsAppBooking = () => {
    const nameStr = passData?.name || guestName.trim() || 'Guest Lifter';
    const phoneStr = passData?.phone || guestPhone.trim() || 'Not provided';
    const activePassToken = passData?.token || activeToken;
    const utrStr = passData?.utr || utrNumber.trim();
    const msg = encodeURIComponent(
      `Hi Aura X Fitness! 🏋️‍♂️\nI have booked a One Day Pass for ₹299 (All Facilities Included).\n\n• Pass Token: ${activePassToken}\n• Guest Name: ${nameStr}\n• Phone: ${phoneStr}\n• Workout Date: ${visitDate}\n• Payment Mode: ${passData?.paymentMode || (paymentMode === 'online' ? 'Online (UPI QR)' : 'Offline (Cash at Desk)')}\n• Status: ${passData?.paymentStatus || 'CONFIRMED'}${utrStr ? '\n• Ref / UTR: ' + utrStr : ''}\n\nPlease confirm my pass at the 2nd Floor reception, Vijaya Arcade.`
    );
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
  };

  const facilities = [
    {
      title: '01 — Strength & Free Weights',
      tag: 'Compound Lifting',
      image: '/images/gym/facility-strength-freeweights.png',
      desc: 'A dedicated strength zone equipped for serious training, from foundational movements to heavy compound lifts.'
    },
    {
      title: '02 — Leg & Lower Body Zone',
      tag: 'Heavy Lower Body',
      image: '/images/gym/gym-hacksquat-arnold.png',
      desc: 'Build lower-body strength with heavy-duty hack squat, leg press, extension and curl stations.'
    },
    {
      title: '03 — Machines & Cable Zone',
      tag: 'Targeted Isolation',
      image: '/images/gym/facility-cables-smith.png',
      desc: 'Target every muscle with precision using pin-loaded machines, dual cables and a commercial Smith station.'
    },
    {
      title: '04 — Cardio Deck',
      tag: 'Endurance Deck',
      image: '/images/gym/facility-cardio-deck.png',
      desc: 'Get your conditioning in with commercial treadmills, cardio equipment and a bright, open training environment.'
    }
  ];

  const amenities = [
    { title: 'Full 16-Hour Gym Access', desc: 'Workout anytime between 6:00 AM and 10:00 PM without restriction.' },
    { title: 'Clean Changing & Lockers', desc: 'Secure storage lockers and sanitized restrooms for your gear.' },
    { title: 'On-Floor Coach Guidance', desc: 'Certified trainers available on the floor for machine setup and spotting.' },
    { title: 'Chilled RO Drinking Water', desc: 'Hygienic water refilling station available throughout your session.' },
    { title: 'High-Speed Wi-Fi', desc: 'Complimentary high-speed connection for workout logs and playlists.' },
    { title: 'Zero Registration Fee', desc: 'Flat ₹299 only. No hidden admission fees, no contracts.' }
  ];

  return (
    <div className="daypass-page">
      {/* Top sticky navigation - Pure professional logo only */}
      <header className="daypass-nav">
        <div className="daypass-nav-inner daypass-nav-center">
          <div className="daypass-brand" aria-label="Aura X Fitness">
            <img
              src="/images/logo/aurax-emblem-transparent.png"
              alt="Aura X Crest"
              className="daypass-nav-emblem"
            />
            <div className="daypass-brand-text-wrap">
              <span className="daypass-brand-title">AURA <span className="brand-x">X</span> FITNESS</span>
              <span className="daypass-brand-subtitle">DAY PASS PORTAL</span>
            </div>
          </div>
        </div>
      </header>

      {/* Book Your Day Pass Quick Scroll Bar directly after nav bar */}
      <div className="daypass-scroll-bar">
        <div className="daypass-container daypass-scroll-bar-inner">
          <div className="scroll-bar-badge">
            <span className="pulse-dot" />
            <span>ONE DAY PASS • ₹299 ALL INCLUSIVE • 6:00 AM – 10:00 PM</span>
          </div>
          <button
            type="button"
            className="daypass-scroll-cta-btn"
            onClick={() => {
              document.getElementById('quick-reservation')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Your Day Pass <span className="scroll-arrow">↓</span>
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="daypass-hero">
        <div className="daypass-hero-backdrop" />
        <div className="daypass-hero-container">
          <div className="daypass-hero-badge">
            <span className="pulse-dot" />
            <span>INSTANT ENTRY PASS • ALL FACILITIES INCLUDED</span>
          </div>
          <h1>
            TRAIN FOR A DAY.<br />
            <em>FEEL THE DIFFERENCE.</em>
          </h1>
          <p className="daypass-hero-lead">
            Whether you are visiting Bengaluru, testing our commercial-grade training equipment before joining, or need an elite single workout—the Aura X One Day Pass gives you 100% full floor access.
          </p>

          {/* Pricing Highlight Box */}
          <div className="daypass-price-hero-card">
            <div className="price-hero-glow" />
            <div className="card-brand-watermark daypass-price-watermark">
              <img src="/images/logo/aurax-emblem-transparent.png" alt="" aria-hidden="true" />
            </div>
            <div className="price-hero-left">
              <span className="price-badge-exclusive">DAILY PASS RATE</span>
              <div className="price-huge">
                <sup>₹</sup>299<small>ONLY</small>
              </div>
              <p className="price-subtitle">
                ✓ Full Day Access (6:00 AM – 10:00 PM) • No Membership Commitment • All Training Zones Included
              </p>
            </div>
            <div className="price-hero-right">
              <button
                type="button"
                className="button daypass-claim-btn"
                onClick={() => {
                  document.getElementById('quick-reservation')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Your Day Pass <Icon name="arrow" size={18} />
              </button>
              <span className="instant-notice">⚡ Instant confirmation & fast-track check-in</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Facilities Section */}
      <section className="daypass-facilities-section">
        <div className="daypass-container">
          <div className="daypass-section-header">
            <p className="eyebrow yellow">100% Floor Privileges</p>
            <h2>
              ALL FACILITIES INCLUDED<br />
              <em>WITH YOUR ₹299 PASS</em>
            </h2>
            <p className="header-copy">
              No restricted zones, no machine lockouts. Your ₹299 one-day pass unlocks every square foot of our 2nd floor athletic facility on Lalbagh Main Road.
            </p>
          </div>

          <div className="daypass-facility-grid">
            {facilities.map((fac, idx) => (
              <article key={fac.title} className="daypass-facility-card">
                <div className="fac-image-wrap">
                  <img src={fac.image} alt={fac.title} loading="lazy" />
                  <span className="fac-tag">{fac.tag}</span>
                  <div className="fac-overlay-badge">Zone 0{idx + 1}</div>
                </div>
                <div className="fac-content">
                  <h3>{fac.title}</h3>
                  <p>{fac.desc}</p>
                  <div className="fac-access-pill">
                    <Icon name="check" size={14} /> Full Access Included
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Complimentary Amenities */}
          <div className="daypass-amenities-card">
            <div className="amenities-heading">
              <p className="eyebrow yellow">Complimentary Amenities</p>
              <h3>Everything you need for an elite training session</h3>
            </div>
            <div className="amenities-grid">
              {amenities.map((item) => (
                <div key={item.title} className="amenity-item">
                  <div className="amenity-icon">
                    <Icon name="check" size={16} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pass Reservation Section */}
      <section id="quick-reservation" className="daypass-booking-section">
        <div className="daypass-container">
          <div className="daypass-booking-wrap">
            {/* Step 1: Initial Form */}
            {bookingStep === 'form' && (
              <div className="daypass-form-box">
                <p className="eyebrow yellow">Quick Reservation</p>
                <h2>Generate Your Day Pass</h2>
                <p className="form-subtext">Enter your details and select online UPI QR or pay at the desk upon arrival.</p>

                <form onSubmit={handleInitialProceed} className="daypass-form">
                  {errorMsg && <div className="daypass-form-error">{errorMsg}</div>}

                  <label>
                    <span>Your Full Name</span>
                    <input
                      required
                      type="text"
                      placeholder="Enter your full name"
                      value={guestName}
                      onChange={(e) => {
                        setGuestName(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                    />
                  </label>

                  <label>
                    <span>Phone Number</span>
                    <div className="daypass-phone-group">
                      <span className="phone-prefix">+91</span>
                      <input
                        required
                        type="tel"
                        maxLength="10"
                        placeholder="98765 43210"
                        value={guestPhone}
                        onChange={(e) => {
                          setGuestPhone(e.target.value.replace(/\D/g, '').slice(0, 10));
                          if (errorMsg) setErrorMsg('');
                        }}
                      />
                    </div>
                  </label>

                  <label>
                    <span>Date of Workout</span>
                    <div className="daypass-date-picker-wrap">
                      <input
                        required
                        type="date"
                        min={todayStr}
                        value={visitDate}
                        onClick={(e) => {
                          if (e.target.showPicker) {
                            try { e.target.showPicker(); } catch (err) { }
                          }
                        }}
                        onChange={(e) => {
                          setVisitDate(e.target.value);
                          if (errorMsg) setErrorMsg('');
                        }}
                        className="daypass-calendar-input"
                      />
                    </div>
                  </label>

                  {/* Payment Selection Buttons */}
                  <div className="payment-mode-section">
                    <span className="payment-section-title">Select Payment Mode</span>
                    <div className="payment-options-grid">
                      <button
                        type="button"
                        className={`payment-option-card ${paymentMode === 'online' ? 'selected' : ''}`}
                        onClick={() => setPaymentMode('online')}
                        aria-pressed={paymentMode === 'online'}
                        aria-label="Pay Online"
                      >
                        <div className="pay-icon-box">
                          <Icon name="scan" size={18} />
                        </div>
                        <strong>Pay Online</strong>
                      </button>

                      <button
                        type="button"
                        className={`payment-option-card ${paymentMode === 'offline' ? 'selected' : ''}`}
                        onClick={() => setPaymentMode('offline')}
                        aria-pressed={paymentMode === 'offline'}
                        aria-label="Pay Offline"
                      >
                        <div className="pay-icon-box">
                          <Icon name="cash" size={18} />
                        </div>
                        <strong>Pay Offline</strong>
                      </button>
                    </div>
                  </div>

                  {paymentMode === 'offline' && (
                    <div className="desk-pay-notice-box">
                      <span className="desk-notice-icon">ℹ️</span>
                      <div className="desk-notice-content">
                        <strong>Reception Payment Notice:</strong>
                        <p>Please pay <b>₹299</b> in cash or counter UPI directly at the <b>2nd Floor reception desk, Vijaya Arcade</b> when you arrive. Your entry pass token will be generated instantly.</p>
                      </div>
                    </div>
                  )}

                  <button type="submit" className="button daypass-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Processing Pass...'
                    ) : paymentMode === 'online' ? (
                      <>Proceed to UPI QR Payment (₹299) <Icon name="scan" size={18} /></>
                    ) : (
                      <>Generate Desk Pass & Pay at Reception <Icon name="arrow" size={18} /></>
                    )}
                  </button>
                  <small className="form-secure-note">
                    🔒 Official Aura X Pass • Full 16-Hour Gym Floor Access on 2nd Floor, Vijaya Arcade.
                  </small>
                </form>
              </div>
            )}

            {/* Step 2: Pay Online QR Code Presentation */}
            {bookingStep === 'qr_pay' && (
              <div className="daypass-qr-payment-card">
                <div className="qr-header">
                  <p className="eyebrow yellow">Step 2: Scan & Pay</p>
                  <h2>Aura X Official Payment QR</h2>
                  <div className="qr-summary-pill">
                    <span>Athlete: <b>{guestName.trim() || 'Lifter'}</b></span>
                    <span>•</span>
                    <span>Phone: <b>+91 {guestPhone}</b></span>
                    <span>•</span>
                    <span>Date: <b>{visitDate}</b></span>
                    <span>•</span>
                    <span>Amount: <b>₹299 Only</b></span>
                  </div>
                </div>

                <div className="qr-display-container">
                  <div className="qr-image-frame">
                    <img
                      src="/images/payment_qr/qr.png"
                      alt="Aura X Official UPI Payment QR Code"
                      className="official-qr-image"
                    />
                  </div>
                  <p className="scanner-instruct">
                    Scan with <strong>Google Pay, PhonePe, Paytm, BHIM, or CRED</strong>
                  </p>
                </div>

                {/* Official Gym UPI ID Bar with 1-Tap Copy */}
                <div className="modal-upi-bar">
                  <div className="upi-details">
                    <small>OFFICIAL GYM UPI ID</small>
                    <code>{GYM_UPI.id}</code>
                  </div>
                  <button
                    type="button"
                    className="upi-copy-action"
                    onClick={handleCopyUpi}
                  >
                    {copiedUpi ? (
                      <>
                        <Icon name="check" size={14} /> Copied!
                      </>
                    ) : (
                      <>
                        <Icon name="copy" size={14} /> Copy ID
                      </>
                    )}
                  </button>
                </div>

                {/* Mobile 1-Tap UPI Intent Options */}
                <div className="modal-mobile-intent">
                  <small className="intent-heading">OR TAP TO PAY DIRECTLY (MOBILE ONLY):</small>
                  <div className="intent-buttons-row">
                    <a href={upiIntentUrl} className="intent-pill gpay">
                      ⚡ Google Pay
                    </a>
                    <a href={upiIntentUrl} className="intent-pill phonepe">
                      ⚡ PhonePe
                    </a>
                    <a href={upiIntentUrl} className="intent-pill paytm">
                      ⚡ Paytm / UPI
                    </a>
                  </div>
                </div>

                {/* UTR / Transaction Reference Input */}
                <div className="modal-utr-group">
                  <label>
                    <span>UPI Reference / UTR Number (From Payment Screen)</span>
                    <input
                      type="text"
                      placeholder="e.g. 429185739182 (12-digit UTR)"
                      value={utrNumber}
                      onChange={(e) => setUtrNumber(e.target.value)}
                    />
                  </label>
                  <small className="utr-help">
                    💡 Front desk verifies this reference number at 2nd Floor reception for instant entry.
                  </small>
                </div>

                <div className="qr-action-buttons">
                  <button
                    type="button"
                    className="button daypass-submit-btn"
                    disabled={isSubmitting}
                    onClick={() => completeReservation('online', utrNumber)}
                  >
                    {isSubmitting ? 'Verifying & Generating Pass...' : '✓ I Have Paid ₹299 — Generate Pass'}
                  </button>
                  <button
                    type="button"
                    className="daypass-back-edit-btn"
                    onClick={() => setBookingStep('form')}
                  >
                    ← Change Details or Payment Mode
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Revealed Digital Token Ticket - ONLY revealed after online pay or pay at desk */}
            {bookingStep === 'ticket' && passData && (
              <div className="daypass-ticket-revealed-wrap">
                <div className="ticket-reveal-header">
                  <div className="reveal-badge-pill">
                    <Icon name="check" size={16} /> PASS RESERVATION CONFIRMED
                  </div>
                  <h2>Your Aura X Day Pass Is Ready</h2>
                  <p>Present this ticket or pass token at the 2nd Floor reception desk on your workout date.</p>
                </div>

                <div className="daypass-ticket-preview">
                  <div className="ticket-card revealed ticket-active">
                    <div className="ticket-header">
                      <div className="ticket-logo">
                        <img src="/images/logo/aurax-emblem-transparent.png" alt="Aura X" />
                        <span>AURA X FITNESS</span>
                      </div>
                      <span className={`ticket-badge ${isOnlinePaid ? 'badge-paid' : 'badge-reserved'}`}>
                        {isOnlinePaid ? '● VERIFIED & PAID' : '● PAY AT DESK'}
                      </span>
                    </div>

                    <div className="ticket-body">
                      <div className="ticket-info-row">
                        <div>
                          <small>GUEST ATHLETE</small>
                          <b>{passData.name || 'GUEST LIFTER'}</b>
                        </div>
                        <div>
                          <small>PASS FEE</small>
                          <b className="ticket-price">₹299 ONLY</b>
                        </div>
                      </div>

                      <div className="ticket-info-row">
                        <div>
                          <small>DATE OF VISIT</small>
                          <b>{passData.date || 'TODAY'}</b>
                        </div>
                        <div>
                          <small>PRIVILEGE</small>
                          <b>ALL GYM ZONES</b>
                        </div>
                      </div>

                      <div className="ticket-meta-row">
                        <div className="token-text-col">
                          <small>PASS TOKEN</small>
                          <code>{passData.token}</code>
                        </div>
                        <button
                          type="button"
                          className="ticket-copy-btn"
                          onClick={handleCopyToken}
                          title="Copy Pass Token"
                        >
                          {copiedToken ? (
                            <>
                              <Icon name="check" size={13} /> Copied!
                            </>
                          ) : (
                            <>
                              <Icon name="copy" size={13} /> Copy
                            </>
                          )}
                        </button>
                      </div>

                      <div className="ticket-status-row">
                        <small>STATUS & MODE</small>
                        <div className={`ticket-status-pill ${isOnlinePaid ? 'status-green' : 'status-amber'}`}>
                          {isOnlinePaid ? (
                            <>🟢 {passData?.utr && passData.utr !== 'Direct UPI' ? `PAID • UTR: ${passData.utr}` : 'ONLINE UPI • PAID ₹299'}</>
                          ) : (
                            <>🟡 CASH RESERVED • PAY ₹299 AT COUNTER</>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="ticket-tear-line">
                      <span className="tear-dot left" />
                      <span className="tear-dash" />
                      <span className="tear-dot right" />
                    </div>

                    <div className="ticket-footer">
                      <div className="ticket-qr-block">
                        <img src={ticketEntryQr} alt="Pass Entry QR" className="ticket-qr-img" />
                        <div className="ticket-qr-meta">
                          <span className="qr-title">AURA X CHECK-IN</span>
                          <span className="qr-sub">Scan at 2nd Floor Reception</span>
                          <span className="ticket-address">Vijaya Arcade, Lalbagh Main Rd</span>
                        </div>
                      </div>

                      {/* Quick Action Toolbar */}
                      <div className="ticket-actions-bar">
                        <button
                          type="button"
                          className="ticket-action-btn wa"
                          onClick={handleWhatsAppBooking}
                          title="Send Pass details to Aura X WhatsApp"
                        >
                          <Icon name="whatsapp" size={15} /> WhatsApp Desk
                        </button>
                        <a
                          href={CONTACT.maps}
                          target="_blank"
                          rel="noreferrer"
                          className="ticket-action-btn maps"
                          title="Open Google Maps Directions"
                        >
                          <Icon name="pin" size={15} /> Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ticket-bottom-actions">
                  <button
                    type="button"
                    className="ticket-reset-btn"
                    onClick={handleResetPass}
                  >
                    + Book Another Day Pass
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Guidelines Checklist */}
      <section className="daypass-guidelines">
        <div className="daypass-container">
          <div className="guidelines-card">
            <h3>Quick Rules & Check-In Checklist</h3>
            <div className="guidelines-grid">
              <div className="guide-item">
                <strong>👟 Proper Athletic Footwear</strong>
                <p>Clean indoor gym sneakers are required on the training floor for hygiene and equipment care.</p>
              </div>
              <div className="guide-item">
                <strong>⏰ Operating Hours</strong>
                <p>Open Monday through Sunday from 6:00 AM to 10:00 PM. Arrive whenever fits your schedule.</p>
              </div>
              <div className="guide-item">
                <strong>📍 Front Desk Verification</strong>
                <p>Show your name or WhatsApp confirmation to reception on 2nd Floor, Vijaya Arcade.</p>
              </div>
              <div className="guide-item">
                <strong>💳 Flexible Payment</strong>
                <p>Pay ₹299 via Google Pay, PhonePe, Paytm, card, or cash right at the counter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day Pass Footer */}
      <footer className="daypass-footer">
        <div className="daypass-container daypass-footer-inner">
          <div className="daypass-footer-left">
            <img src="/images/logo/aurax-full-transparent.png" alt="Aura X Fitness" className="footer-mini-logo" />
            <p>© {new Date().getFullYear()} AURA X FITNESS • Lalbagh Main Road, Bengaluru. Built for the bold.</p>
          </div>
          <a href="/" target="_blank" rel="noopener noreferrer" className="button button-small">
            Visit Main Gym Website ↗
          </a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      const h = window.location.hash.toLowerCase();
      if (p === '/day-pass' || h === '#day-pass' || p.includes('day-pass')) {
        return 'day-pass';
      }
    }
    return 'home';
  });

  const navigate = (view) => {
    if (view === 'day-pass') {
      window.history.pushState(null, '', '/day-pass');
      setCurrentView('day-pass');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', '/');
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.toLowerCase();
      const h = window.location.hash.toLowerCase();
      if (p === '/day-pass' || h === '#day-pass' || p.includes('day-pass')) {
        setCurrentView('day-pass');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  if (currentView === 'day-pass') {
    return (
      <div className="app-root">
        {/* Issue #15 — WhatsApp FAB removed from day-pass; it already lives inside the ticket action bar */}
        <DayPassPage onBack={() => navigate('home')} />
      </div>
    );
  }

  return (
    <div className="app-root">
      <Nav onNavigate={navigate} />
      <main id="main-content">
        <Hero onNavigate={navigate} />
        <About />
        <HeritageBanner />
        <Membership onNavigate={navigate} />
        <Teams />
        <Facility />
        <RecoveryComingSoon />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand-section">
            <a className="footer-logo-wrap" href="#home" aria-label="Aura X Fitness Home">
              <img
                src="/images/logo/aurax-full-transparent.png"
                alt="AURA X FITNESS"
                className="footer-logo-img"
                loading="lazy"
                width="160"
                height="122"
              />
            </a>
            <p className="footer-brand-desc">
              Bengaluru’s premier high-performance training ground. Engineered for serious physical transformation with commercial-grade strength biomechanics on Lalbagh Main Road.
            </p>
            <div className="footer-facility-pill">
              <img src="/images/logo/aurax-emblem-transparent.png" alt="" className="footer-pill-icon" aria-hidden="true" />
              <span>OFFICIAL ATHLETIC CLUB • LALBAGH</span>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <span className="footer-col-title">Navigation</span>
              <a href="#about">About Standard</a>
              <a href="#heritage">Wall Heritage</a>
              <a href="#membership">Memberships</a>
              <a
                href="/day-pass"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-btn"
              >
                One Day Pass (₹299)
              </a>
              <a href="#teams">Coaches</a>
              <a href="#facility">Floor Zones</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Connect</span>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp Concierge</a>
              <a href={CONTACT.maps} target="_blank" rel="noreferrer">Google Maps</a>
              <a href={`tel:${CONTACT.phones[0].replace(/\s+/g, '')}`}>Phone Support</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} AURA X FITNESS. Built for the bold. All rights reserved.</p>
            <a href="#home" className="back-to-top">
              Back to top ↑
            </a>
          </div>
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
