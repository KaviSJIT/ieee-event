import React, { useState, useEffect } from 'react';
import ChapterDetails from './components/ChapterDetails';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stats, setStats] = useState({ members: 0, events: 0, workshops: 0 });
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [showFAQ, setShowFAQ] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const chapters = [
    { id: 'computational-intelligence', name: 'IEEE Computational Intelligence Society', icon: '🧠', category: 'ai' },
    { id: 'circuits-systems', name: 'IEEE Circuits and Systems Society', icon: '⚡', category: 'hardware' },
    { id: 'systems-cybernetics', name: 'IEEE Systems, Man, and Cybernetics Society', icon: '🤖', category: 'systems' },
    { id: 'information-theory', name: 'IEEE Information Theory Chapter', icon: '📊', category: 'theory' }
  ];

  const filteredChapters = activeFilter === 'all' ? chapters : chapters.filter(ch => ch.category === activeFilter);

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

  return (
    <div className="App">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-placeholder">IEEE</div>
            IEEE Student Branch
          </div>
          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><button onClick={() => { scrollToSection('home'); setMobileMenuOpen(false); }}>Home</button></li>
            <li><button onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }}>About IEEE</button></li>
            <li><button onClick={() => { scrollToSection('chapters'); setMobileMenuOpen(false); }}>Chapters</button></li>
            <li><button onClick={() => { scrollToSection('activities'); setMobileMenuOpen(false); }}>Activities</button></li>
            <li><button onClick={() => { scrollToSection('benefits'); setMobileMenuOpen(false); }}>Benefits</button></li>
            <li><button onClick={() => { setShowFAQ(true); setMobileMenuOpen(false); }}>FAQ</button></li>
            <li><button onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}>Contact</button></li>
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
          <div className="chapter-filters">
            <button className={activeFilter === 'all' ? 'active' : ''} onClick={() => setActiveFilter('all')}>All</button>
            <button className={activeFilter === 'ai' ? 'active' : ''} onClick={() => setActiveFilter('ai')}>AI/ML</button>
            <button className={activeFilter === 'hardware' ? 'active' : ''} onClick={() => setActiveFilter('hardware')}>Hardware</button>
            <button className={activeFilter === 'systems' ? 'active' : ''} onClick={() => setActiveFilter('systems')}>Systems</button>
            <button className={activeFilter === 'theory' ? 'active' : ''} onClick={() => setActiveFilter('theory')}>Theory</button>
          </div>
          <div className="chapters-grid">
            {filteredChapters.map((chapter) => (
              <div key={chapter.id} className="chapter-card" onClick={() => setSelectedChapter(chapter.id)}>
                <div className="chapter-icon">{chapter.icon}</div>
                <h3>{chapter.name}</h3>
                <p>{chapter.id === 'computational-intelligence' ? 'Advancing biologically and linguistically motivated computational paradigms including neural networks, fuzzy systems, and evolutionary computation.' :
                   chapter.id === 'circuits-systems' ? 'Promoting advancement in theory, analysis, design, and implementation of circuits and systems for electronic applications.' :
                   chapter.id === 'systems-cybernetics' ? 'Focusing on systems involving humans, machines, and organizations through cybernetics and human-machine interaction.' :
                   'Exploring mathematical foundations of information processing, coding theory, cryptography, and data compression.'}</p>
                <button className="learn-more-btn">Learn More</button>
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

      <section id="benefits" className="section">
        <div className="container">
          <h2>IEEE Membership Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Access to IEEE Xplore</h3>
              <p>World's largest technical literature database with over 5 million documents</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌐</div>
              <h3>Global Network</h3>
              <p>Connect with 400,000+ members across 160+ countries worldwide</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Career Development</h3>
              <p>Professional development courses, certifications, and career resources</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📖</div>
              <h3>Publications</h3>
              <p>Access to IEEE magazines, journals, and conference proceedings</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Standards Access</h3>
              <p>Discounted access to IEEE standards and participation in development</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💼</div>
              <h3>Job Board</h3>
              <p>Exclusive access to IEEE job board with technical career opportunities</p>
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
              <div className="social-media">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon">📘</a>
                  <a href="#" className="social-icon">🐦</a>
                  <a href="#" className="social-icon">📷</a>
                  <a href="#" className="social-icon">💼</a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send us a message</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="4" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="newsletter-section">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with the latest IEEE events, workshops, and opportunities</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
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
                <li><button onClick={() => scrollToSection('benefits')}>Benefits</button></li>
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

      {selectedChapter && (
        <ChapterDetails 
          chapter={selectedChapter} 
          onClose={() => setSelectedChapter(null)} 
        />
      )}

      {showFAQ && (
        <div className="modal-overlay" onClick={() => setShowFAQ(false)}>
          <div className="faq-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowFAQ(false)}>×</button>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-content">
              <div className="faq-item">
                <h3>How do I join IEEE?</h3>
                <p>Visit ieee.org and create an account. Student membership is available at discounted rates.</p>
              </div>
              <div className="faq-item">
                <h3>What are the membership benefits?</h3>
                <p>Access to IEEE Xplore, networking opportunities, career resources, and technical publications.</p>
              </div>
              <div className="faq-item">
                <h3>How can I participate in chapter activities?</h3>
                <p>Follow our social media, subscribe to newsletters, and attend our regular meetings and events.</p>
              </div>
              <div className="faq-item">
                <h3>Are there leadership opportunities?</h3>
                <p>Yes! We regularly elect student representatives and welcome volunteers for various roles.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;