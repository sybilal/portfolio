import styles from './Home.module.scss';
import GlassCard from '../../components/GlassCard';
import TechChip from '../../components/TechChip';
import SectionHeader from '../../components/SectionHeader';
import AnimatedSection from '../../components/AnimatedSection';

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '9M+', label: 'Customers Served' },
  { value: '200+', label: 'Branches Deployed' },
  { value: '97%', label: 'Test Coverage' },
];

const arsenal = [
  {
    title: 'Languages',
    chips: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'PHP'],
  },
  {
    title: 'Frameworks & Libraries',
    chips: ['React', 'Next.js', 'Angular', 'RxJS', 'TanStack Query', 'Zustand', 'Redux Toolkit', 'Tailwind'],
  },
  {
    title: 'Architecture',
    chips: ['Micro-frontends', 'Module Federation', 'BFF Pattern', 'REST APIs', 'GraphQL', 'WebSocket', 'WebRTC'],
  },
  {
    title: 'Tools & CI/CD',
    chips: ['Vite', 'Webpack', 'Docker', 'Git', 'Jest', 'Playwright', 'GitHub Actions', 'Jenkins', 'AWS'],
  },
];

const projects = [
  {
    meta: 'Emirates NBD · Banking',
    title: 'QMS Dashboard & Kiosk',
    desc: 'Led development of a queue management system deployed across 200+ bank branches in UAE, serving more than 9 million customers.',
    tags: ['React', 'TypeScript', 'Module Federation'],
    icon: '🏦',
  },
  {
    meta: 'Emirates NBD · Real-time',
    title: 'WebRTC Video-Calling Platform',
    desc: 'Architected a video-calling micro-frontend using Module Federation and LiveKit, integrated across Teller Dashboard and ITM applications.',
    tags: ['WebRTC', 'LiveKit', 'Module Federation'],
    icon: '📹',
  },
  {
    meta: 'Emirates NBD · AI',
    title: 'AI Chatbot for Banking Agents',
    desc: 'Built a React-based AI chatbot integrated with OpenAI APIs for LLM-powered responses with streaming conversational UI.',
    tags: ['React', 'OpenAI', 'Streaming'],
    icon: '🤖',
  },
  {
    meta: 'Emirates NBD · FinTech',
    title: 'Fraud Monitoring Dashboard',
    desc: 'Developed Next.js fraud detection dashboard with SSE and REST APIs for real-time alerts and investigation workflows.',
    tags: ['Next.js', 'SSE', 'Real-time'],
    icon: '🛡️',
  },
];

const Home = () => {
  return (
    <div id="intro" className={styles.page}>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGlow2} />

        <p className={styles.heroOverline}>Senior Frontend Engineer · Berlin, Germany</p>

        <h1 className={styles.heroTitle}>
          Syed Bilal Ahmed
          <br />
          <span className={styles.heroHighlight}>
            Building Scalable Web Apps
          </span>
        </h1>

        <p className={styles.heroSubtitle}>
          8+ years building high-availability web applications in banking and
          enterprise environments. Expertise in React, Next.js, Angular,
          TypeScript and micro-frontend architectures using Module Federation.
        </p>

        <div className={styles.heroCta}>
          <a href="https://linkedin.com/in/bilalsyed95/" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Connect on LinkedIn →
          </a>
          <a href="https://github.com/sybilal" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
            Explore GitHub
          </a>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────── */}
      <AnimatedSection>
        <section className={styles.stats}>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <GlassCard key={s.label} className={styles.statCard}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </GlassCard>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── Technical Arsenal ──────────────────────────────── */}
      <AnimatedSection delay={100}>
        <section className={styles.arsenal}>
          <SectionHeader
            overline="Technical Arsenal"
            title="Core Technologies"
            subtitle="The tools and frameworks powering enterprise-grade applications."
          />
          <div className={styles.arsenalGrid}>
            {arsenal.map((cat) => (
              <GlassCard key={cat.title} className={styles.arsenalCategory}>
                <span className={styles.arsenalTitle}>{cat.title}</span>
                <div className={styles.arsenalChips}>
                  {cat.chips.map((c) => (
                    <TechChip key={c} label={c} />
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── Featured Projects ──────────────────────────────── */}
      <AnimatedSection delay={200}>
        <section className={styles.featured}>
          <SectionHeader
            overline="Selected Work"
            title="Featured Projects"
            subtitle="Key systems built during my tenure at Emirates NBD."
          />
          <div className={styles.featuredGrid}>
            {projects.map((p) => (
              <GlassCard key={p.title} noPad interactive className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <span className={styles.projectIcon}>{p.icon}</span>
                </div>
                <div className={styles.projectContent}>
                  <span className={styles.projectMeta}>{p.meta}</span>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <p className={styles.projectDesc}>{p.desc}</p>
                  <div className={styles.projectTags}>
                    {p.tags.map((t) => (
                      <TechChip key={t} label={t} variant="indigo" />
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

export default Home;