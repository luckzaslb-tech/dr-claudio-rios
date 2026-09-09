const { useEffect, useRef, useState } = React;
const { createRoot } = ReactDOM;
const SvgIcon = ({ children, size = 24, strokeWidth = 2, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>
);
const ArrowRight = (p) => <SvgIcon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></SvgIcon>;
const ArrowDownRight = (p) => <SvgIcon {...p}><path d="M7 7h10v10M7 17 17 7"/></SvgIcon>;
const ChevronRight = (p) => <SvgIcon {...p}><path d="m9 18 6-6-6-6"/></SvgIcon>;
const Check = (p) => <SvgIcon {...p}><path d="m5 12 4 4L19 6"/></SvgIcon>;
const Menu = (p) => <SvgIcon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></SvgIcon>;
const X = (p) => <SvgIcon {...p}><path d="m6 6 12 12M18 6 6 18"/></SvgIcon>;
const Activity = (p) => <SvgIcon {...p}><path d="M3 12h4l2-7 4 14 2-7h6"/></SvgIcon>;
const Bone = (p) => <SvgIcon {...p}><path d="M5 8a3 3 0 1 1 3-3l8 8a3 3 0 1 1 3 3 3 3 0 1 1-3 3L8 11a3 3 0 1 1-3-3Z"/></SvgIcon>;
const Sparkles = (p) => <SvgIcon {...p}><path d="m12 3-1.2 3.3L7.5 7.5l3.3 1.2L12 12l1.2-3.3 3.3-1.2-3.3-1.2L12 3ZM5 14l-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14ZM18 13l-.8 2.2-2.2.8 2.2.8L18 19l.8-2.2L21 16l-2.2-.8L18 13Z"/></SvgIcon>;
const Instagram = (p) => <SvgIcon {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></SvgIcon>;
const MapPin = (p) => <SvgIcon {...p}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></SvgIcon>;
const MessageCircle = (p) => <SvgIcon {...p}><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.7-4.6A8.5 8.5 0 1 1 21 11.5Z"/></SvgIcon>;
const Home = (p) => <SvgIcon {...p}><path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/></SvgIcon>;
const UserRound = (p) => <SvgIcon {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></SvgIcon>;
const Phone = (p) => <SvgIcon {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></SvgIcon>;
const Quote = (p) => <SvgIcon {...p}><path d="M3 21c3 0 7-1 7-8V5c0-1.2-.8-2-2-2H4c-1.2 0-2 .8-2 2v5c0 1.2.8 2 2 2h3c0 4-1 6-4 7v2ZM14 21c3 0 7-1 7-8V5c0-1.2-.8-2-2-2h-4c-1.2 0-2 .8-2 2v5c0 1.2.8 2 2 2h3c0 4-1 6-4 7v2Z"/></SvgIcon>;

const WHATSAPP = 'https://wa.me/5521988894369?text=Ol%C3%A1%2C%20Dr.%20Cl%C3%A1udio!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';
const MAPS = 'https://www.google.com/maps/search/?api=1&query=R.%20Rui%20Mafra%2C%2073%20-%20Vila%20Valqueire%2C%20Rio%20de%20Janeiro';

const specialties = [
  { title: 'Quiropraxia', text: 'Ajustes articulares direcionados para recuperar mobilidade e aliviar sobrecargas.', icon: Bone, code: '01' },
  { title: 'Liberação miofascial', text: 'Técnicas manuais para reduzir tensões e devolver liberdade ao movimento.', icon: Activity, code: '02' },
  { title: 'Dry needling', text: 'Abordagem precisa de pontos de tensão muscular dentro de um plano individual.', icon: Sparkles, code: '03' },
  { title: 'Crochetagem', text: 'Mobilização instrumental para tratar aderências e restrições dos tecidos.', icon: ChevronRight, code: '04' },
  { title: 'Ventosaterapia', text: 'Estímulo de circulação local e relaxamento muscular por pressão negativa.', icon: Activity, code: '05' },
  { title: 'Pilates', text: 'Controle, força e consciência corporal aplicados à sua recuperação.', icon: Check, code: '06' },
  { title: 'Shiatsuterapia', text: 'Pressões terapêuticas que promovem relaxamento e equilíbrio corporal.', icon: Sparkles, code: '07' },
];

function MagneticCard({ children, className = '' }) {
  const ref = useRef(null);
  const onMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    ref.current.style.setProperty('--rx', `${-y * 8}deg`);
    ref.current.style.setProperty('--ry', `${x * 10}deg`);
    ref.current.style.setProperty('--mx', `${(x + .5) * 100}%`);
    ref.current.style.setProperty('--my', `${(y + .5) * 100}%`);
  };
  const reset = () => { ref.current.style.setProperty('--rx', '0deg'); ref.current.style.setProperty('--ry', '0deg'); };
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={`magnetic-card ${className}`}>{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [currentSection, setCurrentSection] = useState('inicio');
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const tryPlay = () => vid.play().catch(() => {});
    tryPlay();
    // iOS Safari requires a user gesture; retry on first interaction
    const onInteraction = () => { tryPlay(); document.removeEventListener('touchstart', onInteraction); document.removeEventListener('click', onInteraction); };
    document.addEventListener('touchstart', onInteraction, { once: true, passive: true });
    document.addEventListener('click', onInteraction, { once: true });
    return () => { document.removeEventListener('touchstart', onInteraction); document.removeEventListener('click', onInteraction); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible'));
    }, { threshold: .14 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setCurrentSection(visible.target.id);
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, .25, .5] });
    ['inicio', 'especialidades', 'sobre', 'localizacao'].forEach(id => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
    return () => sectionObserver.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="nav-wrap">
        <a href="#inicio" className="brand" aria-label="Dr. Cláudio Rios — início">
          <img className="brand-mark" src="/public/media/logo-mark.svg" alt="" />
          <span><strong>Dr. Cláudio Rios</strong><small>Fisioterapia & Quiropraxia</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navegação principal">
          <a href="#especialidades" onClick={() => setMenuOpen(false)}>Especialidades</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#localizacao" onClick={() => setMenuOpen(false)}>Localização</a>
          <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer">Agendar avaliação <ArrowRight size={16}/></a>
        </nav>
        <button className="menu-btn" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline preload="auto" poster="/public/media/hero-poster.avif">
            <source src="/public/media/hero-therapy.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-grain" />
          <div className="hero-content">
            <div className="eyebrow"><span/> Cuidado individual • Vila Valqueire, RJ</div>
            <h1>Seu corpo foi feito<br/>para <em>se mover.</em></h1>
            <p>Fisioterapia e quiropraxia com escuta, precisão e técnicas integradas para você retomar sua rotina com confiança.</p>
            <div className="hero-actions">
              <a className="button button-gold" href={WHATSAPP} target="_blank" rel="noreferrer">Agendar avaliação <ArrowRight size={18}/></a>
              <a className="button button-ghost" href="#especialidades">Conhecer tratamentos <ArrowDownRight size={18}/></a>
            </div>
          </div>
          <div className="hero-proof">
            <div className="proof-score"><strong>5,0</strong><span>★★★★★</span><small>Avaliações Google</small></div>
            <div className="proof-line" />
            <p>Atendimento personalizado e objetivo para a sua recuperação funcional.</p>
          </div>
          <div className="scroll-cue"><span>Role para descobrir</span><i/></div>
        </section>

        <section className="intro section-pad">
          <div className="orbital" aria-hidden="true"><div className="orbital-core"/><i/><i/><i/></div>
          <div className="intro-copy reveal">
            <span className="section-kicker">Movimento é liberdade</span>
            <h2>Tratar a origem.<br/><span>Restaurar o equilíbrio.</span></h2>
          </div>
          <p className="intro-text reveal">Cada corpo conta uma história diferente. Por isso, a avaliação orienta uma combinação personalizada de técnicas — com clareza em cada etapa e atenção ao que você sente.</p>
        </section>

        <section className="specialties section-pad" id="especialidades">
          <div className="section-head reveal">
            <div><span className="section-kicker light">Especialidades</span><h2>Um cuidado que se<br/>adapta a você.</h2></div>
            <p>Toque nos cards para explorar as abordagens que podem compor o seu plano terapêutico.</p>
          </div>
          <div className="specialty-layout">
            <div className="specialty-tabs" role="tablist" aria-label="Especialidades">
              {specialties.map((item, index) => (
                <button key={item.title} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
                  <span>{item.code}</span>{item.title}<ArrowRight size={18}/>
                </button>
              ))}
            </div>
            <MagneticCard className="specialty-feature">
              <div className="feature-glow"/>
              <span className="feature-number">{specialties[active].code}</span>
              {React.createElement(specialties[active].icon, { size: 46, strokeWidth: 1.2 })}
              <div><h3>{specialties[active].title}</h3><p>{specialties[active].text}</p></div>
              <span className="feature-label">Abordagem integrada</span>
            </MagneticCard>
          </div>
        </section>

        <section className="about section-pad" id="sobre">
          <div className="about-visual reveal">
            <div className="image-frame"><img src="/public/media/dr-claudio-atendimento.webp" alt="Dr. Cláudio Rios durante atendimento fisioterapêutico" /></div>
            <div className="floating-card"><img src="/public/media/claudio-profile.jpg" alt="Retrato do Dr. Cláudio Rios"/><span><strong>Cláudio Rios</strong><small>Fisioterapeuta</small></span><Check size={18}/></div>
            <span className="vertical-label">Cuidado • Técnica • Presença</span>
          </div>
          <div className="about-copy reveal">
            <span className="section-kicker">Sobre o profissional</span>
            <h2>Olhar clínico.<br/>Cuidado <em>humano.</em></h2>
            <p className="lead">“A recuperação começa quando entendemos o corpo como um todo — não apenas o ponto da dor.”</p>
            <p>Dr. Cláudio Rios é fisioterapeuta com formação complementar em técnicas manuais e funcionais. Seu atendimento combina avaliação criteriosa, objetivos claros e acompanhamento próximo para criar um caminho de recuperação coerente com a rotina de cada paciente.</p>
            <ul>
              <li><Check size={17}/> Avaliação individual e plano personalizado</li>
              <li><Check size={17}/> Técnicas integradas no mesmo atendimento</li>
              <li><Check size={17}/> Foco em mobilidade e recuperação funcional</li>
            </ul>
            <a className="text-link" href="https://www.instagram.com/fisioclaudiorios/" target="_blank" rel="noreferrer"><Instagram size={18}/> Acompanhar no Instagram <ArrowRight size={17}/></a>
          </div>
        </section>

        <section className="journey section-pad">
          <div className="section-head dark reveal">
            <div><span className="section-kicker">Sua jornada</span><h2>Da avaliação<br/>ao movimento.</h2></div>
            <p>Um processo transparente, construído com você.</p>
          </div>
          <div className="steps">
            {[
              ['01','Escuta e avaliação','Entendimento do seu histórico, rotina, desconfortos e objetivos.'],
              ['02','Estratégia terapêutica','Seleção das técnicas mais adequadas para o seu momento.'],
              ['03','Evolução acompanhada','Reavaliação contínua e orientações para manter os resultados.']
            ].map((step, i) => <article className="step reveal" key={step[0]} style={{'--delay': `${i * 90}ms`}}><span>{step[0]}</span><div className="step-dot"/><h3>{step[1]}</h3><p>{step[2]}</p></article>)}
          </div>
        </section>

        <section className="reviews section-pad">
          <div className="review-label reveal"><span className="section-kicker">Experiências reais</span><h2>Confiança que<br/>se sente.</h2><div className="google-score"><strong>5,0</strong><span>★★★★★</span><small>no Google</small></div></div>
          <div className="review-cards">
            <article className="review-card reveal"><Quote/><p>“Profissional nota mil.”</p><footer><span>MC</span><div><strong>Monique Caldeira</strong><small>Avaliação no Google</small></div></footer></article>
            <article className="review-card offset reveal"><Quote/><p>“Fui muito bem atendido, ótimo profissional.”</p><footer><span>IS</span><div><strong>Ivo Soares</strong><small>Avaliação no Google</small></div></footer></article>
          </div>
        </section>

        <section className="location" id="localizacao">
          <iframe title="Mapa da clínica em Vila Valqueire" src="https://www.google.com/maps?q=R.%20Rui%20Mafra%2C%2073%20Vila%20Valqueire%20Rio%20de%20Janeiro&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="location-card reveal">
            <span className="section-kicker light">Onde estamos</span>
            <h2>Vila Valqueire,<br/>Rio de Janeiro.</h2>
            <div className="address"><MapPin/><p><strong>R. Rui Mafra, 73</strong><br/>Vila Valqueire — RJ<br/>CEP 21330-350</p></div>
            <a className="button button-gold" href={MAPS} target="_blank" rel="noreferrer">Como chegar <ArrowRight size={18}/></a>
          </div>
        </section>

        <section className="final-cta section-pad">
          <div className="cta-orbit" aria-hidden="true"><i/><i/><span>CR</span></div>
          <span className="section-kicker">Dê o primeiro passo</span>
          <h2>Volte a se mover<br/>com confiança.</h2>
          <p>Agende sua avaliação e converse diretamente com o Dr. Cláudio.</p>
          <a className="button button-dark" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Agendar pelo WhatsApp</a>
        </section>
      </main>

      <footer className="footer">
        <div className="brand footer-brand"><img className="brand-mark" src="/public/media/logo-mark.svg" alt=""/><span><strong>Dr. Cláudio Rios</strong><small>Fisioterapia & Quiropraxia</small></span></div>
        <p>Atendimento em Vila Valqueire, Rio de Janeiro.</p>
        <div><a href="tel:+5521988894369"><Phone size={17}/> (21) 98889-4369</a><a href="https://www.instagram.com/fisioclaudiorios/" target="_blank" rel="noreferrer"><Instagram size={17}/> @fisioclaudiorios</a></div>
        <small>© {new Date().getFullYear()} Dr. Cláudio Rios. As informações deste site não substituem avaliação profissional.</small>
      </footer>

      <a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp"><MessageCircle/><span>Agendar</span></a>
      <nav className="mobile-pill" aria-label="Navegação rápida">
        <a className={currentSection === 'inicio' ? 'is-current' : ''} aria-current={currentSection === 'inicio' ? 'page' : undefined} href="#inicio"><Home size={20}/><span>Início</span></a>
        <a className={currentSection === 'especialidades' ? 'is-current' : ''} aria-current={currentSection === 'especialidades' ? 'page' : undefined} href="#especialidades"><Activity size={20}/><span>Tratamentos</span></a>
        <a className="pill-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Agendar avaliação pelo WhatsApp"><i><MessageCircle size={25}/></i><span>WhatsApp</span></a>
        <a className={currentSection === 'sobre' ? 'is-current' : ''} aria-current={currentSection === 'sobre' ? 'page' : undefined} href="#sobre"><UserRound size={20}/><span>Sobre</span></a>
        <a className={currentSection === 'localizacao' ? 'is-current' : ''} aria-current={currentSection === 'localizacao' ? 'page' : undefined} href="#localizacao"><MapPin size={20}/><span>Local</span></a>
      </nav>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
