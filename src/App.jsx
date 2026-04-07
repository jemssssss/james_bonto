import { useEffect, useState } from 'react'
import { CursorGlow } from './components/CursorGlow'
import { Navbar } from './components/Navbar'
import { ProjectModal } from './components/ProjectModal'
import { SectionHeading } from './components/SectionHeading'
import { TerminalAbout } from './components/TerminalAbout'
import { useActiveSection } from './hooks/useActiveSection'
import { useReveal } from './hooks/useReveal'

const sectionItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const sectionIds = sectionItems.map((item) => item.id)

const skills = [
  { title: 'Embedded Systems', code: 'EMB', items: ['PIC32', 'Arduino', 'STM32', 'Firmware C++', 'PCB Design'] },
  { title: 'Web Development', code: 'WEB', items: ['React', 'Tailwind CSS', 'Vite', 'Responsive UI', 'Performance Tuning'] },
  { title: 'Tools', code: 'OPS', items: ['MATLAB', 'VS Code', 'KiCad', 'LTspice', 'Git', 'Sony VEGAS Pro'] },
]

const projects = [
  {
    title: 'Can Satellite (CanSat) for Air Quality Monitoring',
    category: 'Embedded Systems',
    description:
      'Primary observatory in monitoring different air quality parameters transmitted to end users in real-time.',
    longDescription:
      'A modular PIC32 platform that ingests sensor data, validates packets locally, and relays telemetry via I2C and UART for dashboard consumption. The system is designed around uptime, fast diagnostics, and maintainable firmware boundaries.',
    stack: ['PIC32', 'I2C', 'UART', 'C++', 'Telemetry'],
    link: '#projects',
    image:
      'linear-gradient(135deg, rgba(19,19,19,0.2), rgba(19,19,19,0.85)), radial-gradient(circle at 30% 30%, rgba(102,253,236,0.55), transparent 30%), linear-gradient(135deg, #15322f, #101010)',
  },
  {
    title: 'UP CAPES Jobfair 2026 Handbook Dashboard',
    category: 'Web Development',
    description:
      "Information interface built for UP Diliman engineering students as their guide for our organization's flagship event.",
    longDescription:
      'A frontend-first job fair portal with an interactive resume, concise guides, and event highlights. Multiple pages and routes were individually designed to fit the needs of the students to aid them in their career-finding journey.',
    stack: ['React', 'Tailwind', 'Vite', 'UX Systems'],
    link: '#projects',
    image:
      'linear-gradient(135deg, rgba(19,19,19,0.12), rgba(19,19,19,0.82)), linear-gradient(90deg, rgba(102,253,236,0.14) 1px, transparent 1px), linear-gradient(rgba(102,253,236,0.14) 1px, transparent 1px), linear-gradient(135deg, #1a2324, #0f0f10)',
  },
  {
    title: 'Precision Amplifier',
    category: 'Analog Electronics',
    description:
      'High frequency power amplifier concept focused on efficiency, signal integrity, and serviceable board layout.',
    longDescription:
      'An analog design exercise utilizing cascaded amplifier designs, balancing stability and power gain. The work combines schematic iteration, component tradeoff review, and enclosure-aware board planning for real deployment constraints.',
    stack: ['Analog', 'PCB', 'Simulating', 'Prototyping'],
    link: '#projects',
    image:
      'linear-gradient(135deg, rgba(19,19,19,0.2), rgba(19,19,19,0.85)), radial-gradient(circle at 70% 20%, rgba(64,224,208,0.38), transparent 24%), linear-gradient(145deg, #2c2c2c, #111111)',
  },
]

const experience = [
  {
    year: '2025 - Present',
    role: 'UP CAPES Web Development Associate',
    summary: "Responsible for the development and maintenance of the CAPES Portal, the organization's main website.",
  },
  {
    year: '2023 - 2025',
    role: 'UP Computer Center Student Assistant',
    summary: 'Assisting of operations of the Diliman Network (DILNET) Helpdesk, which includes troubleshooting computer network cases and client customer service.',
  },
  {
    year: '2020 - 2021',
    role: 'School Publication News and Information Head Editor',
    summary: 'Supervised and led the editing of contents of news and information articles being published.',
  },
]

const education = [
  {
    title: 'B.S. Electronics Engineering',
    meta: 'University of the Philippines - Diliman | 2022 - Present',
    body: 'Focused on analog and digital systems, instrumentation, and signal processing.',
  },
  {
    title: 'Full Stack Certification',
    meta: 'Tech Institute | 2019',
    body: 'Covered modern frontend architecture, component systems, and deployment fundamentals.',
  },
]

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const { activeSection, scrollProgress } = useActiveSection(sectionIds)

  useReveal()

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative overflow-x-hidden">
      <CursorGlow />
      <Navbar items={sectionItems} activeSection={activeSection} scrollProgress={scrollProgress} />

      <main>
        <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-heroGlow pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(102,253,236,0.08),transparent_30%),linear-gradient(180deg,transparent,rgba(19,19,19,0.65))]" />
          <div className="section-shell relative z-10 py-16">
            <div className="reveal max-w-4xl" data-reveal>
              <p className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.34em] text-primary">
                <span className="h-px w-12 bg-primary" />
                Available for new challenges
              </p>
              <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] text-onSurface sm:text-7xl lg:text-[7rem]">
                Laureus James
                <br />
                <span className="text-primaryContainer">U. Bonto</span>
              </h1>
              <p className="section-copy mt-6 text-base leading-8 text-onSurfaceVariant sm:text-xl">
                Electronics Engineering student focused on embedded systems, technical interfaces, and digital products that feel as precise as the hardware behind them.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-primaryContainer px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-onPrimary transition duration-300 ease-expo hover:translate-x-[2px] hover:translate-y-[-2px] hover:bg-primary"
                >
                  View Projects
                </a>
                <a
                  href="./resume.pdf"
                  download
                  className="ghost-border bg-transparent px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-onSurface transition duration-300 ease-expo hover:bg-surfaceHigh"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="reveal mt-16 flex items-center gap-4 text-onSurfaceVariant" data-reveal>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll to explore</span>
              <div className="relative h-12 w-px overflow-hidden bg-outlineVariant/25">
                <div className="absolute inset-x-0 top-0 h-1/2 animate-pulse bg-primary" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-surfaceLow py-24 sm:py-32">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="reveal" data-reveal>
              <SectionHeading
                eyebrow="Terminal Profile"
                title="About"
                accent="Me"
                description="A technical snapshot rendered as code: concise, factual, and built around the way engineering work actually gets done."
              />
            </div>
            <div className="reveal" data-reveal>
              <TerminalAbout />
            </div>
          </div>
        </section>

        <section id="skills" className="bg-surface py-24 sm:py-32">
          <div className="section-shell">
            <div className="reveal" data-reveal>
              <SectionHeading
                eyebrow="Capability Matrix"
                title="Technical"
                accent="Stack"
                description="Focused depth in embedded work, frontend delivery, and the tools that support reliable execution."
              />
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {skills.map((skill) => (
                <article
                  key={skill.title}
                  className="reveal ghost-border bg-surfaceLow p-7 transition duration-300 ease-expo hover:-translate-y-1 hover:border-primary/40"
                  data-reveal
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="font-mono text-sm uppercase tracking-[0.4em] text-primary">{skill.code}</span>
                    <span className="h-px w-12 bg-outlineVariant/30" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">{skill.title}</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="bg-surfaceHigh px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-onSurfaceVariant">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-surfaceLow py-24 sm:py-32">
          <div className="section-shell">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="reveal" data-reveal>
                <SectionHeading
                  eyebrow="Case Studies [03]"
                  title="Selected"
                  accent="Work"
                  description="Three representative builds spanning firmware, interface systems, and electronics design."
                />
              </div>
              <p className="reveal font-mono text-[10px] uppercase tracking-[0.34em] text-onSurfaceVariant" data-reveal>
                Click a project to inspect details
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className={`reveal overflow-hidden bg-surface text-left shadow-obsidian transition duration-500 ease-expo hover:-translate-y-1 ${index === 1 ? 'lg:translate-y-10' : ''}`}
                  data-reveal
                >
                  <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: project.image }} aria-hidden="true" />
                  <div className="p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">{project.category}</p>
                    <h3 className="mt-3 text-2xl font-black uppercase tracking-tight">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-onSurfaceVariant">{project.description}</p>
                    <span className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Explore Project</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-surface py-24 sm:py-32">
          <div className="section-shell">
            <div className="reveal" data-reveal>
              <SectionHeading
                eyebrow="Timeline"
                title="Engineering"
                accent="Journey"
                description="A compact view of progression across embedded delivery, systems thinking, and engineering ownership."
                align="center"
              />
            </div>
            <div className="relative mx-auto mt-16 max-w-5xl">
              <div className="absolute left-4 top-0 h-full w-px bg-outlineVariant/30 md:left-1/2 md:-translate-x-1/2" />
              <div
                className="timeline-progress absolute left-4 top-0 w-px transition-all duration-700 ease-expo md:left-1/2 md:-translate-x-1/2"
                style={{ height: activeSection === 'experience' ? '100%' : '0%' }}
              />
              <div className="space-y-12">
                {experience.map((item, index) => (
                  <article
                    key={item.role}
                    className={`reveal relative grid gap-6 pl-14 md:grid-cols-2 md:pl-0 ${index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
                    data-reveal
                  >
                    <div className={`md:px-10 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">{item.year}</p>
                      <h3 className="mt-3 text-2xl font-black uppercase tracking-tight">{item.role}</h3>
                      <p className="mt-4 text-sm leading-7 text-onSurfaceVariant">{item.summary}</p>
                    </div>
                    <div />
                    <span className="absolute left-4 top-2 h-3 w-3 -translate-x-[5px] bg-primary md:left-1/2 md:-translate-x-1/2" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="bg-surfaceLow py-24 sm:py-32">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal" data-reveal>
              <SectionHeading
                eyebrow="Credentials"
                title="Academic"
                accent="Foundation"
                description="Formal training that supports hardware rigor and software delivery with equal discipline."
              />
            </div>
            <div className="space-y-5">
              {education.map((item, index) => (
                <article key={item.title} className="reveal bg-surface p-6 shadow-obsidian" data-reveal>
                  <div className="flex gap-4">
                    <span className={`w-px shrink-0 ${index === 0 ? 'bg-primary' : 'bg-outlineVariant/40'}`} />
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight">{item.title}</h3>
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">{item.meta}</p>
                      <p className="mt-4 text-sm leading-7 text-onSurfaceVariant">{item.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-surface py-24 sm:py-32">
          <div className="section-shell">
            <div className="reveal" data-reveal>
              <SectionHeading
                eyebrow="Open Channel"
                title="Let's"
                accent="Connect"
                description="Open for collaborations, engineering work, and technical problem-solving across hardware and frontend systems."
                align="center"
              />
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
              <a
                href="mailto:laureus@example.com"
                className="reveal ghost-border flex items-center justify-center gap-3 bg-surfaceHigh px-6 py-6 font-mono text-[11px] font-bold uppercase tracking-[0.24em] transition duration-300 ease-expo hover:border-primary hover:bg-surfaceHighest"
                data-reveal
              >
                <span className="text-primary">[01]</span>
                Email
              </a>
              <a
                href="https://github.com/jemssssss"
                target="_blank"
                rel="noreferrer"
                className="reveal ghost-border flex items-center justify-center gap-3 bg-surfaceHigh px-6 py-6 font-mono text-[11px] font-bold uppercase tracking-[0.24em] transition duration-300 ease-expo hover:border-primary hover:bg-surfaceHighest"
                data-reveal
              >
                <span className="text-primary">[02]</span>
                GitHub Profile
              </a>
            </div>
            <div id="resume" className="reveal mx-auto mt-10 flex max-w-4xl justify-center" data-reveal>
              <a
                href="./resume.pdf"
                download
                className="bg-primaryContainer px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-onPrimary transition duration-300 ease-expo hover:translate-x-[2px] hover:translate-y-[-2px] hover:bg-primary"
              >
                Download Resume PDF
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-outlineVariant/20 bg-surface py-10">
        <div className="section-shell flex flex-col gap-6 text-[10px] uppercase tracking-[0.28em] text-onSurfaceVariant md:flex-row md:items-center md:justify-between">
          <p className="font-mono">© 2026 Laureus James U. Bonto.</p>
          <div className="flex gap-6 font-mono">
            <a href="#hero" className="transition-colors hover:text-primary">Home</a>
            <a href="#projects" className="transition-colors hover:text-primary">Work</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

export default App
