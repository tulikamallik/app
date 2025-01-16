import React, { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ChevronUp,
  ExternalLink 
} from 'lucide-react';

const Footer = () => {
  const [emailSubscribe, setEmailSubscribe] = useState('');
  const [showTooltip, setShowTooltip] = useState('');
  const [expandedSection, setExpandedSection] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailSubscribe) {
      alert('Thanks for subscribing! Check your email to confirm.');
      setEmailSubscribe('');
    }
  };

  const handleSocialHover = (platform) => {
    setShowTooltip(platform);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const styles = {
    footer: {
      backgroundColor: '#1a1a1a',
      color: '#d1d1d1',
      padding: '48px 0',
      position: 'relative',
      fontFamily: 'Arial, sans-serif'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px'
    },
    section: {
      marginBottom: '24px'
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },
    heading: {
      color: '#ffffff',
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    text: {
      fontSize: '14px',
      lineHeight: '1.6',
      marginBottom: '12px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '12px'
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      backgroundColor: '#333',
      border: 'none',
      borderRadius: '4px',
      color: '#fff',
      marginBottom: '8px'
    },
    button: {
      width: '100%',
      padding: '8px 12px',
      backgroundColor: '#0066cc',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    buttonHover: {
      backgroundColor: '#0052a3'
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    navItem: {
      marginBottom: '8px'
    },
    link: {
      color: '#d1d1d1',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      transition: 'color 0.2s'
    },
    linkHover: {
      color: '#ffffff'
    },
    socialContainer: {
      borderTop: '1px solid #333',
      marginTop: '32px',
      paddingTop: '32px',
      textAlign: 'center'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginBottom: '24px'
    },
    socialIcon: {
      position: 'relative',
      cursor: 'pointer'
    },
    tooltip: {
      position: 'absolute',
      top: '-32px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#333',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      whiteSpace: 'nowrap'
    },
    copyright: {
      fontSize: '14px',
      textAlign: 'center'
    },
    scrollTop: {
      position: 'fixed',
      bottom: '32px',
      right: '32px',
      backgroundColor: '#0066cc',
      color: '#fff',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      border: 'none',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      transition: 'background-color 0.2s'
    },
    toggleIcon: {
      transform: expandedSection ? 'rotate(180deg)' : 'rotate(0)',
      transition: 'transform 0.3s'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* About Section */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <h4 style={styles.heading}>About Us</h4>
              <ChevronUp 
                style={styles.toggleIcon}
                onClick={() => toggleSection('about')}
              />
            </div>
            <div style={{display: expandedSection === 'about' ? 'block' : 'none'}}>
              <p style={styles.text}>
                We are dedicated to providing innovative solutions with a focus on 
                excellence and customer satisfaction. Our commitment to quality 
                drives everything we do.
              </p>
              <div style={styles.contactItem}>
                <MapPin size={16} />
                <span>123 Innovation Street, Tech City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <h4 style={styles.heading}>Quick Links</h4>
              <ChevronUp 
                style={styles.toggleIcon}
                onClick={() => toggleSection('links')}
              />
            </div>
            <nav style={{display: expandedSection === 'links' ? 'block' : 'none'}}>
              <ul style={styles.navList}>
                {['Home', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
                  <li key={item} style={styles.navItem}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      style={styles.link}
                      onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                      onMouseLeave={(e) => e.target.style.color = '#d1d1d1'}
                    >
                      <span>{item}</span>
                      <ExternalLink size={12} style={{marginLeft: '4px'}} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Section */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <h4 style={styles.heading}>Contact Us</h4>
              <ChevronUp 
                style={styles.toggleIcon}
                onClick={() => toggleSection('contact')}
              />
            </div>
            <div style={{display: expandedSection === 'contact' ? 'block' : 'none'}}>
              <div style={styles.contactItem}>
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={styles.contactItem}>
                <Mail size={16} />
                <span>contact@example.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <h4 style={styles.heading}>Newsletter</h4>
              <ChevronUp 
                style={styles.toggleIcon}
                onClick={() => toggleSection('newsletter')}
              />
            </div>
            <div style={{display: expandedSection === 'newsletter' ? 'block' : 'none'}}>
              <p style={styles.text}>Subscribe to our newsletter for updates and exclusive offers.</p>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={emailSubscribe}
                  onChange={(e) => setEmailSubscribe(e.target.value)}
                  placeholder="Enter your email"
                  style={styles.input}
                  required
                />
                <button
                  type="submit"
                  style={styles.button}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0052a3'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#0066cc'}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div style={styles.socialContainer}>
          <div style={styles.socialLinks}>
            {[
              { icon: Facebook, name: 'Facebook', link: 'https://facebook.com' },
              { icon: Twitter, name: 'Twitter', link: 'https://twitter.com' },
              { icon: Instagram, name: 'Instagram', link: 'https://instagram.com' }
            ].map(({ icon: Icon, name, link }) => (
              <a
                key={name}
                href={link}
                style={styles.socialIcon}
                onMouseEnter={() => handleSocialHover(name)}
                onMouseLeave={() => handleSocialHover('')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={24} />
                {showTooltip === name && (
                  <span style={styles.tooltip}>{name}</span>
                )}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div style={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          style={styles.scrollTop}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0052a3'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0066cc'}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;