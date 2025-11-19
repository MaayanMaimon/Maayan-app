// app/page.tsx
import Image from "next/image";
import Link from "next/link";

// Main landing page for the Product Jam mini–site
export default function Home() {
  return (
    <main>
      {/* Hero section – main intro and context for the projects */}
      <section className="hero">
        <h1 className="hero-title">Digital Product Jam - From a game to Design</h1>
        <p className="hero-subtitle">
          {/* Short welcome text explaining what this page is about */}
          Welcome to my Product Jam projects!<br />
          Here you can explore the three parts of the assignment: A Tic-Tao-Tac game,
          an art gallery and a product design page.
        </p>

        {/* Logos row – shows the collaboration between HUJI and Bezalel */}
        <div className="logo-row">
          <Image
            src="/huji.svg"
            alt="HUJI Logo"
            width={80}
            height={80}
            priority
          />
          <Image
            src="/bezalel.svg"
            alt="Bezalel Logo"
            width={80}
            height={80}
            priority
          />
        </div>
      </section>

      {/* Projects grid – navigation cards to each part of the assignment */}
      <section className="projects">
        <h2>My Product Jam Projects</h2>
        <p>
          {/* Simple instruction for how to use the page */}
          Click a card to open each part of the assignment and see the result.
        </p>

        <div className="projects-grid">
          {/* Part 1 – Tic-Tac-Toe game built with React */}
          <Link href="/tic-tac-toe" className="project-card project-card--game">
            {/* Icon to give the card a playful, game-like feel */}
            <div className="project-icon">🎮</div>
            <span className="project-badge">חלק 1</span>
            <h3 className="project-title">React Tic-Tac-Toe</h3>
            <p className="project-description">
              A classic X-O game in React, with a playful UI and winner
              highlighting.
            </p>
          </Link>

          {/* Part 2 – Artwork gallery powered by the Met Museum API */}
          <Link href="/art" className="project-card project-card--art">
            {/* Paint palette emoji to represent the art gallery */}
            <div className="project-icon">🎨</div>
            <span className="project-badge">חלק 2</span>
            <h3 className="project-title">Met Art Explorer</h3>
            <p className="project-description">
              A gallery that fetches artworks from the Met Museum API and
              displays curated pieces from a chosen department.
            </p>
          </Link>

          {/* Part 3 – Ensemble design concept page */}
          <Link href="/design" className="project-card project-card--design">
            {/* Israel_Museum_Logo*/}
            {/* Using the Israel Museum logo here to better match the Ensemble concept */}
            <div className="project-icon">
              <Image
                src="/Israel_Museum_Logo.svg.png"
                alt="לוגו מוזיאון ישראל"
                width={32}
                height={32}
              />
            </div>
            <span className="project-badge">חלק 3</span>
            <h3 className="project-title">Ensemble - Design App Concept</h3>
            <p className="project-description">
              A mobile-style scrolling page that presents the Ensemble app for
              curators and artists, based on your Figma design.
            </p>
          </Link>
        </div>
      </section>

      {/* Small footer with course credit and context */}
      <section className="projects-footer">
        <p>
          Built as part of the <strong>Digital Product Jam</strong> course – HUJI
          × Bezalel.
        </p>
      </section>
    </main>
  );
}
