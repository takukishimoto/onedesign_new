import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

// 画像は一旦そのまま（差し替えればOK）
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const projects = [
    {
      image: project1,
      title: "MINIMAL RESIDENCE",
      location: "NEW YORK, 2024",
      category: "RESIDENTIAL",
      description:
        "A contemporary home focusing on light, space, and material honesty. The design emphasizes clean lines and natural materials.",
      area: "450 SQM",
      year: "2024",
    },
    {
      image: project2,
      title: "CORPORATE HEADQUARTERS",
      location: "LONDON, 2023",
      category: "COMMERCIAL",
      description:
        "Modern office space emphasizing collaboration and natural elements. Features flexible workspaces and sustainable design principles.",
      area: "1200 SQM",
      year: "2023",
    },
    {
      image: project3,
      title: "CULTURAL CENTER",
      location: "TOKYO, 2023",
      category: "CULTURAL",
      description:
        "Public architecture that bridges tradition with contemporary design. A space for community gathering and cultural exchange.",
      area: "800 SQM",
      year: "2023",
    },
    {
      image: project1,
      title: "URBAN LOFT",
      location: "BERLIN, 2024",
      category: "RESIDENTIAL",
      description:
        "Industrial heritage meets contemporary living. Raw materials balanced with refined details.",
      area: "180 SQM",
      year: "2024",
    },
    {
      image: project2,
      title: "GALLERY SPACE",
      location: "PARIS, 2022",
      category: "CULTURAL",
      description:
        "Minimalist gallery designed to showcase art without distraction. Pure white spaces with carefully controlled lighting.",
      area: "600 SQM",
      year: "2022",
    },
    {
      image: project3,
      title: "BOUTIQUE HOTEL",
      location: "MILAN, 2023",
      category: "HOSPITALITY",
      description:
        "Luxury hospitality redefined through architectural restraint. Every detail carefully considered for guest experience.",
      area: "2400 SQM",
      year: "2023",
    },
  ];

  const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "CULTURAL", "HOSPITALITY"];

  const filteredProjects = useMemo(() => {
    return activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* TYPO HERO（Services と同じトーンで） */}
      <PageHero
        label="制作実績"
        enTitle="Works"
        jpTitle={
          <>
        
            伝える設計で、成果につなげる。
          </>
        }
        bottom="Web / Design / Branding / Marketing"
      />

      {/* FILTER */}
      <section className="pb-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-x-10 gap-y-4 justify-center md:justify-start">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`relative text-xs tracking-[0.28em] transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category}
                    <span
                      className={`absolute -bottom-2 left-0 h-px w-full bg-foreground transition-transform origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-10 h-px w-full bg-border" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="pb-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
              {filteredProjects.map((project, index) => (
                <article key={index} className="group">
                  {/* image */}
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[52vh] md:h-[56vh] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* category tag */}
                    <div className="absolute left-4 top-4 md:left-6 md:top-6">
                      <span className="inline-flex items-center rounded-full border border-border bg-background/80 backdrop-blur px-4 py-2 text-[11px] tracking-[0.22em] text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* text */}
                  <div className="mt-8">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="font-serif text-[clamp(1.6rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight text-foreground">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs tracking-[0.22em] text-muted-foreground">
                          {project.location}
                        </p>
                      </div>

                      {/* meta */}
                      <div className="shrink-0 text-right">
                        <p className="text-[11px] tracking-[0.22em] text-muted-foreground">YEAR</p>
                        <p className="mt-1 text-sm text-foreground">{project.year}</p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
                      <div>
                        <p className="text-[11px] tracking-[0.22em] text-muted-foreground">
                          AREA
                        </p>
                        <p className="mt-2 text-sm text-foreground">{project.area}</p>
                      </div>
                      <div>
                        <p className="text-[11px] tracking-[0.22em] text-muted-foreground">
                          CATEGORY
                        </p>
                        <p className="mt-2 text-sm text-foreground">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA（Services のCTAと揃える） */}
      <section className="py-24 bg-muted/25">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.28em] text-muted-foreground mb-6">
              CONTACT
            </p>
            <h2 className="font-serif text-[clamp(2.0rem,3.2vw,3.0rem)] leading-[1.2] tracking-tight text-foreground">
              伝える設計で、成果につなげる。
            </h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-muted-foreground">
              「何から相談していいかわからない」段階でも大丈夫です。<br />
              目的と状況を整理し、成果につながる進め方をご提案します。
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center px-10 py-4 border border-foreground/60 bg-background text-foreground transition
                           hover:bg-foreground hover:text-background hover:border-foreground rounded-xl"
              >
                <span className="text-sm tracking-wide">ご相談はこちら</span>
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;