import React, { useState, useEffect } from 'react';
import './App.css';
import ChapterPage from './components/ChapterPage';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stats, setStats] = useState({ members: 0, events: 0, workshops: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateStats = () => {
      const targets = { members: 250, events: 45, workshops: 30 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let current = { members: 0, events: 0, workshops: 0 };
      const increment = {
        members: targets.members / steps,
        events: targets.events / steps,
        workshops: targets.workshops / steps
      };
      
      const timer = setInterval(() => {
        current.members = Math.min(current.members + increment.members, targets.members);
        current.events = Math.min(current.events + increment.events, targets.events);
        current.workshops = Math.min(current.workshops + increment.workshops, targets.workshops);
        
        setStats({
          members: Math.floor(current.members),
          events: Math.floor(current.events),
          workshops: Math.floor(current.workshops)
        });
        
        if (current.members >= targets.members) clearInterval(timer);
      }, stepTime);
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });
    
    const statsElement = document.getElementById('statistics');
    if (statsElement) observer.observe(statsElement);
    
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const chapters = [
    {
      id: 'computational-intelligence',
      name: 'IEEE Computational Intelligence Society',
      icon: '🧠',
      description: 'Advancing biologically and linguistically motivated computational paradigms including neural networks, fuzzy systems, and evolutionary computation.',
      domain: 'AI & Machine Learning',
      tagline: 'Intelligent Systems for Tomorrow',
      techAreas: ['Neural Networks', 'Fuzzy Logic', 'Evolutionary Computing', 'Deep Learning', 'Pattern Recognition']
    },
    {
      id: 'circuits-systems',
      name: 'IEEE Circuits and Systems Society',
      icon: '⚡',
      description: 'Promoting advancement in theory, analysis, design, and implementation of circuits and systems for electronic applications.',
      domain: 'Electronics & Hardware',
      tagline: 'Building Tomorrow\'s Electronics',
      techAreas: ['VLSI Design', 'Analog Circuits', 'Digital Systems', 'Signal Processing', 'PCB Design']
    },
    {
      id: 'systems-cybernetics',
      name: 'IEEE Systems, Man, and Cybernetics Society',
      icon: '🤖',
      description: 'Focusing on systems involving humans, machines, and organizations through cybernetics and human-machine interaction.',
      domain: 'Human-Machine Systems',
      tagline: 'Bridging Humans and Technology',
      techAreas: ['Robotics', 'Control Systems', 'Human-Computer Interaction', 'Cybernetics', 'Automation']
    },
    {
      id: 'information-theory',
      name: 'IEEE Information Theory Chapter',
      icon: '📊',
      description: 'Exploring mathematical foundations of information processing, coding theory, cryptography, and data compression.',
      domain: 'Information Science',
      tagline: 'Securing Information Flow',
      techAreas: ['Cryptography', 'Data Compression', 'Error Correction', 'Information Security', 'Coding Theory']
    }
  ];

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

  const handleBackToChapters = () => {
    setSelectedChapter(null);
  };

  if (selectedChapter) {
    return <ChapterPage chapter={selectedChapter} onBack={handleBackToChapters} />;
  }

  return (
    <div className="App">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-placeholder">IEEE</div>
            IEEE Student Branch
          </div>
          <button 
            className="hamburger" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><button onClick={() => { scrollToSection('home'); setIsMobileMenuOpen(false); }}>Home</button></li>
            <li><button onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }}>About IEEE</button></li>
            <li><button onClick={() => { scrollToSection('chapters'); setIsMobileMenuOpen(false); }}>Chapters</button></li>
            <li><button onClick={() => { scrollToSection('activities'); setIsMobileMenuOpen(false); }}>Activities</button></li>
            <li><button onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}>Contact</button></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>IEEE Student Branch</h1>
          <p className="tagline">Advancing Technology for Humanity</p>
          <p className="intro">Join the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => scrollToSection('chapters')}>Explore Chapters</button>
            <button className="cta-button secondary">Join IEEE</button>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>About IEEE</h2>
          <div className="about-content">
            <div className="about-text">
              <p>IEEE is the world's largest technical professional organization dedicated to advancing technology for humanity. Our student branch fosters innovation, learning, and professional development among engineering students.</p>
              <p>We provide opportunities for students to engage with cutting-edge technology, network with professionals, and develop leadership skills through various technical and non-technical activities.</p>
            </div>
            <div className="ieee-activities">
              <h3>Our Activities</h3>
              <ul>
                <li>Technical workshops and seminars</li>
                <li>Industry expert guest lectures</li>
                <li>Research paper presentations</li>
                <li>Hackathons and coding competitions</li>
                <li>Professional development sessions</li>
                <li>Community outreach programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="chapters" className="section alt">
        <div className="container">
          <h2>Our Chapters</h2>
          <div className="chapters-grid">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="chapter-card" onClick={() => handleChapterClick(chapter)}>
                <div className="chapter-icon">{chapter.icon}</div>
                <h3>{chapter.name}</h3>
                <p>{chapter.description}</p>
                <div className="chapter-cta">Learn More →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="activities" className="section">
        <div className="container">
          <h2>Activity Highlights</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <h3>Tech Fest 2024</h3>
              <p>Annual technical festival featuring competitions, exhibitions, and industry showcases.</p>
              <span className="activity-date">March 2024</span>
            </div>
            <div className="activity-card">
              <h3>AI/ML Workshop Series</h3>
              <p>Comprehensive workshop series on artificial intelligence and machine learning fundamentals.</p>
              <span className="activity-date">Ongoing</span>
            </div>
            <div className="activity-card">
              <h3>Industry Connect</h3>
              <p>Regular sessions with industry professionals sharing insights and career guidance.</p>
              <span className="activity-date">Monthly</span>
            </div>
          </div>
        </div>
      </section>

      <section id="statistics" className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{stats.members}+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.events}+</div>
              <div className="stat-label">Events Organized</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.workshops}+</div>
              <div className="stat-label">Workshops Conducted</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>📧 ieee@university.edu</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 Engineering Building, Room 201</p>
              <p>🌐 Follow us on social media for updates</p>
            </div>
            <div className="contact-form">
              <h3>Send us a message</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="4" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>IEEE Student Branch</h4>
              <p>Advancing Technology for Humanity</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('chapters')}>Chapters</button></li>
                <li><button onClick={() => scrollToSection('activities')}>Activities</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <p>Join our community and stay updated with the latest in technology.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 IEEE Student Branch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
