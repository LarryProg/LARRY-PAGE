import { useEffect } from "react";
import logoLarry from "@/assets/logo-larry.png";
import fondoLarry from "@/assets/fondo-larry.png";
import coverWanted from "@/assets/cover-takeshi-wanted.jpg";
import coverClose from "@/assets/cover-takeshi-close.jpg";
import coverEnTuVoz from "@/assets/cover-takeshi-entuvoz.jpg";
import coverMeElige from "@/assets/cover-takeshi-meelige.jpg";
import coverPerreo from "@/assets/cover-takeshi-perreo.jpg";
import coverTusModales from "@/assets/cover-tato-tusmodales.jpg";
import coverCnMia from "@/assets/cover-cn-mia.jpg";
import coverCnPorqueSe from "@/assets/cover-cn-porquese.jpg";
import coverCnSeSube from "@/assets/cover-cn-sesube.jpg";
import coverCnVen from "@/assets/cover-cn-ven.jpg";
import coverCnToxica from "@/assets/cover-cn-toxica.jpg";
import coverCnBoliche from "@/assets/cover-cn-boliche.jpg";
import coverCnDentro from "@/assets/cover-cn-dentrodemi.jpg";
import coverCnDivina from "@/assets/cover-cn-divina.jpg";
import coverCnFueMiError from "@/assets/cover-cn-fuemierror.jpg";
import coverCnBuscando from "@/assets/cover-cn-buscandoelmillon.jpg";
import coverCnVerte from "@/assets/cover-cn-verte.jpg";
import coverCnYoPrimero from "@/assets/cover-cn-yoprimero.jpg";
import coverCnYoSe from "@/assets/cover-cn-yose.jpg";
import coverAntoVientre from "@/assets/cover-anto-demivientre.jpg";
import coverPlarLagrimas from "@/assets/cover-plar-lagrimasenpausa.jpg";
import coverRandallsMadrugada from "@/assets/cover-randalls-enlamadrugada.jpg";

const BOOKING_URL = "https://zcal.co/larry/descubrimiento";
const SPOTIFY_PLAYLIST = "https://open.spotify.com/playlist/3qDdrzc1uIyLnEIOPqZpRr";
const SPOTIFY_EMBED = "https://open.spotify.com/embed/playlist/3qDdrzc1uIyLnEIOPqZpRr?utm_source=generator&theme=0";
const VSL_EMBED = "https://player.vimeo.com/video/1186316881?title=0&byline=0&portrait=0";
const BA_EMBED_1 = "https://player.vimeo.com/video/1186317502?title=0&byline=0&portrait=0";
const BA_EMBED_2 = "https://player.vimeo.com/video/1186317529?title=0&byline=0&portrait=0";

const Index = () => {
  useEffect(() => {
    document.title = "LARRY — Productor Musical & Dirección Artística";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Larry — Productor musical. Producción, mezcla y máster con dirección artística. Agendá una llamada de descubrimiento."
    );
    document.head.appendChild(meta);

    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => (e.target as HTMLElement).classList.add("visible"), i * 80);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="larry-root">
      <style>{css}</style>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo" aria-label="Larry">
          <img src={logoLarry} alt="LARRY logo" />
        </a>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#vsl">Video</a>
          <a href="#bonus">Bonus</a>
          <a href="#resultados">Resultados</a>
          <a href="#agendar">Agendar</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <p className="hero-eyebrow">Productor Musical &nbsp;·&nbsp; Dirección Artística</p>
        <h1>
          <span>De cantante</span> con dudas
          <br />
          <span>a artista</span> profesional 🚀
        </h1>
        <p className="hero-sub">
          Trabajo con artistas que quieren <strong>profesionalizar su sonido</strong>,
          definir su identidad y construir una carrera con dirección real.
        </p>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              <span className="ticker-item">+100 Artistas</span>
              <span className="ticker-dot">✦</span>
              <span className="ticker-item">+200 Canciones Producidas</span>
              <span className="ticker-dot">✦</span>
              <span className="ticker-item">10 Años de Experiencia</span>
              <span className="ticker-dot">✦</span>
              <span className="ticker-item">Prod · Mix · Master</span>
              <span className="ticker-dot">✦</span>
              <span className="ticker-item">Dirección Artística</span>
              <span className="ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* VSL */}
      <section id="vsl" className="vsl-section">
        <div className="max-w">
          <p className="section-label reveal">Mirá esto · Recuerda habilitar el audio 🔊</p>
          <h2 className="section-title reveal">
            <span>En este video de</span> 5 MINUTOS <span>te explico</span>
            <br />
            <span>exactamente por qué tu proyecto</span> no despega
            <br />
            <span>y cómo</span> resolverlo.
          </h2>
          <div className="video-wrap reveal">
            <iframe
              src={VSL_EMBED}
              title="Video de presentación de Larry"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="vsl-cta reveal">
            <h3 className="vsl-cta-title">
              <span>Si querés que te ayude a</span> DAR EL PASO<br />
              <span>y tener una carrera</span> profesional,
            </h3>
            <p className="vsl-cta-sub">NOS VEMOS EN LA LLAMADA!</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <span>AGENDAR!</span>
              <span className="arrow">→</span>
            </a>
            <p className="hero-scarcity">Solo sumo POCOS ARTISTAS NUEVOS por mes.</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <div className="max-w">
          <p className="section-label reveal">Lo que hago</p>
          <h2 className="section-title reveal">
            <span>Producción</span>
            <br />
            <span>con</span> propósito
          </h2>
          <div className="services-grid">
            {[
              {
                n: "01",
                i: "🎛️",
                t: "Producción Completa",
                d: "Desde el beat hasta el máster final. Creación, diseño del sonido, grabación, dirección musical, arreglos, mezcla y máster.",
                p: "De la idea al lanzamiento",
              },
              {
                n: "02",
                i: "🎚️",
                t: "Mix & Master",
                d: "Hago que tu canción suene competitiva. Limpieza, balance, profundidad, pegada y emoción. Nivel adecuado para plataformas digitales.",
                p: "Sonido profesional",
              },
              {
                n: "03",
                i: "🥁",
                t: "Beatmaking",
                d: "Instrumentales desde cero adaptados a tu estilo, tu voz y tu visión. Desde trap y reggaetón hasta sonidos más experimentales.",
                p: "+400 type beats",
              },
              {
                n: "04",
                i: "🎯",
                t: "Dirección Artística",
                d: "No estás solo. Te guío en cada paso para que tu proyecto tenga rumbo y coherencia. Identidad actual, sonido competitivo.",
                p: "Acompañamiento real",
              },
            ].map((s) => (
              <div className="service-card reveal" key={s.n}>
                <span className="service-num">{s.n}</span>
                <div className="service-icon">{s.i}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="pill">{s.p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* BONUS */}
      <section id="bonus" className="bonus-section">
        <div className="max-w">
          <div className="bonus-header">
            <div>
              <div className="bonus-badge">⚡ Exclusivo para artistas que trabajan conmigo</div>
              <p className="section-label">Bonus</p>
              <h2 className="section-title reveal">
                <span>Material que</span>
                <br />
                <span>te da</span> ventaja
              </h2>
            </div>
            <p className="bonus-intro">
              Directo al grano. Sin teoría innecesaria. Herramientas reales, prácticas y aplicables desde el primer día.
            </p>
          </div>

          <div className="bonus-grid">
            {[
              {
                label: "Guía práctica Vol.1",
                title: "Lanzamiento\nExitoso",
                desc: "Hacen canciones increíbles... pero cuando llega el momento de defenderlas, están en cero. Eso termina acá.",
                items: [
                  "Cómo subir tu canción de manera profesional",
                  "Plan de Contenido de 21 días para el lanzamiento",
                  "Estrategia en plataformas paso a paso",
                ],
              },
              {
                label: "Tutorial + Plantilla descargable",
                title: "Cómo Escuchar\nUna Mezcla",
                desc: "Esto marca la diferencia fundamental entre un artista amateur y uno profesional. Tu oído tiene que estar a la altura.",
                items: [
                  "Guía completa para profesionalizar tu escucha",
                  "Plantilla descargable lista para usar",
                  "Aplicable desde el día 1",
                ],
              },
              {
                label: "Tutorial + DAW Templates",
                title: "Vocals Top",
                desc: "Muchos saben apretar REC... pero ¿saben realmente grabar? Una grabación mediocre es el error más común.",
                items: [
                  "Todo para grabar con la mejor calidad",
                  "Templates para Studio One, Live, FL, Logic y Cubase",
                  "Soluciones para cada problema que surja",
                ],
              },
              {
                label: "Identidad visual",
                title: "Manual\nde Marca",
                desc: "Tu música merece una imagen a la altura. Definimos tu identidad visual para que seas reconocible al instante.",
                items: [
                  "Logo, paleta y tipografías definidas",
                  "Lineamientos de uso para redes y arte",
                  "Coherencia visual en todo tu proyecto",
                ],
              },
              {
                label: "Caja de herramientas",
                title: "Arsenal\nCreativo",
                desc: "Todo lo que necesitás para ejecutar más rápido y mejor. Recursos, presets y referencias listas para usar.",
                items: [
                  "Presets, samples y plugins recomendados",
                  "Referencias de mezcla y máster",
                  "Workflow probado para acelerar tu proceso",
                ],
              },
            ].map((b) => (
              <div className="bonus-card reveal" key={b.title}>
                <span className="bonus-free">GRATIS</span>
                <p className="bonus-card-label">{b.label}</p>
                <h3>
                  {b.title.split("\n").map((l, i, a) => (
                    <span key={i}>
                      {l}
                      {i < a.length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p>{b.desc}</p>
                <ul className="bonus-list">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bonus-cta-row">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              QUIERO EL BONUS →
            </a>
            <p className="bonus-note">
              Contenido original, exclusivo y sin costo adicional.
              <br />
              Solo valor puro para que sigas creciendo.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TRUST NUMBERS */}
      <section id="confia" style={{ padding: "60px 20px" }}>
        <div className="max-w">
          <div className="trust-grid">
            {[
              { n: "+100", d: "Artistas trabajados" },
              { n: "+200", d: "Canciones producidas" },
              { n: "10", d: "Años de experiencia" },
              { n: "∞", d: "Procesos completos" },
            ].map((t) => (
              <div className="trust-item reveal" key={t.d}>
                <div className="trust-num">{t.n}</div>
                <div className="trust-desc">{t.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SPOTIFY */}
      <section id="playlist" className="spotify-section">
        <div className="max-w">
          <p className="section-label reveal">Escuchá lo que LOGRAMOS</p>
          <h2 className="section-title reveal">
            <span>Mi playlist</span> en Spotify
          </h2>
          <p className="section-sub reveal">
            En esta playlist podés escuchar algunos de mis trabajos publicados.
            Prod, Mix &amp; Master by Larry.
          </p>
          <div className="spotify-wrap reveal">
            <iframe
              src={SPOTIFY_EMBED}
              title="Playlist de Spotify de Larry"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </section>

      {/* RESULTADOS - ANTES Y DESPUÉS */}
      <section id="resultados">
        <div className="max-w">
          <p className="section-label reveal">Resultados reales</p>
          <h2 className="section-title reveal">
            <span>Antes y</span><br />
            después
          </h2>
          <p className="section-sub reveal">
            No se trata solo de sonar bien. Se trata de construir algo que te represente, que sea diferente y que abra
            puertas.
          </p>
          <div className="ba-grid">
            {[BA_EMBED_1, BA_EMBED_2].map((src, i) => (
              <div className="ba-video reveal" key={src}>
                <div className="ba-tag">CASO #{String(i + 1).padStart(2, "0")}</div>
                <div className="video-wrap">
                  <iframe
                    src={src}
                    title={`Antes y después ${i + 1}`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS + PORTADAS POR ARTISTA */}
      <section className="testi-section">
        <div className="max-w">
          <p className="section-label reveal">¿Qué dicen los artistas?</p>
          <h2 className="section-title reveal">
            <span>Sus palabras,</span>
            <br />
            <span>sus</span> resultados
          </h2>
          <p className="section-sub reveal" style={{ marginBottom: 60 }}>
            Escuchalos en sus propias palabras. Artistas reales, procesos reales, resultados reales.
          </p>

          <div className="artists-stack">
            {[
              {
                handle: "@takeshi_take_",
                ig: "https://instagram.com/takeshi_take_",
                videoId: "1186333992",
                covers: [
                  { src: coverWanted, t: "Wanted I & II" },
                  { src: coverClose, t: "Close" },
                  { src: coverEnTuVoz, t: "En Tu Voz" },
                  { src: coverMeElige, t: "Me Elige a Mí" },
                  { src: coverPerreo, t: "Perreo Infiel" },
                ],
              },
              {
                handle: "@cn.ok_",
                ig: "https://instagram.com/cn.ok_",
                videoId: "1186333811",
                covers: [
                  { src: coverCnMia, t: "Mía" },
                  { src: coverCnPorqueSe, t: "Porque Sé" },
                  { src: coverCnSeSube, t: "Se Sube" },
                  { src: coverCnVen, t: "Ven" },
                  { src: coverCnToxica, t: "Tóxica" },
                  { src: coverCnBoliche, t: "Boliche" },
                  { src: coverCnDentro, t: "Dentro de Mí" },
                  { src: coverCnDivina, t: "Divina" },
                  { src: coverCnFueMiError, t: "Fue Mi Error" },
                  { src: coverCnVerte, t: "Verte" },
                  { src: coverCnYoPrimero, t: "Yo Primero" },
                  { src: coverCnYoSe, t: "Yo Sé" },
                  { src: coverCnBuscando, t: "Buscando el Millón" },
                ],
              },
              {
                handle: "@tatoarzune",
                ig: "https://instagram.com/tatoarzune",
                videoId: "1186334024",
                covers: [{ src: coverTusModales, t: "Tus Modales" }],
              },
              {
                handle: "@antoacuario",
                ig: "https://instagram.com/antoacuario",
                videoId: "1186333738",
                covers: [{ src: coverAntoVientre, t: "De Mi Vientre" }],
              },
              {
                handle: "@randallsoficial",
                ig: "https://instagram.com/randallsoficial",
                videoId: "1186333927",
                covers: [{ src: coverRandallsMadrugada, t: "En la Madrugada" }],
              },
              {
                handle: "@p.lar__",
                ig: "https://instagram.com/p.lar__",
                videoId: "1186333884",
                covers: [{ src: coverPlarLagrimas, t: "Lágrimas en Pausa" }],
              },
            ].map((art) => {
              const positions = [
                "tcov-1","tcov-2","tcov-3","tcov-4",
                "tcov-5","tcov-6","tcov-7","tcov-8",
                "tcov-9","tcov-10","tcov-11","tcov-12","tcov-13","tcov-14",
              ];
              return (
              <div className="artist-block reveal" key={art.handle}>
                <a
                  href={art.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="artist-handle"
                >
                  {art.handle} <span className="ig-arrow">↗</span>
                </a>
                <div className="testi-stage">
                  {art.covers.slice(0, positions.length).map((c, i) => (
                    <img
                      key={c.t}
                      src={c.src}
                      alt={`Portada ${c.t} - ${art.handle}`}
                      className={`testi-float ${positions[i]}`}
                      loading="lazy"
                    />
                  ))}
                  <div className="testi-video">
                    <iframe
                      src={`https://player.vimeo.com/video/${art.videoId}?title=0&byline=0&portrait=0`}
                      title={`Testimonio ${art.handle}`}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POR QUÉ CONFIAR */}
      <section>
        <div className="max-w why-grid">
          <div className="reveal">
            <p className="section-label">Por qué confiar en mí</p>
            <h2 className="section-title why-title">
              <span>No trabajo con</span><br />
              cualquiera.
            </h2>
            <p className="why-text">
              Llevo más de 10 años haciendo música y he trabajado con más de 100 artistas. Acompaño proyectos desde cero
              hasta lograr resultados que superen sus propias expectativas.
              <br />
              <br />
              No solo entiendo el sonido:{" "}
              <strong>entiendo lo que necesita un artista cuando quiere dejar de improvisar y empezar a construir.</strong>
            </p>
          </div>
          <div className="reveal why-card">
            <p className="why-card-h">Acompaño solo a un número reducido de artistas por mes.</p>
            <p className="why-card-p">Para que cada proyecto reciba tiempo, foco y compromiso TOTAL.</p>
            <p className="why-card-q">
              "Porque esto no es un servicio masivo.
              <br />
              Es un proceso profesional, hecho a medida."
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="agendar" className="cta-final">
        <h2>
          Si querés que te ayude a <span>DAR EL PASO</span><br />
          y tener una carrera profesional,
        </h2>
        <p>NOS VEMOS EN LA LLAMADA. Tené listas tus mejores canciones / demos.</p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <span>EMPEZAR!</span>
          <span className="arrow">→</span>
        </a>
        <p className="cta-note">Solo SUMO POCOS ARTISTAS NUEVOS POR MES · Recibís los BONUS exclusivos sin costo adicional</p>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">
          <img src={logoLarry} alt="LARRY" />
        </span>
        <span className="footer-text">Productor Musical · Dirección Artística · 2024</span>
      </footer>
    </div>
  );
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');

  .larry-root {
    --black: #050505;
    --white: #F0EDE8;
    --accent: #C0C0C0;
    --accent-dim: rgba(192,192,192,0.15);
    --accent-glow: rgba(192,192,192,0.08);
    --gray: #141414;
    --gray2: #1E1E1E;
    --text-muted: #666;
    background: #050505 url(${fondoLarry}) center top / cover no-repeat fixed;
    background-blend-mode: normal;
    color: var(--white);
    font-family: 'Space Mono', monospace;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
  }
  .larry-root::before {
    content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background:
      radial-gradient(ellipse at 15% 20%, rgba(192,192,192,0.07), transparent 50%),
      radial-gradient(ellipse at 85% 80%, rgba(192,192,192,0.05), transparent 55%);
  }
  .larry-root > * { position: relative; z-index: 1; }
  .larry-root * { box-sizing: border-box; }
  .larry-root a { color: inherit; text-decoration: none; }
  .larry-root img { max-width: 100%; display: block; }

  .max-w { max-width: 1280px; margin: 0 auto; width: 100%; }

  /* NAV */
  .larry-root nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 40px;
    background: rgba(5,5,5,0.85);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(192,192,192,0.06);
  }
  .nav-logo img { height: 28px; width: auto; filter: drop-shadow(0 0 12px rgba(192,192,192,0.15)); }
  .nav-links { display: flex; gap: 28px; }
  .nav-links a {
    font-family: 'Space Mono', monospace; font-size: 0.72rem;
    letter-spacing: 2px; text-transform: uppercase;
    color: #aaa; transition: color .25s;
  }
  .nav-links a:hover { color: var(--white); }

  /* SECTIONS */
  .larry-root section { padding: 110px 40px; position: relative; text-align: center; }
  .larry-root section .max-w { text-align: center; }

  .section-label {
    font-family: 'Space Mono', monospace; font-size: 0.7rem;
    letter-spacing: 5px; color: var(--accent); text-transform: uppercase;
    margin-bottom: 18px; text-align: center;
  }
  .section-title {
    font-family: 'Oswald', sans-serif; font-weight: 700;
    font-size: clamp(2.4rem, 6vw, 5.2rem);
    line-height: 0.95; text-transform: uppercase; letter-spacing: 1px;
    margin: 0 auto 20px; text-align: center;
  }
  .section-title span { color: var(--accent); font-style: italic; font-weight: 300; }
  .section-sub {
    font-family: 'Space Mono', monospace; font-size: 0.78rem;
    color: #777; line-height: 1.9; max-width: 620px;
    margin: 18px auto 40px; text-align: center;
  }

  /* HERO */
  .hero {
    min-height: 80vh; display: flex; flex-direction: column;
    justify-content: center; align-items: center; text-align: center;
    padding: 140px 40px 80px; position: relative; overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 20% 30%, rgba(192,192,192,0.10), transparent 55%),
      radial-gradient(ellipse at 80% 70%, rgba(192,192,192,0.06), transparent 60%);
    pointer-events: none;
    animation: heroPulse 9s ease-in-out infinite alternate;
  }
  @keyframes heroPulse {
    0% { opacity: .7; transform: scale(1); }
    100% { opacity: 1; transform: scale(1.06); }
  }
  .hero-eyebrow {
    font-size: 0.72rem; letter-spacing: 5px; color: var(--accent);
    text-transform: uppercase; margin-bottom: 30px; position: relative;
    animation: floatY 5s ease-in-out infinite;
  }
  @keyframes floatY {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  .hero h1 {
    font-family: 'Oswald', sans-serif; font-weight: 700;
    font-size: clamp(3rem, 9vw, 8rem); line-height: 0.92;
    text-transform: uppercase; letter-spacing: 1px;
    margin: 0 0 30px; position: relative; max-width: 1100px;
  }
  .hero h1 span { color: var(--accent); font-style: italic; font-weight: 300; }
  .hero-sub {
    font-size: 0.92rem; color: #aaa; line-height: 1.85;
    max-width: 620px; margin: 0 auto 40px; position: relative; text-align: center;
  }
  .hero-sub strong { color: var(--white); }
  .hero-cta { position: relative; display: flex; flex-direction: column; gap: 18px; align-items: center; }
  .hero-scarcity {
    font-family: 'Space Mono', monospace; font-size: 0.7rem;
    letter-spacing: 3px; color: var(--accent); text-transform: uppercase;
    margin: 0; opacity: .85;
    animation: blink 2.4s ease-in-out infinite;
  }
  @keyframes blink { 0%,100% { opacity: .55; } 50% { opacity: 1; } }

  /* BUTTONS */
  .btn {
    display: inline-flex; align-items: center; gap: 14px;
    padding: 18px 36px;
    font-family: 'Oswald', sans-serif; font-weight: 700;
    font-size: 0.9rem; letter-spacing: 4px; text-transform: uppercase;
    cursor: pointer; transition: transform .3s ease, box-shadow .3s ease, background .3s ease, color .3s ease;
    position: relative; overflow: hidden; border-radius: 2px;
  }
  .btn-primary {
    background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
    color: var(--white);
    border: 1px solid var(--accent);
    box-shadow:
      0 0 0 1px rgba(192,192,192,0.15),
      0 0 24px rgba(192,192,192,0.18),
      inset 0 1px 0 rgba(255,255,255,0.06);
    animation: btnPulse 2.8s ease-in-out infinite;
  }
  @keyframes btnPulse {
    0%,100% { box-shadow: 0 0 0 1px rgba(192,192,192,0.15), 0 0 18px rgba(192,192,192,0.15), inset 0 1px 0 rgba(255,255,255,0.06); }
    50% { box-shadow: 0 0 0 1px rgba(192,192,192,0.4), 0 0 38px rgba(192,192,192,0.32), inset 0 1px 0 rgba(255,255,255,0.1); }
  }
  .btn-primary::before {
    content: ''; position: absolute; top: 0; left: -120%;
    width: 60%; height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
    transition: left .7s ease;
  }
  .btn-primary:hover::before { left: 130%; }
  .btn-primary:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, var(--accent) 0%, #e5e5e5 100%);
    color: var(--black);
    box-shadow: 0 0 0 1px rgba(192,192,192,0.7), 0 16px 50px rgba(192,192,192,0.35);
    animation: none;
  }
  .btn-primary .arrow { transition: transform .3s; }
  .btn-primary:hover .arrow { transform: translateX(8px); }
  .btn-outline {
    background: transparent; color: var(--white);
    border: 1px solid var(--accent);
  }
  .btn-outline:hover { background: var(--accent); color: var(--black); transform: translateY(-2px); }
  .btn-dark {
    background: var(--black); color: var(--white);
    border: 1px solid var(--accent-dim);
  }
  .btn-dark:hover { background: #111; box-shadow: 0 8px 30px rgba(0,0,0,0.3); transform: translateY(-2px); }

  /* TICKER */
  .ticker-wrap {
    background: var(--accent); overflow: hidden;
    padding: 11px 0; white-space: nowrap;
  }
  .ticker-track { display: inline-block; animation: ticker 22s linear infinite; }
  .ticker-item {
    display: inline-block; font-family: 'Oswald', sans-serif;
    font-size: 0.95rem; font-weight: 600; letter-spacing: 4px;
    color: var(--black); padding: 0 28px; text-transform: uppercase;
  }
  .ticker-dot { display: inline-block; color: #555; padding: 0 8px; }
  @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

  /* VSL */
  .vsl-section { background: linear-gradient(180deg, rgba(5,5,5,0.6), rgba(10,10,10,0.85)); }
  .video-stage {
    position: relative; width: 100%; max-width: 900px;
    margin: 30px auto 0; padding: 60px 80px;
  }
  .video-wrap {
    position: relative; width: 100%; padding-top: 56.25%;
    background: #000; overflow: hidden;
    border: 1px solid rgba(192,192,192,0.18);
    box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(192,192,192,0.06);
    z-index: 2;
  }
  .video-wrap iframe {
    position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
  }
  .float-cover {
    position: absolute; width: 110px; height: 110px; object-fit: cover;
    border: 1px solid rgba(192,192,192,0.25);
    box-shadow: 0 12px 30px rgba(0,0,0,0.6);
    z-index: 1; opacity: 0.85;
    border-radius: 4px;
    pointer-events: none;
  }
  .float-cover.float-1 { top: 0; left: -10px; transform: rotate(-8deg); animation: floatA 7s ease-in-out infinite; }
  .float-cover.float-2 { top: 30px; right: -20px; transform: rotate(9deg); animation: floatB 8s ease-in-out infinite; }
  .float-cover.float-3 { top: 45%; left: -50px; transform: rotate(-4deg); animation: floatA 9s ease-in-out infinite -2s; }
  .float-cover.float-4 { top: 50%; right: -50px; transform: rotate(6deg); animation: floatB 7.5s ease-in-out infinite -1s; }
  .float-cover.float-5 { bottom: 10px; left: 10px; transform: rotate(7deg); animation: floatB 8.5s ease-in-out infinite -3s; }
  .float-cover.float-6 { bottom: 20px; right: 0; transform: rotate(-6deg); animation: floatA 7.8s ease-in-out infinite -1.5s; }
  @keyframes floatA {
    0%,100% { transform: translateY(0) rotate(-8deg); }
    50% { transform: translateY(-14px) rotate(-4deg); }
  }
  @keyframes floatB {
    0%,100% { transform: translateY(0) rotate(8deg); }
    50% { transform: translateY(14px) rotate(4deg); }
  }
  .vsl-cta {
    margin-top: 50px; text-align: center;
    display: flex; flex-direction: column; align-items: center; gap: 18px;
  }
  .vsl-cta-title {
    font-family: 'Oswald', sans-serif; font-weight: 700;
    font-size: clamp(1.6rem, 3.5vw, 2.6rem);
    text-transform: uppercase; letter-spacing: 1px;
    line-height: 1.15; margin: 0; color: var(--white);
  }
  .vsl-cta-title span { color: var(--accent); font-style: italic; font-weight: 400; }
  .vsl-cta-sub {
    font-family: 'Oswald', sans-serif; font-weight: 600;
    font-size: 1.1rem; letter-spacing: 4px; text-transform: uppercase;
    color: var(--accent); margin: 0 0 8px;
  }

  /* SERVICES */
  .services-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 1px; background: rgba(192,192,192,0.08);
    margin-top: 50px; border: 1px solid rgba(192,192,192,0.08);
  }
  .service-card {
    background: rgba(8,8,8,0.85); padding: 50px 40px; position: relative;
    transition: background .35s, transform .35s, box-shadow .35s;
  }
  .service-card:hover {
    background: var(--gray); transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(192,192,192,0.15);
  }
  .service-num {
    position: absolute; top: 30px; right: 30px;
    font-family: 'Oswald', sans-serif; font-size: 0.7rem;
    letter-spacing: 2px; color: #444;
  }
  .service-icon { font-size: 2.4rem; margin-bottom: 22px; }
  .service-card h3 {
    font-family: 'Oswald', sans-serif; font-weight: 600;
    font-size: 1.6rem; text-transform: uppercase; letter-spacing: 1px;
    margin: 0 0 16px;
  }
  .service-card p {
    font-size: 0.78rem; color: #888; line-height: 1.85; margin: 0 0 22px;
  }
  .pill {
    display: inline-block; padding: 6px 14px;
    border: 1px solid var(--accent-dim);
    font-size: 0.65rem; letter-spacing: 2px;
    color: var(--accent); text-transform: uppercase;
  }

  /* TRUST */
  .trust-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 30px; text-align: center;
  }
  .trust-num {
    font-family: 'Oswald', sans-serif; font-weight: 700;
    font-size: clamp(2.6rem, 5vw, 4.2rem); color: var(--accent);
    line-height: 1;
  }
  .trust-desc {
    font-size: 0.7rem; letter-spacing: 2px;
    color: #666; text-transform: uppercase; margin-top: 12px;
  }

  .divider { height: 1px; background: rgba(192,192,192,0.07); }

  /* SPOTIFY */
  .spotify-section { background: rgba(8,8,8,0.7); }
  .spotify-wrap {
    margin-top: 30px;
    border: 1px solid rgba(192,192,192,0.18);
    box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(192,192,192,0.05);
    background: #000;
    transition: box-shadow .4s, transform .4s;
  }
  .spotify-wrap:hover {
    box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 80px rgba(192,192,192,0.12);
    transform: translateY(-3px);
  }
  .spotify-wrap iframe {
    width: 100%; height: 480px; border: 0; display: block;
  }

  /* BONUS */
  .bonus-section { background: rgba(8,8,8,0.7); }
  .bonus-header {
    display: flex; flex-direction: column; align-items: center;
    gap: 16px; margin-bottom: 50px; text-align: center;
  }
  .bonus-badge {
    display: inline-block; padding: 8px 16px;
    background: var(--accent-glow); border: 1px solid var(--accent-dim);
    font-size: 0.65rem; letter-spacing: 2px; color: var(--accent);
    text-transform: uppercase; margin-bottom: 18px;
  }
  .bonus-intro {
    font-size: 0.78rem; color: #888; line-height: 1.9; max-width: 560px;
    margin: 0 auto; text-align: center;
  }
  .bonus-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .bonus-card {
    background: var(--gray); padding: 40px 32px; position: relative;
    border: 1px solid rgba(192,192,192,0.06);
    transition: transform .3s, border-color .3s;
  }
  .bonus-card:hover { transform: translateY(-6px); border-color: var(--accent-dim); }
  .bonus-free {
    position: absolute; top: 20px; right: 20px;
    font-family: 'Oswald', sans-serif; font-size: 0.65rem;
    background: var(--accent); color: var(--black);
    padding: 5px 11px; letter-spacing: 2px; font-weight: 700;
  }
  .bonus-card-label {
    font-size: 0.65rem; letter-spacing: 2px;
    color: var(--accent); text-transform: uppercase; margin: 0 0 14px;
  }
  .bonus-card h3 {
    font-family: 'Oswald', sans-serif; font-weight: 700;
    font-size: 1.7rem; text-transform: uppercase; letter-spacing: 1px;
    line-height: 1; margin: 0 0 18px;
  }
  .bonus-card > p {
    font-size: 0.75rem; color: #888; line-height: 1.85; margin: 0 0 20px;
  }
  .bonus-list {
    list-style: none; padding: 0; margin: 0;
    border-top: 1px solid rgba(192,192,192,0.07); padding-top: 18px;
  }
  .bonus-list li {
    font-size: 0.72rem; color: #999; line-height: 1.7;
    padding-left: 18px; position: relative; margin-bottom: 9px;
  }
  .bonus-list li::before {
    content: '→'; position: absolute; left: 0; color: var(--accent);
  }
  .bonus-cta-row {
    display: flex; align-items: center; gap: 32px; flex-wrap: wrap;
    margin-top: 50px;
  }
  .bonus-note { font-size: 0.7rem; color: #555; line-height: 1.8; }

  /* ANTES Y DESPUÉS */
  .ba-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 30px; margin-top: 30px;
  }
  .ba-video { position: relative; }
  .ba-tag {
    font-family: 'Oswald', sans-serif; font-size: 0.7rem;
    letter-spacing: 3px; color: var(--accent);
    margin-bottom: 14px; text-transform: uppercase;
  }

  /* TESTI / ARTISTAS */
  .testi-section { background: rgba(10,10,10,0.7); padding: 100px 40px; }

  .artists-stack { display: flex; flex-direction: column; gap: 100px; margin-top: 30px; }
  .artist-block {
    display: flex; flex-direction: column; align-items: center; gap: 22px;
    padding-bottom: 70px;
    border-bottom: 1px solid rgba(192,192,192,0.07);
  }
  .artist-block:last-child { border-bottom: 0; padding-bottom: 0; }

  .testi-stage {
    position: relative;
    width: 100%; max-width: 720px;
    padding: 30px 130px;
    margin: 0 auto;
  }
  .testi-video {
    position: relative; width: 100%; max-width: 320px;
    margin: 0 auto;
    aspect-ratio: 9 / 16;
    background: #000; overflow: hidden;
    border: 1px solid rgba(192,192,192,0.18);
    box-shadow: 0 20px 60px rgba(0,0,0,0.55), 0 0 50px rgba(192,192,192,0.06);
    z-index: 2;
  }
  .testi-video iframe {
    position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
  }
  .testi-float {
    position: absolute; width: 92px; height: 92px; object-fit: cover;
    border: 1px solid rgba(192,192,192,0.28);
    box-shadow: 0 10px 26px rgba(0,0,0,0.6);
    border-radius: 4px; z-index: 1; opacity: 0.92;
    pointer-events: none;
  }
  .tcov-1  { top: 4%;   left: 0;   transform: rotate(-9deg); animation: floatA 7s ease-in-out infinite; }
  .tcov-2  { top: 4%;   right: 0;  transform: rotate(8deg);  animation: floatB 8s ease-in-out infinite; }
  .tcov-3  { top: 26%;  left: -10px; transform: rotate(-5deg); animation: floatA 9s ease-in-out infinite -2s; }
  .tcov-4  { top: 26%;  right: -10px; transform: rotate(6deg);  animation: floatB 7.5s ease-in-out infinite -1s; }
  .tcov-5  { top: 50%;  left: 4px;  transform: rotate(-3deg); animation: floatA 8s ease-in-out infinite -3s; }
  .tcov-6  { top: 50%;  right: 4px; transform: rotate(4deg);  animation: floatB 8.4s ease-in-out infinite -2.5s; }
  .tcov-7  { bottom: 22%; left: -8px; transform: rotate(-7deg); animation: floatA 9s ease-in-out infinite -1.5s; }
  .tcov-8  { bottom: 22%; right: -8px; transform: rotate(7deg);  animation: floatB 7.8s ease-in-out infinite -0.8s; }
  .tcov-9  { bottom: 4%; left: 8px;  transform: rotate(-5deg); animation: floatA 8.6s ease-in-out infinite -2.2s; }
  .tcov-10 { bottom: 4%; right: 8px; transform: rotate(6deg);  animation: floatB 8.2s ease-in-out infinite -3.5s; }
  .tcov-11 { top: 14%; left: 22%; transform: rotate(-10deg); animation: floatA 7.4s ease-in-out infinite -1.2s; }
  .tcov-12 { top: 14%; right: 22%; transform: rotate(9deg);  animation: floatB 7.6s ease-in-out infinite -2.8s; }
  .tcov-13 { bottom: 12%; left: 22%; transform: rotate(-6deg); animation: floatA 8.8s ease-in-out infinite -0.5s; }
  .tcov-14 { bottom: 12%; right: 22%; transform: rotate(5deg);  animation: floatB 9.2s ease-in-out infinite -3.2s; }

  .artist-handle {
    font-family: 'Oswald', sans-serif; font-size: 0.95rem;
    letter-spacing: 2px; color: var(--accent);
    text-align: center; padding: 12px 18px;
    border: 1px solid var(--accent-dim);
    transition: all .3s ease;
    text-transform: lowercase;
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  }
  .artist-handle:hover {
    background: var(--accent); color: var(--black);
  }
  .ig-arrow { font-size: 0.8rem; transition: transform .3s; }
  .artist-handle:hover .ig-arrow { transform: translate(3px, -3px); }

  /* WORK CARDS */
  .work-card {
    margin: 0; position: relative; overflow: hidden;
    background: #000; border: 1px solid rgba(192,192,192,0.08);
    transition: transform .35s, border-color .35s;
  }
  .work-card:hover { transform: translateY(-4px); border-color: var(--accent-dim); }
  .work-card img {
    width: 100%; aspect-ratio: 1/1; object-fit: cover;
    transition: transform .6s ease;
  }
  .work-card:hover img { transform: scale(1.05); }
  .work-card figcaption {
    position: absolute; left: 0; right: 0; bottom: 0;
    padding: 10px 12px;
    background: linear-gradient(180deg, transparent, rgba(0,0,0,0.9));
  }
  .work-title {
    font-family: 'Oswald', sans-serif; font-weight: 600;
    font-size: 0.72rem; letter-spacing: 1.2px;
    color: var(--white); text-transform: uppercase;
  }

  /* WHY */
  .why-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: center;
  }
  .why-title { font-size: clamp(2rem, 5vw, 3.5rem) !important; }
  .why-text {
    font-size: 0.78rem; color: #777; line-height: 2; margin-top: 28px;
  }
  .why-text strong { color: var(--white); }
  .why-card {
    background: rgba(12,12,12,0.9); padding: 50px 40px;
    border-left: 2px solid var(--accent);
  }
  .why-card-h {
    font-family: 'Oswald', sans-serif; font-weight: 700;
    font-size: 1.7rem; line-height: 1.15; margin: 0 0 22px;
    text-transform: uppercase; letter-spacing: 1px;
  }
  .why-card-p {
    font-size: 0.74rem; color: #666; line-height: 1.9; margin: 0 0 22px;
  }
  .why-card-q {
    font-size: 0.74rem; color: var(--accent); font-style: italic; margin: 0;
  }

  /* CTA FINAL */
  .cta-final {
    text-align: center;
    background: linear-gradient(180deg, rgba(240,237,232,0.97), rgba(220,217,212,0.97));
    padding: 110px 40px; position: relative; overflow: hidden;
  }
  .cta-final::before {
    content: 'EMPEZAR'; position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Oswald', sans-serif; font-weight: 700;
    font-size: clamp(5rem, 18vw, 16rem); color: rgba(0,0,0,0.05);
    white-space: nowrap; pointer-events: none; letter-spacing: 10px;
    animation: floatY 6s ease-in-out infinite;
  }
  .cta-final h2 {
    font-family: 'Oswald', sans-serif; font-weight: 700;
    text-transform: uppercase;
    font-size: clamp(2.2rem, 6vw, 5.5rem);
    color: var(--black); line-height: 0.95;
    position: relative; letter-spacing: 2px; margin: 0;
  }
  .cta-final h2 span { color: #2a2a2a; font-style: italic; font-weight: 400; }
  .cta-final p {
    font-size: 0.82rem; color: #444;
    margin: 22px 0 38px; position: relative; letter-spacing: 1px;
  }
  .cta-note {
    font-size: 0.65rem; color: #666;
    margin-top: 22px !important; position: relative; letter-spacing: 1px;
  }

  /* FOOTER */
  .larry-root footer {
    background: #020202;
    border-top: 1px solid rgba(192,192,192,0.06);
    padding: 36px 40px;
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 16px;
  }
  .footer-logo img { height: 22px; opacity: 0.85; }
  .footer-text { font-size: 0.65rem; color: #444; letter-spacing: 1px; }

  /* REVEAL */
  .reveal { opacity: 0; transform: translateY(40px); transition: opacity .7s ease, transform .7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* RESPONSIVE — MOBILE FIRST OPTIMIZADO */
  @media (max-width: 1024px) {
    .why-grid { grid-template-columns: 1fr; gap: 40px; }
    .bonus-grid { grid-template-columns: repeat(2, 1fr); }
    .ba-grid { grid-template-columns: 1fr; }
    .video-stage { padding: 40px 30px; }
    .float-cover { width: 80px; height: 80px; }
  }

  @media (max-width: 768px) {
    .larry-root nav { padding: 14px 20px; }
    .nav-logo img { height: 22px; }
    .nav-links { display: none; }
    .larry-root section { padding: 70px 20px; }
    .hero { padding: 110px 20px 60px; min-height: auto; }
    .hero h1 { font-size: clamp(2.5rem, 12vw, 4rem); }
    .hero-sub { font-size: 0.85rem; }
    .btn { padding: 16px 26px; font-size: 0.78rem; letter-spacing: 3px; gap: 10px; width: 100%; justify-content: center; max-width: 320px; }
    .services-grid { grid-template-columns: 1fr; }
    .service-card { padding: 36px 26px; }
    .trust-grid { grid-template-columns: repeat(2, 1fr); gap: 30px 20px; }
    .bonus-grid { grid-template-columns: 1fr; }
    .bonus-card { padding: 32px 24px; }
    .bonus-cta-row { flex-direction: column; align-items: center; gap: 20px; }
    .artist-block { gap: 18px; padding-bottom: 50px; }
    .artist-handle { font-size: 0.85rem; }
    .artists-stack { gap: 70px; }
    .why-card { padding: 36px 26px; }
    .cta-final { padding: 80px 20px; }
    .larry-root footer { padding: 28px 20px; flex-direction: column; text-align: center; }
    .spotify-wrap iframe { height: 420px; }
    .ticker-item { font-size: 0.78rem; padding: 0 16px; letter-spacing: 3px; }
    .testi-stage { padding: 20px 70px; max-width: 460px; }
    .testi-float { width: 64px; height: 64px; }
    .vsl-cta-title { font-size: 1.4rem; }
  }

  @media (max-width: 480px) {
    .testi-stage { padding: 14px 56px; }
    .testi-float { width: 50px; height: 50px; }
    .testi-video { max-width: 220px; }
  }

  @media (max-width: 420px) {
    .hero h1 { font-size: 2.4rem; }
    .section-title { font-size: 2.2rem; }
    .bonus-card h3 { font-size: 1.4rem; }
    .why-card-h { font-size: 1.35rem; }
    .spotify-wrap iframe { height: 380px; }
  }
`;

export default Index;
