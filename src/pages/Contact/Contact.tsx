import { useState } from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import GlassCard from '../../components/GlassCard';
import SectionHeader from '../../components/SectionHeader';
import styles from './Contact.module.scss';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `mailto:syed.bilalahmed@outlook.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
  };

  return (
    <div
      id="contact"
      className={styles.page}>
      <div className={styles.glow} />
      <div className={styles.container}>
        <AnimatedSection>
          <SectionHeader
            overline="Get In Touch"
            title="Let's Connect"
            subtitle="Open to senior frontend engineering roles, consulting, and contract opportunities in Berlin and remote."
          />
        </AnimatedSection>

        <div className={styles.grid}>
          <AnimatedSection delay={100}>
            <GlassCard>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="c-name">Name</label>
                  <input id="c-name" className={styles.input} type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="c-email">Email</label>
                  <input id="c-email" className={styles.input} type="email" placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="c-subject">Subject</label>
                  <input id="c-subject" className={styles.input} type="text" placeholder="Project Collaboration" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="c-message">Message</label>
                  <textarea id="c-message" className={styles.textarea} placeholder="Tell me about your project or opportunity..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button type="submit" className={styles.submitBtn}>Send Message</button>
              </form>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <div className={styles.infoPanel}>
              <GlassCard className={styles.infoCard}>
                <span className={styles.infoLabel}>Location</span>
                <h3 className={styles.infoValue}>Berlin, Germany</h3>
                <p className={styles.infoDesc}>Chancenkarte Visa · Central European Time (UTC+1)</p>
              </GlassCard>

              <GlassCard className={styles.infoCard}>
                <span className={styles.infoLabel}>Email</span>
                <a href="mailto:syed.bilalahmed@outlook.com" className={styles.infoLink}>
                  syed.bilalahmed@outlook.com →
                </a>
              </GlassCard>

              <GlassCard className={styles.infoCard}>
                <span className={styles.infoLabel}>Phone</span>
                <a href="tel:+491791512029" className={styles.infoLink}>
                  +49 179 151 2029 →
                </a>
              </GlassCard>

              <GlassCard>
                <span className={styles.infoLabel}>Connect</span>
                <div className={styles.socialGrid}>
                  <a href="https://github.com/sybilal" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                    <div className={styles.socialIcon}>
                      <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                    </div>
                    <div className={styles.socialInfo}>
                      <span className={styles.socialName}>GitHub</span>
                      <span className={styles.socialHandle}>sybilal</span>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/bilalsyed95/" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                    <div className={styles.socialIcon}>
                      <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </div>
                    <div className={styles.socialInfo}>
                      <span className={styles.socialName}>LinkedIn</span>
                      <span className={styles.socialHandle}>bilalsyed95</span>
                    </div>
                  </a>
                </div>
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
