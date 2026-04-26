import styles from './Experience.module.scss';
import GlassCard from '../../components/GlassCard';
import TechChip from '../../components/TechChip';
import SectionHeader from '../../components/SectionHeader';
import AnimatedSection from '../../components/AnimatedSection';

const experiences = [
  {
    company: 'Emirates NBD',
    contractor: 'VL Consulting LLC',
    role: 'Senior Software Engineer (React)',
    location: 'Dubai, UAE',
    period: '08/2022 — 01/2026',
    active: true,
    highlights: [
      'Led development of QMS Dashboard and Kiosk application, deployed across 200+ bank branches in UAE, served more than 9 million customers.',
      'Architected and built a WebRTC video-calling micro-frontend using Module Federation and LiveKit.',
      'Integrated video-calling micro-frontend into Teller Dashboard and customer-facing ITM application via Module Federation, enabled reusable real-time video functionality across multiple products.',
      'Developed a React-based AI chatbot for banking agents, integrated OpenAI APIs to deliver LLM-powered responses and built conversational UI with asynchronous and streaming interactions.',
      'Developed Fraud monitoring dashboard using Next.js to detect suspicious credit card sourcing patterns, integrating Server-Sent Events (SSE) and REST APIs for real-time alerts and investigation workflows.',
      'Developed a role-based workflow platform for MRHE housing services, digitized approval processes and implemented HTML Canvas signature capture on iPad to replace paper-based approvals.',
      'Conducted technical interviews and mentored junior engineers, contributed to hiring decisions and code quality standards.',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Module Federation', 'WebRTC', 'LiveKit', 'OpenAI', 'SSE', 'AWS'],
  },
  {
    company: 'Arrow Labs LLC',
    role: 'Frontend Developer (Angular)',
    location: 'Dubai, UAE',
    period: '08/2021 — 07/2022',
    active: false,
    highlights: [
      'Migrated a legacy ASP.NET deskless and field service management platform to Angular 13.',
      'Rebuilt core modules with RxJS and Angular Material within an enterprise application covering workforce management, security operations and field service workflows.',
      'Improved performance and modularity by implementing lazy-loaded modules and service-based architecture, reduced application load time from 7s to 0.5s while migrating 6 core modules to Angular Material.',
    ],
    tags: ['Angular', 'RxJS', 'Angular Material', 'TypeScript'],
  },
  {
    company: 'Strategic Ventures Investments LLC',
    role: 'Frontend Developer (Angular)',
    location: 'Dubai, UAE',
    period: '01/2020 — 08/2021',
    active: false,
    highlights: [
      'Developed web applications and PWAs using Angular and TypeScript, implemented frontend features for a property management ecosystem covering leasing, brokerage and property operations through REST API integrations.',
      'Developed 10+ modules from scratch using reusable components, services and lazy-loaded modules, delivered a Property Management System and Broker Portal deployed on AWS EC2, onboarded 50+ landlords and 5 brokers.',
    ],
    tags: ['Angular', 'TypeScript', 'PWA', 'AWS EC2', 'REST APIs'],
  },
  {
    company: 'TPS Pakistan Pvt. Ltd',
    role: 'SQA Automation Engineer',
    location: 'Karachi, Pakistan',
    period: '05/2018 — 08/2019',
    active: false,
    highlights: [
      'Automated 1,200+ test cases using Selenium, achieved 97% test coverage and improved release stability across multiple product modules.',
    ],
    tags: ['Selenium', 'Test Automation', 'QA'],
  },
  {
    company: 'IGON Solutions',
    role: 'Full Stack Web Developer',
    location: 'Karachi, Pakistan',
    period: '02/2018 — 05/2018',
    active: false,
    highlights: [
      'Developed web applications using PHP, MySQL, JavaScript and Bootstrap, including an SMS marketing portal and a drag-and-drop newsletter builder.',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
  },
];

const Experience = () => {
  return (
    <div id="experience" className={styles.page}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionHeader
            overline="Career Timeline"
            title="Professional Experience"
            subtitle="8+ years of building scalable web applications in banking, enterprise, and property management sectors."
          />
        </AnimatedSection>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 120}>
              <div className={`${styles.timelineItem} ${exp.active ? styles.active : ''}`}>
                <GlassCard>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <span className={styles.role}>{exp.role}</span>
                      {'contractor' in exp && exp.contractor && (
                        <span className={styles.location}> · Contractor: {exp.contractor}</span>
                      )}
                      <div className={styles.location}>{exp.location}</div>
                    </div>
                    <span className={styles.period}>
                      {exp.period}
                      {exp.active && (
                        <span className={styles.currentBadge}>
                          <span className={styles.currentDot} />
                          LATEST
                        </span>
                      )}
                    </span>
                  </div>

                  <div className={styles.highlights}>
                    {exp.highlights.map((h) => (
                      <div key={h} className={styles.highlight}>{h}</div>
                    ))}
                  </div>

                  <div className={styles.tags}>
                    {exp.tags.map((t) => (
                      <TechChip key={t} label={t} variant="indigo" />
                    ))}
                  </div>
                </GlassCard>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
