const useCases = [
  "Music",
  "Studio",
  "Digital Piano",
  "Travel",
  "Gaming",
  "Work",
];

const foundations = [
  {
    number: "01",
    title: "Your use",
    text: "What you listen to, where you listen and which device you use.",
  },
  {
    number: "02",
    title: "Your preferences",
    text: "Balanced, warm, bass-forward, vocal-focused or analytical sound.",
  },
  {
    number: "03",
    title: "Verified products",
    text: "Recommendations built from structured product data—not invented specifications.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#" aria-label="HeadphonesBase home">
          <span className="brandMark">HB</span>
          <span>HeadphonesBase</span>
        </a>

        <div className="navLinks" aria-label="Primary navigation">
          <a href="#method">Method</a>
          <a href="#categories">Categories</a>
          <span className="status">Private beta</span>
        </div>
      </nav>

      <section className="hero shell">
        <div className="eyebrow">
          <span className="pulse" />
          Personal audio intelligence
        </div>

        <h1>
          Your ears are not average.
          <span>Your headphones shouldn’t be either.</span>
        </h1>

        <p className="lead">
          Find headphones matched to your music, equipment, environment and
          listening preferences—not a generic top-ten list.
        </p>

        <div className="heroActions">
          <button className="primary" type="button">
            Find My Sound
            <span aria-hidden="true">→</span>
          </button>
          <a className="secondary" href="#method">
            See how it works
          </a>
        </div>

        <p className="microcopy">
          Recommendation engine in development. No account required for the
          first version.
        </p>

        <div className="visual" aria-label="Abstract audio compatibility display">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="visualGrid" />
          <div className="scoreCard">
            <div className="scoreHeader">
              <span>Personal match</span>
              <strong>94%</strong>
            </div>
            <div className="productLine">
              <div className="headphoneIcon">◖●◗</div>
              <div>
                <small>Best fit</small>
                <h2>Studio Reference X</h2>
                <p>Closed-back · balanced · low-fatigue</p>
              </div>
            </div>
            <div className="meters">
              <div><span>Use case</span><i style={{ width: "96%" }} /></div>
              <div><span>Sound profile</span><i style={{ width: "90%" }} /></div>
              <div><span>Device match</span><i style={{ width: "88%" }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="strip" id="categories">
        <div className="shell categories">
          <span>Built for</span>
          {useCases.map((item) => (
            <span className="category" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="method shell" id="method">
        <div className="sectionIntro">
          <div>
            <p className="kicker">The foundation</p>
            <h2>Recommendation before advertising.</h2>
          </div>
          <p>
            HeadphonesBase will rank products by suitability. Affiliate
            commission will never decide the result.
          </p>
        </div>

        <div className="cards">
          {foundations.map((item) => (
            <article className="card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand">
          <span className="brandMark">HB</span>
          <span>HeadphonesBase</span>
        </div>
        <p>Building the shortest path between a person and the right sound.</p>
      </footer>
    </main>
  );
}
