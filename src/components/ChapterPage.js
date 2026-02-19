import React, { useState } from 'react';
import './ChapterPage.css';

const ChapterPage = ({ chapter, onBack }) => {
  const [activeTab, setActiveTab] = useState('about');

  const representatives = [
    { name: 'John Doe', role: 'Chairperson', image: '/api/placeholder/150/150' },
    { name: 'Jane Smith', role: 'Vice Chair', image: '/api/placeholder/150/150' },
    { name: 'Mike Johnson', role: 'Secretary', image: '/api/placeholder/150/150' },
    { name: 'Sarah Wilson', role: 'Treasurer', image: '/api/placeholder/150/150' },
    { name: 'Alex Brown', role: 'Webmaster', image: '/api/placeholder/150/150' }
  ];

  const pastEvents = [
    { title: 'AI Workshop Series', date: '2024-01-15', description: 'Comprehensive workshop on machine learning fundamentals', image: '/api/placeholder/300/200' },
    { title: 'Industry Expert Talk', date: '2024-02-20', description: 'Guest lecture by senior software engineer from Google', image: '/api/placeholder/300/200' },
    { title: 'Hackathon 2024', date: '2024-03-10', description: '48-hour coding competition with industry mentors', image: '/api/placeholder/300/200' }
  ];

  const upcomingEvents = [
    { title: 'Cloud Computing Seminar', date: '2024-04-15', description: 'AWS certification preparation workshop' },
    { title: 'Research Symposium', date: '2024-05-20', description: 'Student research paper presentations' },
    { title: 'Industry Visit', date: '2024-06-10', description: 'Visit to Microsoft Development Center' }
  ];

  return (
    <div className="chapter-page">
      <button className="back-btn" onClick={onBack}>← Back to Chapters</button>
      
      <div className="chapter-header">
        <div className="chapter-icon-large">{chapter.icon}</div>
        <h1>{chapter.name}</h1>
        <p className="chapter-tagline">{chapter.tagline}</p>
      </div>

      <div className="chapter-tabs">
        <button className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>About</button>
        <button className={activeTab === 'team' ? 'active' : ''} onClick={() => setActiveTab('team')}>Team</button>
        <button className={activeTab === 'events' ? 'active' : ''} onClick={() => setActiveTab('events')}>Events</button>
        <button className={activeTab === 'upcoming' ? 'active' : ''} onClick={() => setActiveTab('upcoming')}>Upcoming</button>
      </div>

      <div className="tab-content">
        {activeTab === 'about' && (
          <div className="about-tab">
            <div className="about-grid">
              <div className="about-section">
                <h3>About the Chapter</h3>
                <p>{chapter.description}</p>
                <p>Our chapter focuses on advancing knowledge in {chapter.domain} through hands-on workshops, research initiatives, and industry collaborations.</p>
              </div>
              <div className="about-section">
                <h3>Vision</h3>
                <p>To be the leading student organization in {chapter.domain}, fostering innovation and excellence in technology education.</p>
                <h3>Mission</h3>
                <p>Empowering students with cutting-edge knowledge and practical skills in {chapter.domain} to solve real-world challenges.</p>
              </div>
            </div>
            <div className="tech-areas">
              <h3>Key Technical Areas</h3>
              <div className="tech-tags">
                {chapter.techAreas?.map((area, index) => (
                  <span key={index} className="tech-tag">{area}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="team-tab">
            <h3>Student Representatives</h3>
            <div className="representatives-grid">
              {representatives.map((rep, index) => (
                <div key={index} className="rep-card">
                  <div className="rep-image">
                    <div className="image-placeholder">👤</div>
                  </div>
                  <h4>{rep.name}</h4>
                  <span className="role-badge">{rep.role}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="events-tab">
            <h3>Past Activities</h3>
            <div className="events-grid">
              {pastEvents.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-image">
                    <div className="image-placeholder">📸</div>
                  </div>
                  <div className="event-content">
                    <h4>{event.title}</h4>
                    <span className="event-date">{event.date}</span>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="upcoming-tab">
            <h3>Upcoming Activities</h3>
            <div className="timeline">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{event.title}</h4>
                    <span className="event-date">{event.date}</span>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterPage;