import React, { useState } from 'react';
import './ChapterDetails.css';

const ChapterDetails = ({ chapter, onClose }) => {
  const [darkMode, setDarkMode] = useState(false);

  const chapterData = {
    'computational-intelligence': {
      title: 'IEEE Computational Intelligence Society',
      icon: '🧠',
      about: {
        introduction: 'The IEEE Computational Intelligence Society advances the theory, design, and applications of biologically and linguistically motivated computational paradigms. We focus on neural networks, fuzzy systems, and evolutionary computation to solve complex real-world problems.',
        domain: 'Artificial Intelligence, Machine Learning, Neural Networks, Fuzzy Logic, Evolutionary Computing',
        vision: 'To be the leading society in advancing computational intelligence technologies that benefit humanity.',
        mission: 'To foster innovation in computational intelligence through research, education, and collaboration among students and professionals.',
        importance: 'Essential for developing intelligent systems, autonomous vehicles, medical diagnosis, and smart city technologies.'
      },
      representatives: [
        { name: 'Alex Johnson', role: 'Chairperson', image: '/api/placeholder/150/150' },
        { name: 'Sarah Chen', role: 'Vice Chair', image: '/api/placeholder/150/150' },
        { name: 'Mike Rodriguez', role: 'Secretary', image: '/api/placeholder/150/150' },
        { name: 'Emily Davis', role: 'Treasurer', image: '/api/placeholder/150/150' },
        { name: 'David Kim', role: 'Webmaster', image: '/api/placeholder/150/150' }
      ],
      pastActivities: [
        { title: 'Deep Learning Workshop', date: 'Oct 2024', description: 'Hands-on workshop covering neural networks, CNNs, and RNNs with practical implementations.', image: '/api/placeholder/300/200' },
        { title: 'AI Ethics Symposium', date: 'Sep 2024', description: 'Panel discussion on ethical implications of AI in society and responsible AI development.', image: '/api/placeholder/300/200' },
        { title: 'Machine Learning Hackathon', date: 'Aug 2024', description: '48-hour hackathon focusing on real-world ML applications and innovative solutions.', image: '/api/placeholder/300/200' }
      ],
      upcomingActivities: [
        { title: 'Reinforcement Learning Workshop', date: 'Jan 2025', description: 'Advanced workshop on RL algorithms and applications in robotics and gaming.' },
        { title: 'Industry AI Summit', date: 'Feb 2025', description: 'Conference featuring industry leaders discussing AI trends and career opportunities.' },
        { title: 'Neural Network Competition', date: 'Mar 2025', description: 'Student competition to design and implement innovative neural network architectures.' }
      ]
    },
    'circuits-systems': {
      title: 'IEEE Circuits and Systems Society',
      icon: '⚡',
      about: {
        introduction: 'The IEEE Circuits and Systems Society promotes the advancement of the theory, analysis, design, tools, and implementation of circuits and systems. We bridge the gap between theoretical concepts and practical applications in electronic systems.',
        domain: 'Analog/Digital Circuits, VLSI Design, Signal Processing, System Design, Embedded Systems',
        vision: 'To lead innovation in circuits and systems technology for next-generation electronic applications.',
        mission: 'To advance the state of the art in circuits and systems through education, research, and professional development.',
        importance: 'Fundamental to all electronic devices, from smartphones to medical equipment and IoT systems.'
      },
      representatives: [
        { name: 'Jennifer Liu', role: 'Chairperson', image: '/api/placeholder/150/150' },
        { name: 'Robert Taylor', role: 'Vice Chair', image: '/api/placeholder/150/150' },
        { name: 'Maria Garcia', role: 'Secretary', image: '/api/placeholder/150/150' },
        { name: 'James Wilson', role: 'Treasurer', image: '/api/placeholder/150/150' },
        { name: 'Lisa Zhang', role: 'Webmaster', image: '/api/placeholder/150/150' }
      ],
      pastActivities: [
        { title: 'VLSI Design Workshop', date: 'Nov 2024', description: 'Comprehensive workshop on VLSI design methodologies and CAD tools for chip design.', image: '/api/placeholder/300/200' },
        { title: 'Analog Circuit Design Seminar', date: 'Oct 2024', description: 'Expert-led seminar on advanced analog circuit design techniques and applications.', image: '/api/placeholder/300/200' },
        { title: 'PCB Design Competition', date: 'Sep 2024', description: 'Student competition for innovative PCB designs with real-world applications.', image: '/api/placeholder/300/200' }
      ],
      upcomingActivities: [
        { title: 'IoT Circuit Design Workshop', date: 'Jan 2025', description: 'Workshop on designing efficient circuits for IoT applications and low-power systems.' },
        { title: 'Industry Visit to Semiconductor Fab', date: 'Feb 2025', description: 'Educational visit to semiconductor fabrication facility to understand manufacturing processes.' },
        { title: 'Signal Processing Symposium', date: 'Mar 2025', description: 'Technical symposium on latest advances in digital signal processing and applications.' }
      ]
    },
    'systems-cybernetics': {
      title: 'IEEE Systems, Man, and Cybernetics Society',
      icon: '🤖',
      about: {
        introduction: 'The IEEE Systems, Man, and Cybernetics Society focuses on the design and operation of systems involving humans, machines, and organizations. We explore cybernetics, human-machine systems, and complex adaptive systems.',
        domain: 'Human-Machine Interaction, Cybernetics, Systems Engineering, Robotics, Control Systems',
        vision: 'To advance the understanding and application of systems science for human-centered technology.',
        mission: 'To promote interdisciplinary research in systems science, cybernetics, and human-machine interaction.',
        importance: 'Critical for developing autonomous systems, smart manufacturing, and human-robot collaboration.'
      },
      representatives: [
        { name: 'Kevin Park', role: 'Chairperson', image: '/api/placeholder/150/150' },
        { name: 'Amanda Foster', role: 'Vice Chair', image: '/api/placeholder/150/150' },
        { name: 'Carlos Mendez', role: 'Secretary', image: '/api/placeholder/150/150' },
        { name: 'Rachel Green', role: 'Treasurer', image: '/api/placeholder/150/150' },
        { name: 'Tom Anderson', role: 'Webmaster', image: '/api/placeholder/150/150' }
      ],
      pastActivities: [
        { title: 'Robotics Control Workshop', date: 'Nov 2024', description: 'Hands-on workshop on robot control algorithms and autonomous navigation systems.', image: '/api/placeholder/300/200' },
        { title: 'Human-Robot Interaction Seminar', date: 'Oct 2024', description: 'Seminar exploring the latest research in human-robot collaboration and interface design.', image: '/api/placeholder/300/200' },
        { title: 'Systems Engineering Competition', date: 'Sep 2024', description: 'Competition to design complex systems solutions for real-world engineering challenges.', image: '/api/placeholder/300/200' }
      ],
      upcomingActivities: [
        { title: 'Cybernetics and AI Workshop', date: 'Jan 2025', description: 'Workshop exploring the intersection of cybernetics and artificial intelligence.' },
        { title: 'Smart Systems Conference', date: 'Feb 2025', description: 'Conference on intelligent systems and their applications in industry and society.' },
        { title: 'Autonomous Systems Challenge', date: 'Mar 2025', description: 'Challenge to develop autonomous systems for specific real-world applications.' }
      ]
    },
    'information-theory': {
      title: 'IEEE Information Theory Chapter',
      icon: '📊',
      about: {
        introduction: 'The IEEE Information Theory Chapter focuses on the mathematical foundations of information processing, transmission, and storage. We explore coding theory, cryptography, and data compression to advance communication systems.',
        domain: 'Information Theory, Coding Theory, Cryptography, Data Compression, Communication Systems',
        vision: 'To advance the theoretical foundations of information science for next-generation communication systems.',
        mission: 'To promote research and education in information theory and its applications in modern technology.',
        importance: 'Essential for secure communications, data storage, wireless networks, and quantum computing.'
      },
      representatives: [
        { name: 'Sophie Williams', role: 'Chairperson', image: '/api/placeholder/150/150' },
        { name: 'Daniel Brown', role: 'Vice Chair', image: '/api/placeholder/150/150' },
        { name: 'Nina Patel', role: 'Secretary', image: '/api/placeholder/150/150' },
        { name: 'Mark Thompson', role: 'Treasurer', image: '/api/placeholder/150/150' },
        { name: 'Grace Lee', role: 'Webmaster', image: '/api/placeholder/150/150' }
      ],
      pastActivities: [
        { title: 'Cryptography Workshop', date: 'Nov 2024', description: 'Workshop on modern cryptographic techniques and their applications in cybersecurity.', image: '/api/placeholder/300/200' },
        { title: 'Data Compression Seminar', date: 'Oct 2024', description: 'Seminar on advanced data compression algorithms and their practical implementations.', image: '/api/placeholder/300/200' },
        { title: 'Coding Theory Competition', date: 'Sep 2024', description: 'Competition focused on error-correcting codes and their applications in communication.', image: '/api/placeholder/300/200' }
      ],
      upcomingActivities: [
        { title: 'Quantum Information Workshop', date: 'Jan 2025', description: 'Workshop on quantum information theory and quantum computing fundamentals.' },
        { title: '5G Communication Systems Seminar', date: 'Feb 2025', description: 'Seminar on information theory applications in 5G and beyond wireless systems.' },
        { title: 'Information Security Challenge', date: 'Mar 2025', description: 'Challenge to develop secure communication protocols using information theory.' }
      ]
    }
  };

  const currentChapter = chapterData[chapter];

  if (!currentChapter) return null;

  return (
    <div className={`chapter-details ${darkMode ? 'dark' : ''}`}>
      <div className="chapter-header">
        <button className="close-btn" onClick={onClose}>×</button>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="chapter-title">
          <span className="chapter-icon">{currentChapter.icon}</span>
          <h1>{currentChapter.title}</h1>
        </div>
      </div>

      <div className="chapter-content">
        <section className="about-section">
          <h2>About the Chapter</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>{currentChapter.about.introduction}</p>
              <div className="about-details">
                <div className="detail-item">
                  <h4>Domain Focus</h4>
                  <p>{currentChapter.about.domain}</p>
                </div>
                <div className="detail-item">
                  <h4>Vision</h4>
                  <p>{currentChapter.about.vision}</p>
                </div>
                <div className="detail-item">
                  <h4>Mission</h4>
                  <p>{currentChapter.about.mission}</p>
                </div>
                <div className="detail-item">
                  <h4>Importance</h4>
                  <p>{currentChapter.about.importance}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="representatives-section">
          <h2>Student Representatives</h2>
          <div className="representatives-grid">
            {currentChapter.representatives.map((rep, index) => (
              <div key={index} className="rep-card">
                <div className="rep-image">
                  <div className="image-placeholder">👤</div>
                </div>
                <h4>{rep.name}</h4>
                <p>{rep.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="activities-section">
          <h2>Past Activities</h2>
          <div className="activities-grid">
            {currentChapter.pastActivities.map((activity, index) => (
              <div key={index} className="activity-card">
                <div className="activity-image">
                  <div className="image-placeholder">📸</div>
                </div>
                <div className="activity-content">
                  <span className="activity-date">{activity.date}</span>
                  <h4>{activity.title}</h4>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="upcoming-section">
          <h2>Upcoming Activities</h2>
          <div className="timeline">
            {currentChapter.upcomingActivities.map((activity, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{activity.date}</span>
                  <h4>{activity.title}</h4>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="newsletter-section">
          <h2>Stay Updated</h2>
          <div className="newsletter-card">
            <h3>Subscribe to Chapter Newsletter</h3>
            <p>Get the latest updates on events, workshops, and opportunities.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChapterDetails;