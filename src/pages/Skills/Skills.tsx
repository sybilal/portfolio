import styles from './Skills.module.scss';
import GlassCard from '../../components/GlassCard';
import TechChip from '../../components/TechChip';
import SectionHeader from '../../components/SectionHeader';
import AnimatedSection from '../../components/AnimatedSection';

const categories = [
  { title: 'Languages', chips: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'PHP'] },
  { title: 'Frameworks & Libraries', chips: ['React', 'Next.js', 'TanStack Query', 'Zustand', 'Redux Toolkit', 'Tailwind', 'Angular', 'RxJS'] },
  { title: 'Architecture', chips: ['Micro-frontends', 'Module Federation', 'BFF Pattern'] },
  { title: 'Web Technologies', chips: ['REST APIs', 'GraphQL', 'WebSocket', 'WebRTC', 'SSE', 'HTTP'] },
  { title: 'Testing', chips: ['Jest', 'React Testing Library', 'Playwright', 'Selenium'] },
  { title: 'Tools & CI/CD', chips: ['Vite', 'Webpack', 'Git', 'ESLint', 'Figma', 'npm', 'pnpm', 'GitHub Actions', 'Jenkins', 'GitLab CI'] },
];

const coreSkills = [
  { name: 'React / Next.js', level: 'Expert', pct: 95 },
  { name: 'TypeScript', level: 'Expert', pct: 95 },
  { name: 'Angular / RxJS', level: 'Advanced', pct: 85 },
  { name: 'Module Federation', level: 'Advanced', pct: 85 },
  { name: 'WebRTC / Real-time', level: 'Advanced', pct: 80 },
  { name: 'AWS / Cloud', level: 'Proficient', pct: 75 },
];

export default function Skills() {
  return (
    <div id="skills" className={styles.page}>
      <div className={styles.container}>

        {/* ── Skills Grid ──────────────────────────────────── */}
        <AnimatedSection>
          <section className={styles.section}>
            <SectionHeader
              overline="Technical Arsenal"
              title="Core Technologies"
              subtitle="Comprehensive toolkit for building enterprise-grade frontend architectures."
            />
            <div className={styles.categoryGrid}>
              {categories.map((cat) => (
                <GlassCard key={cat.title} className={styles.categoryCard}>
                  <span className={styles.categoryTitle}>{cat.title}</span>
                  <div className={styles.categoryChips}>
                    {cat.chips.map((c) => <TechChip key={c} label={c} />)}
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* ── Proficiency ──────────────────────────────────── */}
        <AnimatedSection delay={150}>
          <section className={styles.section}>
            <SectionHeader
              overline="Proficiency"
              title="Core Competencies"
            />
            <div className={styles.skillGrid}>
              {coreSkills.map((s) => (
                <GlassCard key={s.name} className={styles.skillCard}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{s.name}</span>
                    <span className={styles.skillLevel}>{s.level}</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className={styles.skillBarFill} style={{ width: `${s.pct}%` }} />
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* ── Education & Certs ────────────────────────────── */}
        <AnimatedSection delay={300}>
          <section className={styles.section}>
            <SectionHeader
              overline="Academic Background"
              title="Education & Certifications"
            />
            <div className={styles.eduGrid}>
              <GlassCard className={styles.eduCard}>
                <h3 className={styles.eduDegree}>Bachelor of Science in Computer Science</h3>
                <span className={styles.eduSchool}>Bahria University — Karachi, Pakistan</span>
                <span className={styles.eduPeriod}>2017</span>
                <p className={styles.eduDesc}>Thesis: Big Data Analytics in Healthcare</p>
              </GlassCard>

              <GlassCard className={styles.eduCard}>
                <h3 className={styles.eduDegree}>AWS Certified Cloud Practitioner</h3>
                <span className={styles.eduSchool}>Amazon Web Services</span>
                <span className={styles.eduPeriod}>CLF-C01 · 2020</span>
                <div className={styles.certBadge}>
                  ✓ Verified Credential
                </div>
              </GlassCard>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div >
  );
}
